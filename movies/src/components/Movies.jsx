import React, { useState, useEffect } from 'react';
import { store } from './Firebase';
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { auth } from './Firebase';
import { Link } from 'react-router';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [hasOscar, setOscar] = useState(false);

  const [updateMovieTitle, setUpdatedTitle] = useState([])

  const movieCollectionRef = collection(store, 'movies');


  //READ MOVIES
  useEffect(() => {
    async function getData() {
      try {
        const data = await getDocs(movieCollectionRef);
        const movieList = data.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setMovies(movieList);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    getData();
  }, [movies]);

  //CREATE MOVIES IN FIREBASE DB

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addDoc(movieCollectionRef, {
        title: title,
        directedBy: director,
        releaseDate: releaseDate,
        hasOscar : hasOscar,
        userId: auth?.currentUser?.uid   // this mark is only for when the user is logged in
      });
      setTitle('');
      setDirector('');
      setReleaseDate('');
      setOscar(false);
    } catch (error) {
      console.log(error);
    }
  }

  //DELETE FROM DM

  async function remove(idParam) {
    const itemToDel = doc(store, 'movies', idParam);
    await deleteDoc(itemToDel);
  }
  async function update(idParam) {
    const itemToDel = doc(store, 'movies', idParam);
    await updateDoc(itemToDel, {title: updateMovieTitle});
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-5">
      <Link to={'/'}>Navigate to home</Link>
      <Link to={'/'}>LogOut</Link>
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Add a Movie</h1>
        <div className="flex flex-col gap-3">
          <input className="border border-gray-400 p-2 rounded" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input className="border border-gray-400 p-2 rounded" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} />
          <input className="border border-gray-400 p-2 rounded" placeholder="Release Date" type="number" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
          <div className="flex items-center gap-2">
            <input id="oscarLabel" type="checkbox" checked={hasOscar} onChange={(e) => setOscar(e.target.checked)} />
            <label htmlFor="oscarLabel" className="text-gray-700">Oscar?</label>
          </div>
          <button className="bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-600 transition" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <div className="mt-8 w-full max-w-lg">
        {movies.length > 0 ? (
          movies.map((item) => (
            <div key={item.id} className="bg-white shadow-md p-4 rounded-lg mb-4 flex justify-between items-center">
              <div>
                <h3 className={`text-lg font-semibold ${item.hasOscar ? 'text-green-600' : 'text-blue-600'}`}> {item.title}</h3>
                <h4 className="text-gray-600">Director: {item.directedBy}</h4>
                <p className="text-gray-500">Release Date: {item.releaseDate}</p>
              </div>
              <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition" onClick={() => remove(item.id)}>Delete</button>
              <input placeholder='update the title' onChange={(e) => setUpdatedTitle(e.target.value)}/>
              <button onClick={() => {update(item.id)}}>Update</button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No movies added yet.</p>
        )}
      </div>
    </div>
  );
}

export default Movies;

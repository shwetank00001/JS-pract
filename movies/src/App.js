import React, { useState } from 'react';

import Auth from './components/Auth';
import { store } from './components/Firebase';
import { getDocs, collection, addDoc, deleteDoc, doc} from 'firebase/firestore';

function App() {
  const [movie,setMovie] = React.useState([])

  const [title, setTitle] = useState()
  const [director, setDirector] = useState()
  const [releaseDate, setReleaseDate] = useState()
  const [hasOscar, setOscar] = useState(false)

  const movieCollectionRef = collection(store, "movies")

  React.useEffect(() => {
    async function getdata() {
      try {
        //READ DATA
        const data = await getDocs(movieCollectionRef);
        const movieList = data.docs.map((item) => ({
          id: item.id, // If you need the document ID
          ...item.data(), // Extracts Firestore fields
        }));
        console.log("Movies:", movieList);
        setMovie(movieList)
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    getdata();
  }, [movie]);

  const ele = movie.map(function(item){
    return(
      <div key={item.id}>
        <h3 style={{color : item.hasOscar ? "green" : "Blue" }}>Title: {item.title}</h3>
        <h4>Director: {item.directedBy}</h4>
        <p>Date: {item.releaseDate}</p>
        <button onClick={() => remove(item.id)}>Delete</button>
      </div>
    )
  })

  //ADD DATA IN DB 
  async function handleSubmit(e){
    e.preventDefault()
    try {
      await addDoc(movieCollectionRef, {
        title: title,
        directedBy: director,
        releaseDate: releaseDate,
        hasOscar: hasOscar
      })
    } catch (error) {
      console.log(error)
    }
  }

  //DELETE FROM DB
  async function remove(idParam){
    const itemToDel = doc(store, "movies", idParam)
    await deleteDoc(itemToDel)
  }
  return (
    <div className="App">
      <Auth />

      <div>
        <h1>Input your own movies!</h1>
        <input placeholder='add Title' value={title} onChange={(e) => setTitle(e.target.value)}  />
        <input placeholder='add Director' value={director} onChange={(e) => setDirector(e.target.value)}  />
        <input placeholder='add Release Date' type='number' value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)}  />
        <input id='oscarLabel' type='checkbox' />
        <label htmlFor='oscarLabel' checked={hasOscar} onChange={(e) => setOscar(e.target.checked)}>Oscar?</label>

        <button onClick={handleSubmit}>Submit movie name</button>
      </div>
      <br />
      {ele}
    </div>
  );
}

export default App;

import React from 'react'
import Book from './Book'
import './booklist.css'

function Booklist() {

  const project2 = {
    image : "https://m.media-amazon.com/images/I/51RXyeWjE1L.AC_SX250.jpg",
    title : "I will be selected",
    author : "Only Shwetank"
  }
  const project3 = {
    image : "https://images-eu.ssl-images-amazon.com/images/I/81+ceFx9BcL._AC_UL600_SR600,400_.jpg",
    title : "Book 3",
    author : "Author 3"
  }
  return (
    <section className='booklist'>
        <Book 
        image = 'https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_FMwebp_QL65_.jpg'
        title = "Selected at EY!!" 
        author = "Shwetank Mishra"
        >
                    <p>I will definitely become SDE1 by the end of this month!</p>
        </Book>
        <Book 
               image = {project2.image}
               title = {project2.title} 
               author = {project2.author}
        >
          <p>Testing CHildren 2</p>
        </Book>
        {/* <Book 
          image = {project3.image}
          title = {project3.title}
          author = {project3.author}
          // author = {project2.author}
          /> */}
    </section>
  )
}



export default Booklist
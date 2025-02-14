import React from "react";
// import Image from './Image'
import Author from "./Author";

function Book(props) {
  let { id, image, title, author } = props;

  function handle(e){
    console.log(title)
    console.log(e)
  }
  function data(id){
    console.log(`${id} has been deleted`)
  }
  return (
    <article className="book">
      <img onClick={() => {data(id)}} src={image} alt="" />
      <p onClick={handle}>{title}</p>
      <Author author={author} />
      {props.children}
    </article>
  );
}
// const Image = () => <img src='https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_FMwebp_QL65_.jpg' alt=''/>

// const Title = () => <p>React.js For Beginners</p>

export default Book;


  /*
  since props is an object that has the keys image, title, author!
  {image: 'https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_FMwebp_QL65_.jpg', title: 'Selected at EY!!', author: 'Shwetank Mishra'}

  we can destructure as usual by taking keys out. let {image, title, author} = props
  so we can use {title} instead of {props.title}
  console.log(props)
  */

  //   const image = 'https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_FMwebp_QL65_.jpg'
  // const title = "React.js For Beginners"
import React from "react";
// import Image from './Image'
import Author from "./Author";

function Book(props) {
  /*
  since props is an object that has the keys image, title, author!
  {image: 'https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_FMwebp_QL65_.jpg', title: 'Selected at EY!!', author: 'Shwetank Mishra'}

  we can destructure as usual by taking keys out. let {image, title, author} = props
  so we can use {title} instead of {props.title}
  console.log(props)
  */

  //   const image = 'https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_FMwebp_QL65_.jpg'
  // const title = "React.js For Beginners"

  let { image, title, author } = props;
  return (
    <article className="book">
      <img src={image} alt="" />
      <p>{title}</p>
      <Author author={author} />
      {props.children}
    </article>
  );
}
// const Image = () => <img src='https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_FMwebp_QL65_.jpg' alt=''/>

// const Title = () => <p>React.js For Beginners</p>

export default Book;

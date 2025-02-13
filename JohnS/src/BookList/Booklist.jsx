import React from "react";
import Book from "./Book";
import "./booklist.css";

function Booklist() {
  const bookArray = [
    {
      image: "https://m.media-amazon.com/images/I/51RXyeWjE1L.AC_SX250.jpg",
      title: "I will be selected",
      author: "Only Shwetank",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/81+ceFx9BcL._AC_UL600_SR600,400_.jpg",
      title: "Book 3",
      author: "Author 3",
    },
  ];

  const ele = bookArray.map(function(item){
    // return "hello"
    return (
      // <>
      // <h1>{title}</h1>
      // <h1>{author}</h1>
      // </>
      <Book image = {item.image}
        title = {item.title}
        author = {item.author}
      />
    )
  })

  // const names = ["L1", "L2", "L3"];
  // const newNames = names.map(function (item) {
  //   // const id = new Date().getTime()
  //   return <div key={item.id}>{item}</div>;
  // });


  return (
    <section className="booklist">
      {/* <Book /> */}
      {ele}
    </section>
  );
}

export default Booklist;

//NOTES
/* Map and NonMap - We wont get any rendering issues if we will use a string directly into JSX. 
Issues only in Objects 
Map returns a new array

hellohello // It give us this since we have 2 obects in array. [1,2]
*/
import React from "react";
import Book from "./Book";
import "./booklist.css";

import { bookArray, data2 } from "./bookObject";

function Booklist() {

  console.log(data2)

  const ele = bookArray.map(function(item){
    // return "hello"
    return (
      <Book 
          key = {item.id}
          id = {item.id}
          image = {item.image}
          title = {item.title}
          author = {item.author}
      />
    )
    // <>
    // <h1>{title}</h1>
    // <h1>{author}</h1>
    // </>
  })

  // const names = ["L1", "L2", "L3"];
  // const newNames = names.map(function (item) {
  //   const id = new Date().getTime()
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
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
  const names = ["L1", "L2", "L3"];
  const newNames = names.map(function (item) {
    // const id = new Date().getTime()
    return <div key={item.id}>{item}</div>;
  });
  return (
    <section className="booklist">
      {/* <Book /> */}
      {newNames}
    </section>
  );
}

export default Booklist;

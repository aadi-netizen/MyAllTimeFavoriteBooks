import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./data";
import Book from "./book";

function Booklist() {
  return (
    <>
      <h1>My All Time Favorite Books</h1>
      <section className="booklist">
        {books.map((book) => {
          // console.log(book);
          const { img, title, author, id } = book;
          return (
            <Book key={id} img={img} title={title} author={author} id={id} />
          );
        })}
      </section>
    </>
  );
}

export default Booklist;

const theElement = document.getElementById("root");
const root = ReactDOM.createRoot(theElement);
root.render(<Booklist />);

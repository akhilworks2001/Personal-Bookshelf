import React from "react";
import BookCard from "../components/BookCard";

export default function MyBookShelf({ bookshelf, removeFromBookshelf }) {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="results">
        {bookshelf.map((book) => (
          <BookCard 
            key={book.key}
            book={book}
            fun={removeFromBookshelf}
            type={'remove'}
          />
          
        ))}
      </div>
    </div>
  );
}

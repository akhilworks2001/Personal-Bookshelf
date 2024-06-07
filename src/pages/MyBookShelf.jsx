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
            removeFromBookshelf={removeFromBookshelf}
          />
          // <div key={book.key} className="book-card">
          //   <div className="container">
          //     <h3>Book Title:</h3>
          //     <p>{book?.title}</p>
          //   </div>
          //   <div className="container">
          //     <h3>Book Edition:</h3>
          //     <p>{book?.edition_count}</p>
          //   </div>
          //   <button onClick={() => removeFromBookshelf(book.key)}>
          //     Remove
          //   </button>
          // </div>
        ))}
      </div>
    </div>
  );
}

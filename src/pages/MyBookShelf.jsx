import React from 'react'

export default function MyBookShelf({ bookshelf, removeFromBookshelf }) {
  return (
    <div>
        <h1>My Bookshelf</h1>
        <div className="results">
            {bookshelf.map((book) => (
                <div key={book.key} className="book-card">
                    <h3>{book.title}</h3>
                    <p>{book.author_name?.join(', ')}</p>
                    <button onClick={() => removeFromBookshelf(book.key)}>Remove</button>
                </div>
            ))}
        </div>
    </div>
  )
}

import React from 'react'

export default function BookCard({book, addToBookshelf, removeFromBookshelf}) {
  return (
      <div className="book-card">
        <div className='container'>
          <h3>Book Title:</h3>
          <p>{book?.title}</p>
        </div>
        <div className="container">
          <h3>Book Edition:</h3>
          <p>{book?.edition_count}</p>
        </div>
          <button onClick={() => addToBookshelf ? addToBookshelf(book) : removeFromBookshelf(book)}> 
          {addToBookshelf ? 'Add to Bookshelf' : 'Remove'}
          </button>
      </div>
  )
}

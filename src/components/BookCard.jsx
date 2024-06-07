import React from 'react'

export default function BookCard({book, fun, type}) {
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
          <button onClick={() => fun(book)}> { type === 'add' ?  'Add to Bookshelf' : 'Remove'}  </button>
      </div>
  )
}

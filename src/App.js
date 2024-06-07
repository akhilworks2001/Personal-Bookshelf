import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BookshelfPage from './pages/MyBookShelf';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState(() => {
    return JSON.parse(localStorage.getItem('bookshelf')) || [];
  });

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  const addToBookshelf = (book) => {
    if (!bookshelf.some((b) => b.key === book.key)) {
      setBookshelf([...bookshelf, book]);
    }
  };

  const removeFromBookshelf = (recBook) => {
    const updatedBookshelf = bookshelf.filter((book) => book.key !== recBook.key);
    setBookshelf(updatedBookshelf);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Search</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SearchPage addToBookshelf={addToBookshelf} />} />
          <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} removeFromBookshelf={removeFromBookshelf} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

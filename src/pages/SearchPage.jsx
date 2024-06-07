import React, { useEffect, useState } from 'react'
import { fetchBooks } from '../utils/api';
import Input from '../components/Input';
import BookCard from '../components/BookCard';

export default function SearchPage({ addToBookshelf }) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const getBooks = async(query) => {
        if (query.length > 2) {
            setLoading(true)
           const result = await fetchBooks(query);
           setLoading(false);
           setResults(result);
        } else {
            setResults([]);
        }
    }
    useEffect(() => {
        getBooks(query);
    }, [query]);

  return (
      <div>
          <h1>Book Search</h1>
            <Input query={query} setQuery={setQuery} />

            <div className="results">
                {
                    loading && <h1>Loading....</h1>
                }
                {
                    results.length > 0 && results.map((book) => (
                        <BookCard 
                            key={book.key}
                            book={book}
                            fun={addToBookshelf}
                            type={'add'}
                        />
                    ))
                }
            </div>
      </div>
  )
}

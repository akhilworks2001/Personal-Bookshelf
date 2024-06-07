import React from 'react'

export default function Input({query, setQuery}) {
  return (
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for book"
         />
  )
}

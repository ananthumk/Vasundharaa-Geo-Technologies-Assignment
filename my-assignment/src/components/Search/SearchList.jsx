import React, { useState } from 'react';

const names = [
  'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Eve Adams',
  'Frank Miller', 'Grace Lee', 'Henry Wilson', 'Ivy Chen', 'Jack Taylor'
];

function SearchList() {
  const [query, setQuery] = useState('');

  const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => (
          part.toLowerCase() === highlight.toLowerCase()
            ? <b key={i} className="text-blue-600">{part}</b>
            : part
        ))}
      </span>
    );
  };

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search names..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-sm text-gray-600">Results: {filteredNames.length}</p>
      <ul className="space-y-2">
        {filteredNames.map((name, index) => (
          <li key={index} className="p-2 bg-gray-50 rounded-md">
            {getHighlightedText(name, query)}
          </li>
        ))}
      </ul>
      {filteredNames.length === 0 && <p className="text-gray-500 text-center">No matches found.</p>}
    </div>
  );
}

export default SearchList;
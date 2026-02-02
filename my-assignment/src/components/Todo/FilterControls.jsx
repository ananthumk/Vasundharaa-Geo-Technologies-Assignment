import React from 'react';

function FilterControls({ filter, setFilter }) {
  return (
    <div className="flex gap-2 justify-center">
      {['all', 'active', 'completed'].map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-md capitalize ${filter === f ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterControls;
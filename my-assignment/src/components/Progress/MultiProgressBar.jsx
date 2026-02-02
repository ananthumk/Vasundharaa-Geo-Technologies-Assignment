import React, { useState } from 'react';

function MultiProgressBar() {
  const [values, setValues] = useState([20, 40, 60, 80]);

  const updateValue = (index, value) => {
    const newValues = [...values];
    newValues[index] = Math.min(100, Math.max(0, value));
    setValues(newValues);
  };

  const average = values.reduce((a, b) => a + b, 0) / values.length;

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="space-y-2">
        {values.map((value, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              max="100"
              value={value}
              onChange={(e) => updateValue(index, parseInt(e.target.value) || 0)}
              className="w-16 p-1 border border-gray-300 rounded"
            />
            <div className="flex-1 bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full ${value < 40 ? 'bg-red-500' : 'bg-green-500'}`}
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="text-sm text-gray-700">Main Bar (Average: {average.toFixed(1)}%)</p>
        <div className="bg-gray-200 rounded-full h-6">
          <div
            className={`h-6 rounded-full ${average < 40 ? 'bg-red-500' : 'bg-green-500'}`}
            style={{ width: `${average}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MultiProgressBar;
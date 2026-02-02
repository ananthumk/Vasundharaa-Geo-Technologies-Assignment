import React from 'react';
import { Trash2, Edit } from 'lucide-react';

function TodoItem({ task, dispatch }) {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.text}
        </span>
        <select
          value={task.priority}
          onChange={(e) => dispatch({ type: 'SET_PRIORITY', payload: { id: task.id, priority: e.target.value } })}
          className={`text-xs px-2 py-1 rounded ${priorityColors[task.priority]}`}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
        onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
}

export default TodoItem;
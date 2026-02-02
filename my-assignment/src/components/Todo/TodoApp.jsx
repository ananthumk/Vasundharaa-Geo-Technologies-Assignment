import React, { useReducer, useEffect } from 'react';
import TodoItem from './TodoItem';
import FilterControls from './FilterControls';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CheckCircle, Plus } from 'lucide-react';

// Reducer for complex state management
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, completed: false, priority: 'medium' }];
    case 'TOGGLE_TASK':
      return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'SET_PRIORITY':
      return state.map(task => task.id === action.payload.id ? { ...task, priority: action.payload.priority } : task);
    default:
      return state;
  }
};

function TodoApp() {
  const [tasks, dispatch] = useReducer(todoReducer, []);
  const [filter, setFilter] = useLocalStorage('todo-filter', 'all');
  const [storedTasks, setStoredTasks] = useLocalStorage('todo-tasks', []);

  // Sync with LocalStorage
  useEffect(() => {
    if (storedTasks.length > 0) dispatch({ type: 'LOAD_TASKS', payload: storedTasks });
  }, []);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);

  const addTask = (text) => {
    if (text.trim()) dispatch({ type: 'ADD_TASK', payload: text });
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Add a new task..."
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => { if (e.key === 'Enter') { addTask(e.target.value); e.target.value = ''; } }}
        />
        <button
          onClick={(e) => { const input = e.target.previousSibling; addTask(input.value); input.value = ''; }}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <Plus size={16} /> Add
        </button>
      </div>
      <FilterControls filter={filter} setFilter={setFilter} />
      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <TodoItem key={task.id} task={task} dispatch={dispatch} />
        ))}
      </ul>
      {filteredTasks.length === 0 && <p className="text-gray-500 text-center">No tasks found.</p>}
    </div>
  );
}

export default TodoApp;
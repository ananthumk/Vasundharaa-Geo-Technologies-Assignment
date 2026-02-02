import React from 'react';
import TodoApp from './components/Todo/TodoApp';
import UserForm from './components/Forms/UserForm';
import MultiProgressBar from './components/Progress/MultiProgressBar';
import CountdownTimer from './components/Timer/CountdownTimer';
import SearchList from './components/Search/SearchList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Assignment</h1>
      <div className="space-y-12 max-w-7xl mx-auto">
        {/* Task 1: Enhanced Todo App */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Task 1: Enhanced Todo App</h2>
          <TodoApp />
        </section>

        <div className='grid grid-cols-2 gap-4'>

        {/* Task 2: Form Handling & Validation */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Task 2: Form Handling & Validation</h2>
          <UserForm />
        </section>

        {/* Task 3: Dynamic Multi-Input Progress Bar */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Task 3: Dynamic Multi-Input Progress Bar</h2>
          <MultiProgressBar />
        </section>
      
      </div>
      
        {/* Task 4: Advanced Countdown Timer */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Task 4: Advanced Countdown Timer</h2>
          <CountdownTimer />
        </section>

        {/* Task 5: Live Search with Highlighting */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Task 5: Live Search with Highlighting</h2>
          <SearchList />
        </section>
      </div>
    </div>
  );
}

export default App;
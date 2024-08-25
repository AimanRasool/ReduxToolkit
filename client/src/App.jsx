import React, { useState } from 'react';
import { TextField, ShowTodo } from './components';
// import './index.css';


function App() {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className='App min-h-screen bg-gray-900 text-white font-c'>
    <header className='p-4 text-2xl font-bold text-center'>
      <b>Todo List</b>
    </header>
    <h1 className='text-center text-3xl mb-8'>
      ADD <span className='text-blue-500'>DELETE</span> <span className='text-green-500'>UPDATE</span>
    </h1>
    <div className='notes_container bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center max-w-md mx-auto'>
      {showInput && <TextField />}
      <ShowTodo />
      <button
        onClick={() => setShowInput(!showInput)}
        className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out'
      >
        {showInput ? 'Done' : 'New List'}
      </button>
    </div>
  </div>
  
  );
}

export default App;
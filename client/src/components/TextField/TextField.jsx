import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/reducer';

function TextField() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const add = () => {
       if (text.trim() === '') {
      alert('Input must not be empty');
    } else {
        dispatch(addTodo({
          id: Math.floor(Math.random() * 100000), 
          item: text.trim(),
        })
      );
      setText(''); 
    }
  };

  return (
    <div className='d-flex flex items-center justify-center mx-auto my-4 textField space-x-4'>
    <input onChange={(e) => setText(e.target.value)} type='text' placeholder='Start writing Task' value={text}
    className='w-full px-4 py-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
    <i onClick={add} style={{ cursor: 'pointer' }} className='fa-solid fa-square-plus text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out'
    title='Add Task' aria-label='Add Task'></i>
</div>

  );
}

export default TextField;

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/reducer';

function Notes({ text, id }) {
  const dispatch = useDispatch();
  const inputRef = useRef(true);

  const deleteItem = () => {
    dispatch(deleteTodo(id));
  };

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = () => {
    dispatch(updateTodo({ id, text: inputRef.current.value }));
    inputRef.current.disabled = true;
  };

  return (
    <div className='notes p-4 bg-gray-800 text-white mb-3 rounded-lg'>
    <div className='flex items-center '>
    <textarea
      ref={inputRef}
      disabled={inputRef.current}
      defaultValue={text}
      onMouseOut={() => update()}
      className='w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>

    <div className='flex items-center space-x-4 ml-4'>
      <i onClick={() => changeFocus()} className='fas fa-edit text-blue-500 cursor-pointer hover:text-blue-700 transition duration-300 ease-in-out'></i>
      <i onClick={() => deleteItem()}  className='fas fa-trash-alt text-red-500 cursor-pointer hover:text-red-700 transition duration-300 ease-in-out'></i>
    </div>
  </div>
</div>

  );
}

export default Notes;

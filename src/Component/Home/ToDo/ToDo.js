import React from 'react';
import { BiSolidEditAlt } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';
import {baseURL} from '../utils/constant'


function ToDo({text , id , setUpdateUI , setShowpopup , setPopup}) {


const deleteTodo = () => {
  axios.delete(`${baseURL}/delete/${id}`).then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState)
  })
}


const updateTodo = () => {
  setPopup({text , id})
  setShowpopup(true)
}

  return (
    <>
    <div className='toDo'>
        {text}
        <div className='icons'>
            <BiSolidEditAlt className='icon'  onClick={updateTodo}/>
            <RxCross1 className='icon' onClick={deleteTodo} />

        </div>
        </div>
    </>
  )
}

export default ToDo
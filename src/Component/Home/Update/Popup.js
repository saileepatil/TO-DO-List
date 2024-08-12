import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';
import {baseURL} from '../utils/constant'
import ToDo from '../ToDo/ToDo';



function Popup({setShowpopup , popup  , setUpdateUI}) {

    const [input , setInput] = useState(popup.text)

    const updateTodo = () => {
      axios.put(`${baseURL}/update/${popup.id}` , {toDo: input}).then((res) => {
           console.log(res.data);
           setUpdateUI((prevState) => !prevState)
           setShowpopup(false)
      })
    }
  return (
    <>
    <div className='backdrop'>
<div className='popup'>
  <RxCross1 className='cross' onClick={() => {setShowpopup(false)}}/>
  <h1>Update ToDo</h1>
 
  <div className=' popup_input_holder'>
  <input value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Update a ToDo...'/>

<button onClick={updateTodo}>Update</button>
  </div>
</div>
    </div>
    </>
  )
}

export default Popup;
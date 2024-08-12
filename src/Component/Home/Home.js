import React, { useEffect, useState } from 'react';
import './Home.css';
import ToDo from './ToDo/ToDo';
import axios from 'axios';
import {baseURL} from './utils/constant';
import Popup from './Update/Popup'

function Home() {

  const [toDos , setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI , setUpdateUI] = useState(false);
  const [showPopup , setShowpopup] = useState(false);
  const [popup , setPopup] = useState({})

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      setToDos(res.data);
    }).catch((error) => {
         console.log(error);
    })
  } , [updateUI])

  const saveToDo = () => {
    axios.post(`${baseURL}/save` ,{toDo: input} ).then(res => {
      console.log(res.data);
      setUpdateUI((prevState) =>  !prevState)
      setInput("")
    })
    .catch((error) => {
      console.log(error);
 })
  }
  return (
    <>
    <div class='container-app'>
   <h1 class='title'> ToDo App 2024</h1>
      
      <div className='input_holder'>
  <input value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Add a ToDo...'/>

            <button onClick={saveToDo}>Add Task</button>
      </div>

      <div className='list'>
       {toDos.map(el => <ToDo key={el._id} text={el.toDo} id={el._id} setUpdateUI={setUpdateUI} setShowpopup={setShowpopup} setPopup={setPopup}/> )}

      </div>

    </div>
    {showPopup && <Popup  setShowpopup = {setShowpopup} popup= {popup}  setUpdateUI={setUpdateUI}/>}

    </>
  )
}

export default Home
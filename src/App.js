import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home'
import './App.css';

function App() {
  return (
<>
<BrowserRouter>
<Routes>

  <Route path='/' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>


</Routes>
</BrowserRouter>
</>
  )
}

export default App
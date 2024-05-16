import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alerts from './components/Alerts';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [state,setState] = useState("light");
  const[alert,setAlert] = useState(null);
  let defineAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggle = () => {
    if(state==="light"){
      document.body.style.backgroundColor = "#0e0b36";
      document.body.style.color = "white";
      setState("dark");
      defineAlert("Dark theme has been enabled successfully","success")
    }
    if(state==="dark"){
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setState("light");
      defineAlert("Light theme has been enabled successfully","success")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextConverter" abt = "About" state={state} toggle = {toggle}/>
    <div className="my-3 container">
    <Alerts alert={alert} />
    </div>
    
      <Routes>
        <Route path='/' element={<TextArea head="Enter Your Text Below " state={state}/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
      
    </BrowserRouter>
    </>
  );

}

export default App;

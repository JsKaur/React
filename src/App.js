
import { useState } from 'react';
import './App.css'; // style sheet
import About from './components/About.js';
import './components/Navbar.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';


function App() {
  
  const [mode, setMode]=useState('light');

  const toggleMode = () =>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    // using the component here. not the whole code to be written here.
    // <Navbar title="Textutils" About="About Us" />   using props.

    <>
    <Navbar title="TextUtils" About="About Us" modes={mode} toggleMode={toggleMode} />

    {/* className='container' makes the text area center. */}
    
    <About />
   
    
   </>
  );
}

export default App;

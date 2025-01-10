
import { useState } from 'react';
import './App.css'; // style sheet
import About from './components/About.js';
import './components/Navbar.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';


function App() {
  
  const [mode, setMode]=useState('light');

  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert(
        {msg:message,
        type:type
        }

      )
      setTimeout(()=>{
        setAlert(null);
      },3000)
  }

  const toggleMode = () =>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
    }
  }
  return (
    // using the component here. not the whole code to be written here.
    // <Navbar title="Textutils" About="About Us" />   using props.

    <>
    <Navbar title="TextUtils" About="About Us" modes={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    {/* className='container' makes the text area center. */}
    
    
    <About />

    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
    </div>
   
    
   </>
  );
}

export default App;

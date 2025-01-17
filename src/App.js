
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }

  

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
}

  return (
    <>
    {/* <Router> */}
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert= {alert} />
    <div className="container my-3">
          {/* <Routes> */}
            {/* good practice to use exact path because react can sometimes use partical matches as well. */}
            {/* <Route exact path="/about" element={<About/>} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Routes> */}
        </div>
    {/* </Router>
     */}
    </> 
    
  );
}

export default App;
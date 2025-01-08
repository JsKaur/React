
import './App.css'; // style sheet
import About from './components/About.js';
import './components/Navbar.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';


function App() {
  
  return (
    // using the component here. not the whole code to be written here.
    // <Navbar title="Textutils" About="About Us" />   using props.

    <>
    <Navbar title="TextUtils" About="About Us" />

    {/* className='container' makes the text area center. */}
    
    <About />
   
    
   </>
  );
}

export default App;

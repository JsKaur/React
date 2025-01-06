
import './App.css'; // style sheet
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
    <div div className='container'>
    <TextForm heading="Enter the text to analyze" />
    </div>
   </>
  );
}

export default App;

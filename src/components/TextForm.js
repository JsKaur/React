// write rfc to import React and enter->

import React, {useState} from 'react'

// useState is the hook. It helps to use properties of class without creating it.

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase clicked"+text);
        let upper =text.toUpperCase();
        setText(upper);
    }

    const handleLowerClick=()=>{
      let lower=text.toLowerCase();
      setText(lower);
    }

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);// earliar, I was not able to enter text in textarea, but now, it will add the input with the value="text" of textarea.
    }

    const [text, setText] = useState('');
    // array destructuring syntax.
    // text is a variable which can be updated from ' ' to something else using setText function.
    // text= "new text" is wrong way to update it. 
    // correct way is:
    //setText("New text..");
  return (
    <>


    <div className="container">
      <h2>{props.heading}</h2>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert To Lowercase</button>
    </div>


    <div className="container">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008* text.split("").length} minute read</p>
      <h2>Preview of text...</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

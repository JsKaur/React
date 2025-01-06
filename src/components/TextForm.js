// write rfc to import React and enter->

import React, {useState} from 'react'

// useState is the hook. It helps to use properties of class without creating it.

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase clicked"+text);
        let newText =text.toUpperCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);// earliar, I was not able to enter text in textarea, but now, it will add the input with the value="text" of textarea.
    }

    const [text, setText] = useState('Enter text here');
    // array destructuring syntax.
    // text is a variable which can be updated from 'Enter text here' to something else using setText function.
    // text= "new text" is wrong way to update it. 
    // correct way is:
    //setText("New text..");
  return (
    <div>
      <h2>{props.heading}</h2>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
    </div>
  )
}

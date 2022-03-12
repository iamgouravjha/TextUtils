import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLpClick = () => {
    // console.log("Uppercase was clicked");
    let newltext = text.toLowerCase();
    setText(newltext);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    let newltext = "";
    setText(newltext);
    props.showAlert("Text Cleared!", "success");
  };

  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;
    const digits = text.match(regex);
    const res = digits.join(" ");
    setText(res);
    props.showAlert("Extracted the numbers!", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed!", "success");
    
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
    
  };

  const [text, setText] = useState('');
  return (
    <div
      className="container"
      style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
    >
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color:props.mode === 'dark'?'white': '#042743'}}
          id="mybox"
          rows={8}
        />
        {/* < textarea className="form-control"
         value={text}
          onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
           id="myBox" 
           rows="8"
           /> */}
      </div>

      <button className="btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn-primary mx-2 " onClick={handleLpClick}>
        Convert to Lowercase
      </button>
      <button className="btn-primary mx-2 " onClick={handleClearClick}>
        Clear
      </button>
      <button className="btn-primary mx-2 " onClick={handleNumExtract}>
        ExtractNumbers
      </button>
      <button className="btn-primary mx-2 " onClick={handleCopy}>
        Copy
      </button>
      <button className="btn-primary mx-2 " onClick={handleExtraSpace}>
        Remove Extra Spaces
      </button>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length}characters
        </p>
        <p>It will take {0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
      </div>
    </div>
  );
}

export default TextForm;

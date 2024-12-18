import React, { useState } from "react";

export default function TextForm(props) {
  const handler = () => {
    console.log("event handler");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const eventhandler = (event) => {
    console.log("oncliick was clicked");
    setText(event.target.value);
  };
  const lhandler = () => {
    console.log("event handler");
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container mb-3">
        {/* <h2>enter the tectx to analyze</h2> */}
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
        <h1 >Enter text to analyze</h1>
        </label>
        <div className=" mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            rows="9"
            
            onChange={eventhandler}
          ></textarea>
        </div>

        <button className="btn btn-primary  " onClick={handler}>
          Convert to UpperCase
        </button>
        <button className="btn btn-success mx-3" onClick={lhandler}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container mb-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

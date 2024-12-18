import React, { useState } from "react";

export default function TextForm(props) {
  const upperhandler = () => {
    console.log("event handler");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const eventhandler = (event) => {
    console.log("oncliick was clicked");
    setText(event.target.value);
  };
  const lowerhandler = () => {
    console.log("event handler");
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const emptyhandler=()=>{
    let paragraph = text.trim().replace(/\s+/g, ' ');
    setText(paragraph);

  }
  const Capitalhandler=()=>{
    let paragraph =  text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()); ;
    setText(paragraph);

  }
  const titlehandler = () => {
    const minorWords = ["and", "of", "the", "in", "on", "at", "by", "for", "with", "a", "an", "to"];
    
    let paragraph = text
        .toLowerCase() // Convert all text to lowercase
        .split(" ") // Split the text into words
        .map((word, index, words) => {
            // Always capitalize the first and last words or words not in minorWords
            if (
                index === 0 || 
                index === words.length - 1 || 
                !minorWords.includes(word)
            ) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word; // Keep minor words lowercase
        })
        .join(" "); // Join the words back into a single string
    
    setText(paragraph); // Update the state with the formatted text
};
const copyhandler = () => {
  if (text.trim()) {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy text.");
      });
  } else {
    alert("No text to copy.");
  }
};
const clearhandler = () => {
  setText(""); // Clear the text by setting it to an empty string
};
const wordFrequencyHandler = () => {
  let words = text.toLowerCase().split(/\s+/).filter((word) => word !== "");
  let frequency = {};

  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  let result = Object.entries(frequency)
    .map(([word, count]) => `${word}: ${count}`)
    .join("\n");

  alert(`Word Frequencies:\n${result}`);
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
            rows="12"
            
            onChange={eventhandler}
           
          >
           
          </textarea>
        </div>

        <button className="btn btn-secondary mx-1  " onClick={upperhandler}>
          Convert to UpperCase
        </button>
        <button className="btn btn-secondary mx-2" onClick={lowerhandler}>
          Convert to LowerCase
        </button>
        <button className="btn btn-secondary mx-2" onClick={emptyhandler}>
          Remove Space
        </button>
        <button className="btn btn-secondary mx-2" onClick={Capitalhandler}>
          Capitalize Case
        </button>
        <button className="btn btn-secondary mx-2" onClick={titlehandler}>
          Title Case
        </button>
        <button className="btn btn-secondary mx-2" onClick={copyhandler}>
          Copy to Clipboard
        </button>
        
        <button className="btn btn-secondary mx-2" onClick={wordFrequencyHandler}>
  Word Frequency Count
</button>
<button className="btn btn-dark mx-4" onClick={clearhandler}>
          Clear 
        </button>


      </div>
      < div className="container mb-3">
        <h1>Your text summary</h1>
        
        <p >
          Character Count: {text.length}  | Word Count: {text.split(/\s+/).filter((word) => word).length} | Sentence Count: {text.split(/[.!?]+/).filter((sentence) => sentence.trim()).length} | Line Count: {text.split(/\n/).length}
        </p>
        
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

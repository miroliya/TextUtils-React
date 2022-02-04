import React, { useState } from 'react'

export default function TextForm(props) {

    // Convert to Uppercase
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to uppercase!", "success");
    }

    // Convert to Lowercase
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to lowercase!", "success");
    }

    // Remove New line
    const handleNewLineRmClick = () => {
        let someText = text.replace(/(\n|\r)/gm, "");
        let newText = someText;
        setText(newText)
        props.showAlert("Removed new line text!", "success");
    }

    // Remove Numbers
    const handleNumRmClick = () => {
        let num = text.replace(/[0-9]/g, "");
        let newText = num;
        setText(newText)
        props.showAlert("Removed Numbered!", "success");
    }

    // Remove Extra Spaces
    const handleRmSpcaesClick = () => {
        let space = text.replace(/\s\s/g, "");
        let newText = space;
        setText(newText)
        props.showAlert("Extra spaces removed!", "success");
    }

    // Clear Text
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    // Copy to Clipboard
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }


    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" type="text" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'#042743'}} id="myBox" placeholder="Type some text here" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleNewLineRmClick}>Remove New Line </button>
                <button className="btn btn-primary mx-1" onClick={handleNumRmClick}>Remove Numbers </button>
                <button className="btn btn-primary mx-1" onClick={handleRmSpcaesClick}>Remove Extra Spaces </button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy to Clipboard </button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text </button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'? 'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p> <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
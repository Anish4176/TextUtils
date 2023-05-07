import React, { useState } from 'react'
// import Alert from './Alert';

export default function TextForm(props) {

    const handleUpperText = () => {
        // console.log('button was clicked')
        const change = text.toUpperCase();
        settext(change);
    }
    const handleLowerText = () => {
        // console.log('button was clicked')
        const change = text.toLowerCase();
        settext(change);
    }
    const handleClearText = () => {
        // console.log('button was clicked')
        const change = "";
        // <Alert alert='Copied Succeessfully' />
        settext(change);
    }
    const handleCopyText = () => {
        // console.log('button was clicked')
        let tocopytext = document.getElementsByTagName('textarea')[0];
        let b = tocopytext.value;
        console.log(b)
        navigator.clipboard.writeText(b).then(() => {
            props.showAlert('Copied Successfully', 'success')
        }).catch(err => {
            props.showAlert('Something went wrong', 'danger')
        })
    }
    const handleTextToSpeech = () => {
        // Check if Web Speech API is supported
        if ('speechSynthesis' in window) {
            const message = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(message);
        } else {
            alert('Sorry, your browser does not support text-to-speech!');
        }
    }

    const handleonchange = (event) => {
        console.log('on change')
        settext(event.target.value);

    }
    const [text, settext] = useState("")   //state
    // text="new text" //this is the wrong way to change the state
    //settext("new text") //this is the correct way to change the state
    return (
        <>

            <div className="container my-5">
                <h1 >{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" spellCheck={true} value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperText}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerText}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTextToSpeech}>Speak</button>
            </div>
            <div className="container my-4">
                <h2> Your Text analysis:-</h2>
                <p>Number of Words: {text.trim() ? text.trim().split(" ").length : 0} <br />Number of Letters:  {text.length}<br />Time to read: {0.32 * text.trim().split(" ").filter((element)=>{return element.length!==0}).length} Seconds</p>

            </div>
            <div className="container my-3">
                <h2>Preview:-</h2>
                <p>{text === "" ? "Nothing to preview!" : text} </p>
            </div>

        </>
    )
}

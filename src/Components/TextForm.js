import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success")
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success")
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }

    const Copytext = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success")
    }

    const handleRemoveExtraSpaces = () =>{
        let newText = text.split(/\s+/).join(" ");
        setText(newText)
        props.showAlert("Extra Spaces Removed", "success")
    }

    const TextSummary = () => {
        let words = text.trim().split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        const charCount = text.length;
        return `Total Words: ${wordCount} \nTotal Characters: ${charCount}`;
    }    

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    // text = "New Text" <---- Wrong way to update default text
    // setText("New Text"); <---- Correct way to update default text
    return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
                color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={Copytext}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Text Summary</h2>
            <p>{TextSummary()}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to preview it here:"}</p>
        </div>
    </>
  )
}
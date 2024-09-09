import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
    }

    const Copytext = () =>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
    }

    const handleRemoveExtraSpaces = () =>{
        let newText = text.split(/\s+/).join(" ");
        setText(newText)
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

    return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
                color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={Copytext}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Text Summary</h2>
            <p>{TextSummary()}</p>
            <h2>Preview</h2>
            
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  )
}
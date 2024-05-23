import React, { useState } from 'react';



export default function TypeForm(props) {


    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        textcount(newtext)
        props.showAlert("your letter converted to Uppercase!", "Success")

    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        textcount(newtext)
        props.showAlert("your letter converted to Lowercase!", "Success")
    }
    const handleClClick = () => {
        let newtext = "";
        textcount(newtext)
        props.showAlert("Cleared!", "Success")

    }
    const handleCoClick = () => {
        var text =  document.getElementById("mybox");
       text.select();
       text.setSelectionRange(0, 9999);
       navigator.clipboard.writeText(text.value);
        props.showAlert("Your Clipboard was Copied  !", "Success")

    }
 
    const handleOnChange = (event) => {
        textcount(event.target.value)
    }



    const [text, textcount] = useState("ENTER YOUR TEXT HERE")

    return (
        <div className="container my-4 " style={{color: props.mode ==='dark'? 'white':'#042743'}}>
            <h1><i>HRX Word Counter</i></h1>
            <div className="my-3">
          
                    
                <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'whtite ', color: props.mode ==='dark'? 'white':'black' }} id="mybox" rows="8" >
                </textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleUpClick}>convert to uppercase</button>
            <button  disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleLoClick}>convert to lowercase</button>
            
            <button  disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClClick}>Clear</button>
            <button  disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCoClick}>Copy</button>

          


            <div className="container my-2"></div>
            <h2><i>Your Text Summary</i></h2>
            <div className="container my-2"></div>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words </p>
            <p>  {text.length} Characters and {0.008 * text.split("").length} Minutes to read</p>
            <p> {text.split(".").filter((element)=>{return element.length!==0}).length} Sentences</p>
            
            <h3><i>Preview</i></h3>
            <div className="conatiner"></div>
            <p>{text.length>0?text: "Nothing to Preview!"}</p>
        </div>
    )
}

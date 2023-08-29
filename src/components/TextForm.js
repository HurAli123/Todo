import React, { useState } from "react";


export default function TextForm(props) {

	const[text,setText] = useState("")

	const [symbolCount, setSymbolCount] = useState(0);
	
	const newSymbolCount =(text.match(/\./g) || []).length+(text.match(/\?/g) || []).length+(text.match(/!/g) || []).length
	
	const handleOnChange = (event) => {
		setText(event.target.value)
		setSymbolCount(newSymbolCount);
	}  

 
	const handleUpClick = (event) => {
		if(event.target.id 	=== "uppercase")
		{
			let newText = text.toUpperCase();
			setText(newText)	
	  }
		else{
			let newText = text.toLowerCase();
			setText(newText)
		}
	}  


  const firstCapital = (event) => {
		let arr1 = text.split(/[ ]+/)
		let arr2 = arr1.map((element)=>{
			return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
		})
		setText(arr2.join(" "))
	}  

	const Renamecopy = () => {
		setcopy(<>Copy</>)
	}

	const handleClearClick = (event) => {
		setText('')
	}  

	const handleSpaces = (event) => {
		let newText= text.split(/[ ]+/)
		setText(newText.join(" "))
	}  

	const handleReplace = (event) => {
		let existing_text = prompt("Enter which word to replace : ");
    let replaced_text = prompt("Enter the word to add in the place of previous word : ");
    setText(text.replaceAll(existing_text, replaced_text))
	}  

	const[copy,setcopy]=useState("Copy")
	const handleCopy = (event) => {
		let text = document.getElementById('myBox')
		navigator.clipboard.writeText(text.value)
		setcopy(<>Copied &#10003;</>)
	} 

  

	const speak = () => {
		let msg = new SpeechSynthesisUtterance(text);
		window.speechSynthesis.speak(msg);
	}
	
	

  //..............................................................................................
  return (
		<>
    <div className="container my-5">
			
      <h5 className="my-3 p-1">{props.heading}</h5>

      <div className="mb-3">
        <textarea className={`form-control bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} id="myBox" rows="8" value={text} onClick={Renamecopy} onChange={handleOnChange} placeholder="Enter your text here......."></textarea>
      </div>
			
      	<button className="btn btn-primary m-2" id="uppercase" onClick={handleUpClick}>Uppercase</button>
      	<button className="btn btn-primary m-2" id="lowercase" onClick={handleUpClick}>Lowercase</button>
      	<button className="btn btn-primary m-2" id="replace" onClick={handleReplace}>Replace</button>
      	<button className="btn btn-primary m-2" id="copy" onClick={handleCopy}>{copy}</button>
      	<button className="btn btn-primary m-2" id="space" onClick={handleSpaces}>Remove Extra Spaces</button>
      	<button className="btn btn-primary m-2" id="fcapital" onClick={firstCapital}>Capitilize First Letters</button>

		<div className="container p-0">
      		<button className="btn btn-danger m-2" id="clear" onClick={handleClearClick}>Clear</button>
			<button className="btn btn-warning m-2 text-light " id="speak" onClick={speak}>Speak</button>
		</div>

    </div>

		<div className="container">

			<h3 className="m-10">Text Summary</h3>

			<p className="m-3 "> 
				<b>{">"}</b> {text.split(/[ ]+/).length-1} words.
				<br></br> 
				<b>{">"}</b> {text.replace(/\s/g, '').length} characters.
				<br></br>
				<b>{">"}</b> {newSymbolCount} sentences.
			</p> 

		</div>
		</>
  );
  //..............................................................................................
}


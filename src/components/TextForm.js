import React, { useState } from "react";

export default function TextForm(props) {

	//Constants.....................................................................................................................

	const[text,setText] = useState("") //value of text area
	const[symbolCount, setSymbolCount] = useState(0); //number of symbols('.' , '?' , '!') in text area
	const[copy,setcopy]=useState("Copy") //value of text in Copy button
	const[paste,setpaste]=useState("Paste") //value of text in passte button
	const newSymbolCount =(text.match(/\./g) || []).length+(text.match(/\?/g) || []).length+(text.match(/!/g) || []).length //count number of symbols ('.' , '?' , '!') in text area


	//Functions......................................................................................................................

	//update value of {text} and {symbolcount} when new text is entered.
	const handleOnChange = (event) => {
		setText(event.target.value)
		setSymbolCount(newSymbolCount);
	}  

	//change text to Upper or lower case when respective buttons are clicked
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

	//change firt letter of every word to capital when Capitalize First Letter button is clicked
    const firstCapital = (event) => {
		let arr1 = text.split(/[ ]+/)
		let arr2 = arr1.map((element)=>{
			return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
		})
		setText(arr2.join(" "))
	}  

	//rename copied button to copy when text area is clicked
	const Renamecopy = () => {
		setcopy(<>Copy</>)
		setpaste(<>Paste</>)
	}
	
	//clear the text area when Clear button is clicked
	const handleClearClick = (event) => {
		setText('')
	}  

	//remove extra spaces from text when Remove Extra Spaces button is clicked
	const handleSpaces = (event) => {
		let newText= text.split(/[ ]+/)
		setText(newText.join(" "))
	}  

	//Replace the text when Replace button is clicked
	const handleReplace = (event) => {
		let existing_text = prompt("Enter which word to replace : ");
    	let replaced_text = prompt("Enter the word to add in the place of previous word : ");
    setText(text.replaceAll(existing_text, replaced_text))
	}  

	//copy the value of text in clipboard and change text of copy button to Copied
	const handleCopy = (event) => {
		let text = document.getElementById('myBox')
		navigator.clipboard.writeText(text.value)
		setcopy(<>Copied &#10003;</>)
	} 

	//paste value of text in clipboard to textarea
	const handlepaste = () => {		
		setpaste(<>Pasted &#10003;</>)
	}

	//read out the text written in text area when Speak button is clicked
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
        		<textarea className={`form-control p-3 bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} id="myBox" rows="7" value={text} onClick={Renamecopy} onChange={handleOnChange} placeholder="Enter your text here......."></textarea>
        	</div>
			
			<div className="container p-0 d-flex flex-wrap`arr1">
      			<button className="btn btn-primary m-2" id="uppercase" onClick={handleUpClick}>Uppercase</button>
      			<button className="btn btn-primary m-2" id="lowercase" onClick={handleUpClick}>Lowercase</button>
      			<button className="btn btn-primary m-2" id="replace" onClick={handleReplace}>Replace</button>
      			<button className="btn btn-primary m-2" id="copy" onClick={handleCopy}>{copy}</button>
      			<button className="btn btn-primary m-2" id="paste" onClick={handlepaste}>{paste}</button>
      			<button className="btn btn-primary m-2" id="space" onClick={handleSpaces}>Remove Extra Spaces</button>
      			<button className="btn btn-primary m-2" id="fcapital" onClick={firstCapital}>Capitilize First Letters</button>
			  </div>
			<div className="container p-0">
      			<button className="btn btn-danger m-2" id="clear" onClick={handleClearClick}>Clear</button>
				<button className="btn btn-warning m-2" id="speak" onClick={speak}>Speak</button>
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


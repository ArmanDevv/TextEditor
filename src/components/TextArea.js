import React, {useState} from 'react'

const TextArea = (props) => {

  const handleClickUpper = () => {
    let a = text.toUpperCase();
    setText(a);
  }

  const handleClickLower = () => {
    let a = text.toLowerCase();
    setText(a);
  }
  
  const handleClickTitleCase = () => {
    let arr = text.split(" ");
    let strarr = arr.map((word)=>{
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    let str = strarr.join(' ');
    setText(str);
    
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const[text,setText] = useState("");
  return (
    <>
    <div className="container">
    <h1 className="my-3">{props.head}</h1>
    <div className="mb-3 my-5 ">
      <textarea className="form-control" style={{backgroundColor:props.state==='light'?'white':'black', color:props.state==='light'?'black':'white', border: '2px solid black'}}  value = {text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleClickUpper} >Upper Case</button>
    <button className="btn btn-primary mx-2" onClick={handleClickLower} >Lower Case</button>
    <button className="btn btn-primary mx-2" onClick={handleClickTitleCase} >Title Case</button>
    </div>
    <div className="container my-4">
      <strong>Your Text Summary</strong> {text.split(" ").length} Words and {text.length} Characters
    </div>
    </>
  )
}

export default TextArea

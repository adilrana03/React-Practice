import {React,useState} from 'react'

const Todo = () => {
const [state, setState]= useState("Write Some Thing")

const handleClick = (event)=>{
        console.log("clicked");
        var inputValue = document.getElementById('input').value;
        console.log(inputValue);
        setState(inputValue)
}


  return (
    <div style={{textAlign: "center", marginTop:"50px"}}>
        <h2>Todo App</h2>
        <input type="text" id='input' placeholder='Enter some text'/>
        <button onClick={handleClick}> Submit </button>
        <p>{state}</p>
    </div>
  )
}

export default Todo
// import {React,useState} from 'react'

// const Todo = () => {
// const [state, setState]= useState("Write Some Thing")

// const handleClick = (event)=>{
//         console.log("clicked");
//         var inputValue = document.getElementById('input').value;
//         console.log(inputValue);
//         setState(inputValue)
// }


//   return (
//     <div style={{textAlign: "center", marginTop:"50px"}}>
//         <h2>Todo App</h2>
//         <input type="text" id='input' placeholder='Enter some text'/>
//         <button onClick={handleClick}> Submit </button>
//         <p>{state}</p>
//     </div>
//   )
// }

// export default Todo

























import { React, useState } from 'react'

const Todo = () => {


  const [state, setState] = useState("")
  const [list, setList] = useState([]);


  const handleClick = () => {
    setList([...list, state]);
  }


// Delete function added to delete the task
  const deleteFun=(e,id)=>{
    console.log("delete btn working");
    console.log(id);
    const updatedData = list.filter((e,i)=>{
      return i !== id;
    })
    setList(updatedData);
  }


  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>MyTodo</h1>
      <div>
        <input type="text" id='input' placeholder='Type Something here' onChange={(e) => {
          setState(e.target.value);
        }} />
        <button onClick={handleClick}>Done</button>
        {list.map((e,i) => {
          return (
            <div key={i+1}>
              <h1 >
                {e}
                <button onClick={ ()=>{deleteFun(e,i)}}>Delete</button>
                
              </h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todo
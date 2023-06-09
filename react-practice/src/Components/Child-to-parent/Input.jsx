// import {useState} from 'react';

// const Input = ({SetState}) => {

//         const [input, setInput]= useState("");

//         const sendDataToParent = ()=>{
//                 SetState(input)
//         }
       
//   return (
//     <div style={{textAlign: "center", margin:"20px auto", padding:"30px", boxShadow:"0 0 10px black"}}>
//         <h2>Input Component</h2>
//         <input type="text" placeholder='Enter some text' onChange={(e)=>{setInput(e.target.value)}}/>
//         <button onClick={sendDataToParent}>Submit</button>
//     </div>
//   )
// }

// export default Input













import React,{useState} from 'react'

const Input = ({data}) => {
        const [input, setInput]= useState("")


       const sendData =()=>{
                data(input);
        }


  return (
    <div>
        <h1>
                Input Component
        </h1>
        <input type="text" placeholder='Enter Something' onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={sendData}>Send Data to parent</button>
    </div>
  )
}

export default Input
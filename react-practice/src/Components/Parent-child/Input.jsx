// // import { useState } from 'react';
// // import Text from './Text';

// // const Input = () => {

// //   const [state, setState] = useState("No Data");
// //   const [inputValue, setInputValue] = useState("")


// //   const handleSubmit = () => {
// //     setState(inputValue);
// //   }

// //   return (
// //     <div style={{ textAlign: "center", margin: "30px auto", padding: "30px", boxShadow: "0 0 10px black", width: "500px" }}>
// //       <h2>Input Component</h2>
// //       <input type="text" placeholder='Enter some text' onChange={(e) => { setInputValue(e.target.value) }} />
// //       <button onClick={handleSubmit}>Submit</button>
// //       <Text data={state} />
// //     </div>
// //   )
// // }

// // export default Input



// import React from 'react'
// import Text from "./Text";
// import { useState } from 'react'

// const Input = () => {


//   const [state, setState] = useState("No Data");
//   const [input, setInput] = useState("");

//   const handleSubmit = () => {
//     setState(input);
//   }

//   return (
//     <div>
//       <h2> Input Element</h2>
//       <Input type="text" placeholder="Enter Input Text" onChange={(e) => { setInput(e.target.value) }}
//       />
//       <button onClick={handleSubmit}>Submit</button>

//       <Text data={state} />
//     </div>
//   )
// }

// export default Input





import React,{useState} from 'react';
import Text from './Text';

const Input = () => {
const [state, setState]= useState("...")
const[data, setData]=useState([]);



const sendData =()=>{
  console.log("btn working");
  setData([...data, state]);
}
  
  return (
    <div style={{textAlign:"center"}}>
      <h1>Input Element</h1>
      <input type="text" placeholder='Enter Some Text' onChange={(e)=>{setState(e.target.value)}}/>
      <button onClick={sendData}>Send Data</button>
      <Text data= {data} />
    </div>
  )
}

export default Input
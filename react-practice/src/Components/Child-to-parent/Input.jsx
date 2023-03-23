import {useState} from 'react';

const Input = ({SetState}) => {

        const [input, setInput]= useState("");

        const sendDataToParent = ()=>{
                console.log("btn clicked");
                SetState(input)
        }
       
  return (
    <div style={{textAlign: "center", margin:"20px auto", padding:"30px", boxShadow:"0 0 10px black"}}>
        <h2>Input Component</h2>
        <input type="text" placeholder='Enter some text' onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={sendDataToParent}>Submit</button>
    </div>
  )
}

export default Input
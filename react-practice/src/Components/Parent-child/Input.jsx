import {useState} from 'react';
import Text from './Text';

const Input = () => {

        const [state, setState]= useState("No Data");
        const [inputValue, setInputValue]=useState("")


        const handleSubmit=()=>{
                setState(inputValue);
        }

  return (
    <div style={{textAlign: "center", margin:"30px auto", padding:"30px", boxShadow:"0 0 10px black", width:"500px"}}>
        <h2>Input Component</h2>
        <input type="text" placeholder='Enter some text' onChange={(e)=>{ setInputValue(e.target.value) }} />
        <button onClick={handleSubmit}>Submit</button>
        <Text data = {state}/>
    </div>
  )
}

export default Input
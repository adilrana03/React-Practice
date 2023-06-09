// import {useState} from 'react';
// import Input from './Input';

// const Text = () => {

//         const [state, setState]= useState("No Data")

//   return (
//     <div style={{padding:"30px", boxShadow:"0 0 10px teal", margin:"30px auto", width:"500px"}}>
//         <h2>Text Component</h2>
//         <p>{state}</p>
//         <Input SetState={setState}/>
//     </div>
//   )
// }

// export default Text







import React,{useState} from 'react';
import Input from './Input';

const Text = () => {
  const [state,setState]= useState("...");

  return (
    <div>
      <h1>
        Text Component
      </h1>
      <p>{state}</p>
      <Input data={setState} />
    </div>
  )
}

export default Text
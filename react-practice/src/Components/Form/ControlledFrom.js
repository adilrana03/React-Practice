// import { useState } from "react";

// function ControlledForm(props) {
//   const [formdata, setFormData] = useState({
//     name: "",
//     password: "",
//     email: "",
//   });

//   var formStyle = {
//     width: "300px",
//     padding: "20px",
//     margin: "50px auto",
//     boxShadow: "0 0 10px black",
//     textAlign: "center",
//   };

//   const submitData = () => {
//     console.log(formdata);
//   };
//   return (
//     <div style={formStyle}>
//       <h2>Controlled Component</h2>
//       <form>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             onChange={(event) => {
//               setFormData({
//                 ...formdata,
//                 name: event.target.value,
//               });
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             onChange={(event) => {
//               setFormData({
//                 ...formdata,
//                 password: event.target.value,
//               });
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Email"
//             onChange={(event) => {
//               setFormData({
//                 ...formdata,
//                 email: event.target.value,
//               });
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <input type="button" value="Register" onClick={submitData} />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ControlledForm;

import React,{useState} from 'react'

const ControlledFrom = () => {

  const [state,setState]=useState({
    name:"",
    email:"",
    pass:""
  })


  var formStyle = {
        width: "300px",
        padding: "20px",
        margin: "50px auto",
        boxShadow: "0 0 10px black",
        textAlign: "center",
      };




      const sendData=(e)=>{
        e.preventDefault();
        console.log(state);
      }

  return (
    <>
    <div style={formStyle}>
    <div><h2>ControlledFrom</h2> </div>
      <form action="">
        <div>
          <input type="text" placeholder='Enter Your Name' onChange={(e)=>{setState({...state,name: e.target.value})}}/>
        </div>
        <div>
          <input type="text" placeholder='Enter Your Password' onChange={(e)=>{setState({...state,pass: e.target.value})}}/>
        </div>
        <div>
          <input type="text" placeholder='Enter Your Email' onChange={(e)=>{setState({...state,email: e.target.value})}}/>
        </div>
        <button onClick={sendData}>Send Data</button>

      </form>
    </div>
    </>
  )
}

export default ControlledFrom

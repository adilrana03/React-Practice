import React, { useState } from 'react'

const Client = ({ SetState, data }) => {

  const [clientInput, setClientInput] = useState("...");

  const sendData = () => {
    SetState(clientInput);
  }

  return (
    <div style={{ marginLeft: "50px", border: "2px green", borderRadius: "10px", backgroundColor:"grey",padding:"100px" }}>
      <div style={{border:"2px black", borderRadius:"10px", marginBottom:"200px"}}>
        <h4 >Client Component</h4>
      <h2>Server: <span>{data}</span> </h2>
      </div>
      <div>
        <input  type="text" placeholder='type' onChange={(e) => { setClientInput(e.target.value) }} style={{borderRadius:"5%", padding:"10px", fontSize:"15px"}} />
        <button onClick={sendData}  style={{fontSize:"15px", borderRadius:"5%",background:"green", padding:"10px"}}>Send</button>
      </div>
    


    </div>

  )
}

export default Client
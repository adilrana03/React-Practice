import React, { useState } from 'react'

const Server = ({ data, SetState }) => {

        const [serverInput, setServerInput] = useState("...")


        const sendData = () => {
                SetState(serverInput);

        }


        return (
                <div style={{ marginLeft: "50px", border: "2px green", borderRadius: "10px", backgroundColor: "grey", padding: "100px" }}>


                        <div style={{ border: "2px black", marginBottom: "200px" }}>
                                <h4>Server Component</h4>
                                <h2>Client: <span> {data}</span></h2>
                        </div>

                        <div>
                                <input type="text" placeholder='type' onChange={(e) => { setServerInput(e.target.value) }} style={{ borderRadius: "5%", padding: "10px", fontSize: "15px" }} />
                                <button onClick={sendData} style={{ fontSize: "15px", borderRadius: "5%", background: "green", padding: "10px" }}>Send</button>
                        </div>


                </div>
        )
}

export default Server
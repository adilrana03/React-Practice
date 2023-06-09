import React, { useState } from 'react'
import Client from './Client'
import Server from './Server'


const ChattingHome = () => {

        const [clientState, setclientState] = useState("...");
        const [serverState, setserverState] = useState("...");


        return (

                
                        <div style={ { display: "flex", margin: "100px", textAlign: "ceter", border:"2px", borderRadius:"10px" }}>
                                <Client SetState={setclientState} data = {serverState} />
                                <Server SetState={setserverState} data={clientState}  />
                        </div>
        )
}

export default ChattingHome
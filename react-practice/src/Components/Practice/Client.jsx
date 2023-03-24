import {useState} from 'react'
import Home from './Home'

const Client = () => {

        // const [state, setState] = useState("No Data")


  return (
        <>
    <div>
        <h1>Client Component</h1>
        <input type="text" />
        <button>SendData</button>
        <br /><br />
        <h3>Server</h3>
       <p>....</p> 
       <Home  />
    </div>

    </>
  )
}

export default Client
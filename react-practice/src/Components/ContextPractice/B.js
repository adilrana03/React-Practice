import React from 'react'
import C from './C';


const B = () => {
        console.log("B called");
  return (
    <div>
        <h1>B Component</h1>
        <C />
    </div>
  )
}

export default B
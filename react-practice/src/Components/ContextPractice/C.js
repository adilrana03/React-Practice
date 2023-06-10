import React from 'react'
import D from './D'

const C = () => {
        console.log("C Called");
  return (
    <div>
        <h1>C component</h1>
        <D/>
    </div>
  )
}

export default C
import React from 'react'

const Text = ({data}) => {
  return (
    <div style={{padding:"30px", boxShadow:"0 0 10px teal", margin:"20px"}}>
        <h2>Text Component</h2>
        <p>{data}</p>
    </div>
  )
}

export default Text
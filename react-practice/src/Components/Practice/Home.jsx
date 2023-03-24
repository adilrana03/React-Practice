import React from 'react'
import Client from './Client'
import Server from './Server'

const Home = () => {
  return (
    <div style={{display:"flex", margin:"50px", boxShadow:"0 0 10px black"}}>
        <Client />
        <Server />
    </div>
  )
}

export default Home
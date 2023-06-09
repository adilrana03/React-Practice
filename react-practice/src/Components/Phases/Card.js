// import { useState, useEffect } from "react";

// function Card(props) {
//   const [state, setState] = useState(
//     "https://th.bing.com/th/id/R.d42e2e427e6cfa1ca2ed7696ff6e66e3?rik=ZcklKAipPlC%2bQQ&riu=http%3a%2f%2fdigitalsynopsis.com%2fwp-content%2fuploads%2f2014%2f06%2fsupercar-wallpapers-bugatti-3.jpg&ehk=WtfcviZKcVd56i5JO1NTcka%2fiD7dj2f3m1BUflVm75Q%3d&risl=&pid=ImgRaw&r=0"
//   );

//   useEffect(() => {
//     console.log("useEffect Called Callback Function");
//   });

//   return (
//     <div
//       style={{
//         width: "300px",
//         padding: "20px",
//         margin: "50px auto",
//         boxShadow: "0 0 10px black",
//       }}
//     >
//       <img src={state} width="300" height="300" />
//       <h2>Car Image</h2>
//       <button
//         onClick={() => {
//           setState("https://wallpapercave.com/wp/wp1860926.jpg");
//         }}
//       >
//         Bike
//       </button>
//     </div>
//   );
// }

// export default Card;



import React, { useEffect, useState } from 'react'

const Card = () => {


  useEffect(()=>{
    console.log("useeffect called 1 time");
    localStorage.setItem("name", "Adil Rana");
    return (()=>{
      localStorage.removeItem("name");
    })
  },[])
  const [state, setState] = useState({
    img:"https://th.bing.com/th/id/R.d42e2e427e6cfa1ca2ed7696ff6e66e3?rik=ZcklKAipPlC%2bQQ&riu=http%3a%2f%2fdigitalsynopsis.com%2fwp-content%2fuploads%2f2014%2f06%2fsupercar-wallpapers-bugatti-3.jpg&ehk=WtfcviZKcVd56i5JO1NTcka%2fiD7dj2f3m1BUflVm75Q%3d&risl=&pid=ImgRaw&r=0",
    btn:"Bike"
  })

  const handleClick =()=>{
   if(state.btn === "Bike"){
    setState({img:"https://wallpapercave.com/wp/wp1860926.jpg",btn:"Car"})
   }else{
    setState({img:"https://th.bing.com/th/id/R.d42e2e427e6cfa1ca2ed7696ff6e66e3?rik=ZcklKAipPlC%2bQQ&riu=http%3a%2f%2fdigitalsynopsis.com%2fwp-content%2fuploads%2f2014%2f06%2fsupercar-wallpapers-bugatti-3.jpg&ehk=WtfcviZKcVd56i5JO1NTcka%2fiD7dj2f3m1BUflVm75Q%3d&risl=&pid=ImgRaw&r=0",
    btn:"Bike"})
   }
  }


  return (
    <div 
    style={{
              width: "300px",
              padding: "20px",
              margin: "50px auto",
              boxShadow: "0 0 10px black",
            }}
      >
      <img src={state.img} alt="car"   width="300" height="300"/>
      <button onClick={handleClick} >{state.btn}</button>

    </div>
  )
}

export default Card

// // import { useState, useRef } from "react";
// // import Styles from "./Timer.module.css";

// // function Timer(props) {
// //   const [timer, setTimer] = useState(0);
// //   const ref1 = useRef();

// //   let interval;

// //   console.log(interval); // undefined // undefined
// //   const startTimer = () => {
// //     ref1.current = setInterval(() => {
// //       console.log("Inside setInterval", interval); //1
// //       setTimer((prevTimer) => prevTimer + 1);
// //     }, 1000);
// //   };

// //   const stopTimer = () => {
// //     clearInterval(ref1.current); //undefined
// //   };
// //   return (
// //     <div className={Styles.timerContainer}>
// //       <h2>Timer is {timer}</h2>
// //       <button onClick={startTimer}>Start</button>
// //       &nbsp;&nbsp;&nbsp;
// //       <button onClick={stopTimer}>Stop</button>
// //     </div>
// //   );
// // }

// // export default Timer;

// import React,{useState} from 'react'

// const Timer = () => {

//   const [state,setState]= useState(1);

//   const handleClick =()=>{
//     setState((prevState)=>prevState+1);
//     // setState((prevState)=>prevState+2);
//   }

//   return (
//     <>
//       <div style={{textAlign:"center"}}>
//         <h1>Update Count is {state} </h1>
//         <button onClick={handleClick}>Update Count</button>
//       </div>
//     </>

//   )
// }

// export default Timer






import React, { useState, useRef } from 'react'

const Timer = () => {


  const ref1 = useRef();
  const [start, setStart] = useState(true);
  const [sec, setsec] = useState(59)
  const [min, SetMin] = useState(4);


  let s = 59;
  let m = 4;
  const incTimer = () => {
    console.log("working");
    setStart(false);
    ref1.current = setInterval(() => {
      s = s - 1;
      setsec((prevState)=>(prevState-1))
      if (s === 0) {
        setsec(59)
        SetMin(min - 1);
        s = 59;
        m = m - 1;
      }
      if (m <= 0 && s === 1) {
        clearInterval(ref1.current);
      }

    }, 1000)


  }

  const stopTimer = () => {
    clearInterval(ref1.current);
    setStart(true);
  }

  const resetTime = () => {
    setsec(59);
    SetMin(4);
  }


  return (
    <div style={{ textAlign: "center" }}>
      <h1>0{min} : {sec}</h1>

      {
        start ? <button onClick={incTimer}>Start</button> : <button onClick={stopTimer}>Stop</button>
      }
      <button onClick={resetTime}>Reset</button>
    </div>
  )
}

export default Timer
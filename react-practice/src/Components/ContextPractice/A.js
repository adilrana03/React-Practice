import React,{useState} from 'react';
import B from './B';
import C from './C'
import myContext from '../ContextPractice/Context'



const A = () => {
console.log("A called");

        const [state, setState]=useState({
                name:"Adil",
                city:"New Delhi",
                email:"adilrana@gmail.com"
        })

        const sendData=()=>{
                setState({
                        name:"Adil Yoosuf",
                        city:"Hapur",
                        email:"adil@gmail.com"
                })
        }


        return (
                <>
                        <div>
                                <h1>A Component</h1>
                                <button onClick={sendData}>sendData</button>
                        </div>
                       <myContext.Provider value={state}>
                        <B/ >
                        {/* <C/> */}
                       </myContext.Provider>
                </>

        )
}

export default A
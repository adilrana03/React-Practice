// import Nav from './Components/Nav/Nav';
// import A from './Components/ContextPractice/A'
// import ChattingHome from './Components/ChattingApp/ChattingHome';
// import Client from './Components/ChattingApp/Client';
// import Server from './Components/ChattingApp/Server';
import Todo from './Components/Todo/Todo';
// import Timer from './Components/Timer/Timer';
import Profile from './Components/State_API/Profile';
// import A from './Components/Modules/A';
// import B from './Components/Modules/B';
// import Input from './Components/Parent-child/Input';
// import Text from './Components/Child-to-parent/Text';
import Home from './Components/Practice/Home';
// import ControlledForm from './Components/Form/ControlledFrom';
// import UnControlledForm from './Components/Form/UnControlledForm'
// import Card from './Components/Phases/Card';
// import Table from './Components/Phases/Table';
import { useState } from 'react';
import Header from './Components/LoginSignupContext/Header';
import Auth from './Components/LoginSignupContext/Auth';
import loginContext from '../src/Components/LoginSignupContext/Context';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  const [state, setState] = useState({
    isLoggedIn: false,
    user: "Guest User"
  })

  // const fnloggedIn = (data) => {
  //   setState(data)
  // }


  const fnloggedOut = (data) => {
    setState({
      isLoggedIn: false,
      user: "Guest User"
    })
  }



  return (
    <>
      <div className='App'>
        <loginContext.Provider value={{ state, setState, fnloggedOut }}>
          <Header />
          <Auth /> 
          <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/todo' element={<Todo/>}/>

          </Routes>


        </loginContext.Provider>
      </div>
    </>
  );
}

export default App;

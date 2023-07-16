// import A from './Components/ContextPractice/A'
// import ChattingHome from './Components/ChattingApp/Ch  attingHome';
// import Client from './Components/ChattingApp/Client';
// import Server from './Components/ChattingApp/Server';
// import A from './Components/Modules/A';
// import B from './Components/Modules/B';
// import Input from './Components/Parent-child/Input';
// import Text from './Components/Child-to-parent/Text';
// import ControlledForm from './Components/Form/ControlledFrom';
// import UnControlledForm from './Components/Form/UnControlledForm'
// import Card from './Components/Phases/Card';
// import Table from './Components/Phases/Table';
import Nav from './Components/Nav/Nav';
import Todo from './Components/Todo/Todo';
import Timer from './Components/Timer/Timer';
import Profile from './Components/State_API/Profile';
import Home from './Components/Home/Home';
import Notfound from './Components/State_API/NotFound'
import Product from './Components/Products/Product';
import { useState } from 'react';
import Header from './Components/LoginSignupContext/Header';
import Auth from './Components/LoginSignupContext/Auth';
import loginContext from './Components/LoginSignupContext/Context';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Electronic from './Components/Products/Electronic';
import Jewelery from './Components/Products/Jewelery'
import ProductsDetails from './Components/Products/ProductsDetails';

function App() {

  const [state, setState] = useState({
    isLoggedIn: false,
    user: "Guest User"
  })

  const fnloggedIn = (data) => {
    setState(data)
  }


  const fnloggedOut = (data) => {
    setState({
      isLoggedIn: false,
      user: "Guest User"
    })
  }



  return (
    <>
      <div className='App'>
        <loginContext.Provider value={{ state, fnloggedIn, fnloggedOut, setState }}>
          <Header />
          <Todo />
          {/* <Routes>
             <Route path='/' element={<Auth />} />
            <Route path='/timer' element={state.isLoggedIn ? <Timer /> : <Navigate to="/" />} />
            <Route path='/profile' element={state.isLoggedIn ? <Profile /> : <Navigate to="/" />} />
            <Route path='/todo' element={state.isLoggedIn ? <Todo /> : <Navigate to="/" />} />
            <Route path='/product' element={state.isLoggedIn ? <Product /> : <Navigate to="/" />}>
              <Route path='electronic' element={state.isLoggedIn ? <Electronic /> : <Navigate to="/" />} />
              <Route path='jewelery' element={state.isLoggedIn ? <Jewelery /> : <Navigate to="/" />} />
            </Route>
            <Route path='/productDetails/:id' element={state.isLoggedIn ? <ProductsDetails /> : <Navigate to="/" />} />
            <Route path='/*' element={<Notfound />} />
          </Routes> */}

        </loginContext.Provider>
      </div>
    </>
  );
}

export default App;

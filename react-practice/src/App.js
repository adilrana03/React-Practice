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
import { Route, Routes, Link } from 'react-router-dom';
import Electronic from './Components/Products/Electronic';
import Jewelery from './Components/Products/Jewelery'
import ProductsDetails from './Components/Products/ProductsDetails';

function App() {

  // const [state, setState] = useState({
  //   isLoggedIn: false,
  //   user: "Guest User"
  // })

  // const fnloggedIn = (data) => {
  //   setState(data)
  // }


  // const fnloggedOut = (data) => {
  //   setState({
  //     isLoggedIn: false,
  //     user: "Guest User"
  //   })
  // }



  return (
    <>
      <div className='App'>
        <loginContext.Provider value={"a"}>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/timer' element={<Timer />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/product' element={<Product />}>
              <Route path='electronic' element={<Electronic />} />
              <Route path='jewelery' element={<Jewelery />} />
            </Route>
            <Route path='/productDetails' element={<ProductsDetails />} />

            <Route path='/*' element={<Notfound />} />


          </Routes>

        </loginContext.Provider>
      </div>
    </>
  );
}

export default App;

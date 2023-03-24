import Nav from './Components/State_API/Nav';
import Todo from './Components/Todo/Todo';
import Profile from './Components/State_API/Profile';
// import A from './Components/Modules/A';
// import B from './Components/Modules/B';
import Input from './Components/Parent-child/Input';
import Text from './Components/Child-to-parent/Text';
import Home from './Components/Practice/Home';
function App() {
	return (
		<div className='App'>
			<Nav />
      <Home/>
      {/* <Text/> */}
      {/* <Todo/> */}
			{/* <Profile /> */}
      {/* <A />
      <B /> */}
      {/* <Input/> */}
		</div>
	);
}

export default App;

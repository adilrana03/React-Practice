// import React from 'react';
// import { useState } from 'react';
// import './Profile.css';

// const Profile = () => {



// 	const [state, setState] = useState({
// 		name: 'Adil Rana',
// 		gender: 'Male',
// 		city: 'New Delhi',
// 		image: 'https://us.123rf.com/450wm/thelivephotos/thelivephotos2210/thelivephotos221000069/192916941-portrait-of-a-positive-successful-caucasian-bearded-business-man-in-a-suit-seo-consultant-broker.jpg?ver=6'
// 	});


// 	const [style, setStyle]= useState({
// 		bgcolor:"white",
// 		color:"black",
// 		text:"Ckeck to swich to Dark Mode"
// 	})

// 	const getUserData = () => {
// 		console.log('clicked');
// 		fetch('https://randomuser.me/api/?results=1')
// 			.then(res => res.json())
// 			.then(userData => {
// 				console.log(userData);
// 				setState({
// 					name: userData.results[0].name.first,
// 					gender: userData.results[0].gender,
// 					city: userData.results[0].location.city,
// 					image: userData.results[0].picture.large,
// 				});
// 			});
// 	};
// 	const handleChange = (e)=>{
// 		if(e.target.checked){
// 			console.log("checked");
// 			setStyle({
// 				bgcolor:"black",
// 				color:"white",
// 				text:"UnCheck to swich to Light Mode"
// 			})
// 		}else{
// 			console.log("Not Checked");
// 			setStyle({
// 				bgcolor:"white",
// 				color:"black",
// 				text:"Check to swich to Dark Mode"
// 			})

// 		}
// 	}

// 	return (
// 		<div className='card' style={{background: style.bgcolor, color:style.color} }>
// 			<div style={{ width: '35%' }}>
// 				<img src={state.image} alt='i' width={'100%'} height='100%' />
// 			</div>
// 			<div style={{ width: '65%', padding: '30px' }}>
// 				<dl>
// 					<dt>
// 						<b>User Name</b>
// 					</dt>
// 					<dd>{state.name}</dd>
// 					<dt>
// 						<b>city</b>
// 					</dt>
// 					<dd>{state.city}</dd>
// 					<dt>
// 						<b>Gender</b>
// 					</dt>
// 					<dd>{state.gender}</dd>
// 					<dt>
// 						<b>Description</b>
// 					</dt>
// 					<dd>
// 						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ea nisi
// 						temporibus maxime? Necessitatibus deserunt, cum hic ratione fugiat molestias
// 						ex dolores illo consequatur libero esse consectetur labore sequi voluptatum.
// 					</dd>
// 				</dl>
// 				<button onClick={getUserData}>Random User</button>
// 				<br />
// 				<br />
// 				<input onChange={handleChange} type='checkbox' /> {style.text}
// 			</div>
// 		</div>
// 	);
// };

// export default Profile;




import React, { useState,useEffect } from 'react'

const Profile = () => {

	const [state, setState] = useState({
		name: "Adil Rana",
		city: "New Delhi",
		gender: "Male",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Dj9UWUfqZHbk8jjzLnLNP5bfkDqOzL1giIcUyxbj&s"
	})

	const [mode, setMode] = useState({
		color: "black",
		bgcolor: "white",
		text:"check to change to dark mode"
	})

	useEffect(()=>{
		getUserData();
	},[])


	const getUserData = () => {
		fetch('https://randomuser.me/api/?results=1')
			.then((res) => res.json()
				.then((data) => {
					console.log(data);
					setState(
						{
							name: data.results[0].name.first,
							city: data.results[0].location.city,
							gender: data.results[0].gender,
							img: data.results[0].picture.large,
						}
					)
				}))

	}


	const modeChange = (e) => {
		if (e.target.checked) {
			setMode({
				color: "white",
				bgcolor: "black",
				text: "UnCheck to change to light mode"

			})
		} else {
			setMode({
				bgcolor: "white",
				color: "black",
				text: "Check to change to dark mode"

			})
		}
	}




	return (
		<div style={{ display: "flex", width: "90%", margin: "auto", marginTop: "100px", boxShadow: "0 0 10px black" }}>
			
			<div style={{ width: "35%" }}>
				<img src={state.img} alt="ps" width={'100%'} height='100%' />
			</div>
			<div style={{ width: "65%", padding: "30px", color: mode.color, backgroundColor: mode.bgcolor }}>
					<dl>
						<dt>
							<b>User Name</b>
						</dt>
						<dd> {state.name}</dd>
						<dt>
							<b>City</b>
						</dt>
						<dd>
							{state.city}
						</dd>
						<dt>
							<b>{state.gender}</b>
						</dt>
						<dd>Male</dd>
						<dt> <b>Description</b> </dt>
						<dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aspernatur, error corporis sed accusantium obcaecati molestiae dolore voluptas rem est deserunt dolores, consequatur nostrum optio, ad at tenetur perferendis pariatur.</dd>
					</dl>
				<button onClick={getUserData}> Get Random User</button>
				<br />
				<br />

				<input type="checkbox" onChange={modeChange} /> {mode.text}
			
			</div>




			

		</div>
	)
}

export default Profile
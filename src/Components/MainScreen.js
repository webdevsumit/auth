import React,{useState} from 'react';
import Signup from './Signup'

function MainScreen(){


	
	const afterSignup = (user) =>{
		alert(user+' signuped successfully.');
	}

	
	var [screen, setScreen] = useState(<Signup afterSignup={afterSignup}/>);
	
	return(
		<div className='MainScreen'>
			{screen}
		</div>
	);
}


export default MainScreen;

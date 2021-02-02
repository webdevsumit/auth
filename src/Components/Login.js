import React,{useState} from 'react';

function Login(props){

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passType, setPassType] = useState(true);

	var auth = JSON.parse(localStorage.getItem('auth'));
	
	const handleLogin=()=>{

		if(auth===null){
			alert('no user found!');
		}
			
			
		const same = auth.filter(d=>d.username===username);

		if(same.length!==0){

			if (same[0].password===password){

				localStorage.setItem('userlogined',username);
				setUsername('');
				setPassword('');
				props.afterLogin(username);
			}
			else{
				alert('wrong password.');
			}
		}else{
			alert(username+'user not exist!')
		}
	}
	
	return(
		<div className='Signup'>
		
			<input type='text' 
			value={username}
			onChange={e=>setUsername(e.target.value)}
			placeholder='Username'/>
			
			<input type={passType?'password':'text'}
			value={password}
			onChange={e=>setPassword(e.target.value)}
			 />
			
			<button onClick={()=>{setPassType(!passType)}}>
			{passType?'show':'hide'}</button>

			<button onClick={handleLogin}>login</button>
			

		</div>
	);
}


export default Login;

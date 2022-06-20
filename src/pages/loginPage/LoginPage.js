import { useContext } from 'react';
import { Context } from '../..';
import './loginPage.scss'
import firebase from 'firebase/compat/app';

function LoginPage() {
	const {auth} = useContext(Context)
	async function login(){
		const provider = new firebase.auth.GoogleAuthProvider()
		const {user} = await auth.signInWithPopup(provider)
		console.log(user)
	}
	return (
		<div className="loginPage">
			<button onClick={login} className='btn-log'>Войти</button>
		</div>
	);
}

export default LoginPage;
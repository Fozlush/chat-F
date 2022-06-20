import './header.scss'
import { useContext } from 'react'
import { Context } from '../../index'
import { useAuthState } from 'react-firebase-hooks/auth'

function Header() {
	const {auth} = useContext(Context)
	const [user] = useAuthState(auth)
	return (
		<header>
			<div className="header-container">
				{user && <button onClick={() => auth.signOut()}>Выйти</button>}
			</div>
        </header>
	);
}

export default Header;
import { LoginPage, ChatPage } from '../pages'
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'

function AppRouter() {
	const {auth} = useContext(Context)
	const [user] = useAuthState(auth)
	return (
		<Routes>
			{user && <Route path="*" element={<ChatPage />}/>}
			{!user && <Route path="*" element={<LoginPage />}/>}
		</Routes>
	);
}

export default AppRouter;
import { BrowserRouter } from 'react-router-dom';
import { Footer, Header } from './layout';
import AppRouter from './routes/AppRouter';
import './style.scss'
import { useContext } from 'react'
import { Context } from './index'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from './routes/Loader';

function App() {
	const {auth} = useContext(Context)
	const [user, loading, error] = useAuthState(auth)
	if(loading){
		return <Loader/>
	}
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Header/>
				<div className='container'>
					<AppRouter/>
					<Footer/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
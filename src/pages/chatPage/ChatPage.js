import { useContext, useState } from 'react'
import { Context } from '../../index'
import { useAuthState } from 'react-firebase-hooks/auth'
import './chatPage.scss'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Loader from '../../routes/Loader'
import firebase from 'firebase/compat/app';

function ChatPage() {
	const {auth, firestore} = useContext(Context)
	const [user] = useAuthState(auth)
	const [value, setValue] = useState('')
	const [messages, loading] = useCollectionData(
		firestore.collection('messages').orderBy('time')
	)
	async function sendMessage(){
		firestore.collection('messages').add({
			uid: user.uid,
			login: user.displayName,
			photoUrl: user.photoURL,
			text: value,
			time: firebase.firestore.FieldValue.serverTimestamp()
		})
		setValue('')
	}
	if(loading){
		return (
			<div className='chatPage'>
				<Loader/>
			</div>
		)
	}
	return (
		<div className="chatPage">
			<div className='chat-window'>
				{messages.map(message =>
					<div className={user.uid === message.uid ? 'myMessage message' : 'strangerMessage message'}>
						<div className='message-info'>
							<img src={message.photoUrl}/>
							<span>{message.login}</span>
						</div>
						<p>{message.text}</p>
					</div>
				)}
			</div>
			<input type='text' value={value} onChange={e => setValue(e.target.value)} className='input-message'></input>
			<button onClick={sendMessage} className='btn-message'>Отправить</button>
		</div>
	);
}

export default ChatPage;
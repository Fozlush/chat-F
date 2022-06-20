import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


firebase.initializeApp({
	apiKey: "AIzaSyB0nZQNF2_H6piqB4rQ3UniXzKFzUsiEBw",
	authDomain: "chat-fproject.firebaseapp.com",
	projectId: "chat-fproject",
	storageBucket: "chat-fproject.appspot.com",
	messagingSenderId: "195204137376",
	appId: "1:195204137376:web:4f8b63deb84d969a6d24c5",
	measurementId: "G-0X606N6VZ7"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Context.Provider value={{
		firebase,
		auth,
		firestore
	}}>
		<App />
	</Context.Provider>
);
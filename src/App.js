import React, { useReducer, useEffect } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { ToastContainer } from "react-toastify";






function App() {


	const init =()=> {
		return JSON.parse(sessionStorage.getItem('user')) || {isLogged:false};
	}
	
	const [user, dispatch] = useReducer(authReducer, {}, init);

	useEffect(() => {
		sessionStorage.setItem('user', JSON.stringify(user));
	}, [user])

	return (
		<>
		<AuthContext.Provider value={{user,dispatch}}>
				<AppRouter />
				<ToastContainer/>
		</AuthContext.Provider>
		
		</>
	);
}



export default App;

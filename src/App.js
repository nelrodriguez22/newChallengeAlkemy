import React, { useReducer, useEffect } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';




function App() {

	const init =()=> {
		return JSON.parse(localStorage.getItem('user')) || {isLogged:false};
	}
	
	const [user, dispatch] = useReducer(authReducer, {}, init);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user])

	return (
		<>
		<AuthContext.Provider value={{user,dispatch}}>
				<AppRouter />
		</AuthContext.Provider>
		
		</>
	);
}

export default App;

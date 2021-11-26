import React, { useContext } from 'react';
import {	BrowserRouter,Switch,Route} from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { Loginpage } from '../components/Loginpage';
import { DbRoutes } from './DbRoutes';
import { AuthContext } from '../auth/AuthContext';


export const AppRouter = () => {
	const { user} = useContext(AuthContext)
	return (
			
		<BrowserRouter>
	
			
				<Switch>
					<Route exact path="/login" component={Loginpage} />

					<PrivateRoute
					path="/" 
					component={DbRoutes} 
					isAuth={user.isLogged}

					/>
				</Switch>
			
		</BrowserRouter>
	)
}
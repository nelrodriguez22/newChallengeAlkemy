import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import { Navbar } from '../components/Navbar';
import { Searchpage } from '../components/Searchpage';
import { Homepage } from '../components/Homepage';
import { Heroprofile } from '../components/Heroprofile';


export const DbRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<Switch>
					<Route exact path="/home" component={Homepage} />
					<Route exact path="/search" component={Searchpage} />
					<Route exact path="/heroe/:id" component={Heroprofile} />

					<Redirect to="/home" />
				</Switch>
			</div>


		</>
	)
}
import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import { types } from "../types/types";


export const Navbar = () => {
	const history = useHistory()
	const {user:{user}, dispatch} = useContext(AuthContext)
	//funcion para el manejo del logout de la sesion
	const HandleLogout =()=>{
		history.replace("/login");
		dispatch({
			type: types.logout
		})
	}

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link
						className="navbar-brand"
						exact
						to="/home"
					>
						AlkemyChallengeApp
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink
									className="nav-link active"
									exact
									to="/home"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									exact
									to="/search"
								>
									Search
								</NavLink>
							</li>
						</ul>
						<span className="nav-item nav-link text-info">{user}</span>
						<button
							className="btn btn-secondary"
							onClick={HandleLogout}

						>
							Logout
						</button>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar;

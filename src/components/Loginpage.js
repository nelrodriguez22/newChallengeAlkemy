import React, { useContext } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// import axios from "axios"
import { useHistory } from "react-router-dom"
import { useFormik } from "formik"
import {AuthContext} from '../auth/AuthContext'
import { types } from "../types/types"

export const Loginpage = () => {
	// const url = "https://challenge-react.alkemy.org/"
	const history = useHistory()
	const {dispatch} = useContext(AuthContext)

//llamada a la api de alkemy por el token para el inicio de sesion
	// const formSubmit = () => {
	// 	axios
	// 		.post(url, {
	// 			email: formik.values.email,
	// 			password: formik.values.password,
	// 		})
	// 		.then(({ data }) => {
	// 			dispatch({
	// 				type: types.login,
	// 				payload:{
	// 					user:'AlkemyUser'
	// 				}
	// 			})
	// 			sessionStorage.setItem("token", data.token);
	// 			history.push("/home");
	// 		})
	// 		.catch(({ response}) => {
	// 			toast.error(response.data.error, {
	// 				position: "bottom-center",
	// 				autoClose: 1500,
	// 				hideProgressBar: true,
	// 				closeOnClick: true,
	// 				pauseOnHover: true,
	// 				draggable: true,
	// 				progress: undefined,
	// 				theme: "colored",
	// 			});
	// 		});
	// }
	const formSubmit = () => {
		const { email, password } = formik.values;
	
		if (email === 'user@email.com' && password === 'public') {
				dispatch({
					type: types.login,
					payload:{
						user:'AlkemyUser'
					}
				})
	
			history.push("/home");
		} else {
			toast.error("Credenciales inválidas", {
				position: "bottom-center",
				autoClose: 1500,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		}
	};
	
	
//validacion del formulario 
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate: (values) => {
			const errors = {};

			if (!values.email) {
				errors.email = "El campo no puede estar vacio";
			} else if (!values.password) {
				errors.password = "El campo no puede estar vacio";
			}

			return errors;
		},
		onSubmit: () => {
			if (!formik.isValid) {
				return;
			}

			formSubmit();
		},
	})

	return (
		<>
			<div className="container-fluid mt-5 justify-content-center text-danger">
			*Lamentablemente los endpoints del login de alkemy son inseguros y no 
			pueden ser hosteados en internet por lo	que el usuario y el email estan hardcodeados</div>
			<div className="mt-5 container-fluid d-flex justify-content-center">
				<form onSubmit={formik.handleSubmit}>
					<div className="mb-3">
						<label className="form-label"	>
							Email:</label>
						<input
							type="email"
							className="form-control"
							name="email"
							autoComplete="off"
							onChange={formik.handleChange}
							value={formik.values.email}
							placeholder="user@email.com"
						/><span>user@email.com</span>
						{formik.errors.email 
						? <div>{formik.errors.email}</div> 
						: null}
					</div>
					<div className="mb-3">
						<label
							className="form-label"
						>
							Password:</label>
						<input
							type="password"
							className="form-control"
							name="password"
							autoComplete="off"
							onChange={formik.handleChange}
							value={formik.values.password}
							placeholder="public"
						/>
						<span>public</span>
						{formik.errors.password 
						? <div>{formik.errors.password}</div> 
						: null}
					</div>
					<button
						className="btn btn-primary"
						type="submit"
						onSubmit={formik.handleSubmit}
					>
						Enviar
					</button>
				</form>
			</div>
		</>
	);
}

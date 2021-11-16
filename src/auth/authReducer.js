import { types } from "../types/types";




export const authReducer = (state={}, action)=>{
	switch (action.type) {
		case types.login:
			return {
				...action.payload,
				isLogged:true,
			}
		case types.logout:
			return {
				isLogged: false,
			}
	
		default:
			return state;
	}
}
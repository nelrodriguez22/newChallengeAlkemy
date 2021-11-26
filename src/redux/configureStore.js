import { combineReducers, createStore } from "redux"
import tbReducer from "./ducks/tb"


const reducer = combineReducers({
	teambuilder: tbReducer,	
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store


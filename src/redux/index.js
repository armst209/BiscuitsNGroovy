
//redux imports
import { applyMiddleware, createStore } from "redux"
//thunk
import thunk from "redux-thunk";

//root reducers
import rootReducer from "./reducers";
import { composeWithDevToolsDevelopmentOnly, composeWithDevTools } from '@redux-devtools/extension';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

console.log(store.getState());

export default store;
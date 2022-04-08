//redux imports
import { applyMiddleware, createStore } from "redux";
//thunk
import thunk from "redux-thunk";

//root reducers
import rootReducer from "./reducers";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";

const store = createStore(rootReducer, composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk)));

console.log(store.getState());

export default store;


import { combineReducers } from "redux"

import { UserReducer as bng_user } from "../pages/Users/redux"

const rootReducer = combineReducers({
    bng_user
});

export default rootReducer;
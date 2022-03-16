import { createStore } from "redux";
import { mockUser } from "../../utils/Mocks/Mocks";

const initialState = { ...mockUser };

const rootReducer = (state = initialState, action) => {
    return state;
}

const store = createStore(rootReducer);
console.log(store.getState());

export default store;
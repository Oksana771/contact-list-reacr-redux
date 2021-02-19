import { createStore, applyMiddleware } from "redux";
import RootReducer from "./Reducers/RootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(reduxThunk)) );
export default store;

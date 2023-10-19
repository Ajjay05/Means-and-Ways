import { combineReducers } from "redux";
import Reducer from "./reducer";

const rootReducer=combineReducers({listData: Reducer})

export default rootReducer;
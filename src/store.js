import { createStore } from "redux";
import rootReducer from "./Redux/rootreducer";

const store= createStore(rootReducer)

export default store
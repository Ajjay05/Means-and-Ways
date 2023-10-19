import { ADD_TO_CART } from "./actionTypes";

const InitialState={
    list:[]
}

const Reducer=(state=InitialState, action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const {payload}=action
            return{
                ...state, list:[...state.list, payload]
            }
        
    
        default : return state;
            
    }
}

export default Reducer
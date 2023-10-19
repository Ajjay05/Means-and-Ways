import { ADD_TO_CART } from "./actionTypes";

const InitialState={
    List:[]
}

const Reducer=(state=InitialState, action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const {payload}=action
            return{
                ...state, List:[...state.List, payload]
            }
        
    
        default : return state;
            
    }
}

export default Reducer
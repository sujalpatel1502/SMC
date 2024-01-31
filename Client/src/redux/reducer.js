import { SET_NAME } from "./constant";

const initialState = {
    name : null
};
export const dataReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SET_NAME:
                return {...state,name:action.payload};
        default:
            return state
    }
}



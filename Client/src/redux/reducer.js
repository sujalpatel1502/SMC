import { SET_NAME } from "./constant";

const initialState = {
    userData: null,
};
export const dataReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SET_NAME:
                return {...state,userData:action.payload};
        default:
            return state
    }
}



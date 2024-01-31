import { SET_NAME } from "./constant"

export function name(item) {
    return{
        type:SET_NAME, 
        payload:item
    }
}

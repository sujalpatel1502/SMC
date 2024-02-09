import { combineReducers } from "redux";
import  { dataReducer }  from "./reducer";
import { ThemeReducer } from "./ThemeReducer";

export default combineReducers({
     dataReducer,
     ThemeReducer
})
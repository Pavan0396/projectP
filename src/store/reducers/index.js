import { combineReducers } from "redux";
import { app } from "./appReducers";
import { actionCreators } from "../actionCreators";



const reducer ={
    app
}
export default combineReducers(reducer)
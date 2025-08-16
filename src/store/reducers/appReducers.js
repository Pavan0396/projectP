import { actionNames } from "../actionCreators";



export const app= (state={}, action)=>{
    const {type,payload}=action;

    switch (type){
        case actionNames?.LOGRES:{
            return{
                ...state,
                name:payload?.name,
                age:payload?.age
            }
        }
        case actionNames?.INOUT:{
            return{
                ...state,
               inout:payload
            }
        }
        default: return state;
    }
}
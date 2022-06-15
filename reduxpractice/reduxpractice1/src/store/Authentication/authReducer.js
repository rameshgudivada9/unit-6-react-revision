import { LOGIN } from "./auth.types";

const intial={
    data:{}
}

export const AuthReducer=(state=intial,{type,payload})=>{
    switch(type){
        case  LOGIN:{
            return {
                ...state,
                data:payload
            }
        }
        case  LOGOUT:{
            return {
                ...state,
                data:{}
            }
        }
        default :{
            return state;
        }
        
    }
}
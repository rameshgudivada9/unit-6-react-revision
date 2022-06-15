import { LOGIN, LOGOUT } from "./auth.types";

export const login=(payload)=>(dispatch)=>{
dispatch({type:LOGIN,payload});
}
export const logout=()=>(dispatch)=>{
dispatch({type:LOGOUT});
}





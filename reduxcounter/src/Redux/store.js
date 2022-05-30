
import {legacy_createStore as createStore} from "redux";
import { counterreducer } from "./reducer";

const intial={
counter:0
}

export const store=createStore(counterreducer,intial)

// store.subscribe(()=>{
//     console.log(store.getState())
// })




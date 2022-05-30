import { legacy_createStore as createStore } from "redux";

var ADDCOUNT="ADD_COUNT"
var ADDTODO="TO_DO"

// action types

const todo=(title)=>{
    return {
        type:ADDTODO,
        payload:title

    }
}
const reducer = (store, action) => {
  switch (action.type) {
    case ADDCOUNT:
      return { ...store, counter: store.counter + action.payload };
    case ADDTODO:
      return { ...store, todos: [...store.todos, action.payload] };
    default:
      return store;
  }
};

const intial = {
  counter: 0,
  todos: [],
};

const store = createStore(reducer, intial);

console.log(store.getState());

store.dispatch({ type: "ADD_COUNT", payload: 1 });

console.log(store.getState());

store.dispatch(todo("learn mern"));
console.log(store.getState());



// ----------or-------------



// const reducer=(store,action)=>{
//     if(action.type==="ADD_COUNT"){
//         return   { ...store,counter:store.counter+action.payload};
//     }
//     if(action.type==="TO_DO"){
//         return {...store,todos:[...store.todos,action.payload]}
//     }
//     return {...store};
// }

// const intial={
//     counter:0,
//     todos:[]
// }

// const store=createStore(reducer,intial);

// console.log(store.getState())
// // console.log(store.dispatch)

// store.dispatch({type:"ADD_COUNT",payload:1})

// console.log(store.getState())

// store.dispatch({
//     type:"TO_DO",
//     payload:"learn redux"
// });
// console.log(store.getState())


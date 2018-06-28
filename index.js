import { createStore } from 'redux';

const reducer = function(state,action){
    if(action.type == "NYC"){
        return action.payload+1
    } 
    return action.payload

}

const store = createStore(reducer,0)//Initial state is 0

store.subscribe(()=>{
    console.log('store change',store.getState())
})

store.dispatch({type:"NYC" ,payload:2})
store.dispatch({type:"NY" ,payload:1})
import { combineReducers,createStore } from 'redux';

const userReducer = (state,action) => {
    return state;
}
const tweetReducer = (state,action) => {
    return state;
}

const reducers = combineReducers({
    user:userReducer,
    tweets:tweetReducer
})

const reducer = function(state,action){
    if(action.type == "NYC"){
        return action.payload.id +1
    } 
    return action.payload

}

const store = createStore(reducer,{
    user:{
        name:"Nap",
        age:23     //This object is the state so it gonna go to be state of userReducer
    },
    tweets:[]  
});
store.subscribe(()=>{
    console.log('store change',store.getState())
})

store.dispatch({type:"NYC" ,payload:2})//'payload' can change name but 'type'
store.dispatch({type:"NY" ,payload:1})
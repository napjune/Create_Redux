import { combineReducers,createStore } from 'redux';

const userReducer = (state = {},action) => {
    return state;
}
const tweetReducer = (state = {},action) => {
    return state;
}

const reducers = combineReducers({
    user:userReducer,
    tweets:tweetReducer
})

const store = createStore(reducers);
store.subscribe(()=>{
    console.log('store change',store.getState())
})

store.dispatch({type:"NYC" ,payload:2})//'payload' can change name but 'type'
store.dispatch({type:"NY" ,payload:1})
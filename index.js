import { combineReducers,createStore,applyMiddleware } from 'redux';

const userReducer = (state = {},action) => {
    switch(action.type){
        case "CHANGE_NAME" : {
            var  v = state
            state = {...state ,name:action.payload,title:action.title}
            console.log('state is : ',v)
            break;
        }
        case "CHANGE_AGE" :{
            state = {...state,age:action.payload}
            break;
        }
        case "E" : {
            throw new Error("erorrr!!")
        }
    }
    return state;
}
const tweetReducer = (state = [],action) => {
    return state;
}

const reducers = combineReducers({
    user:userReducer,
    tweets:tweetReducer,
})

const mylogger =(store)=>(next)=>(action)=>{
    console.log("Log Action : ",action);
    next(action);
}
const error =(store)=>(next)=>(action)=>{
    try{
    next(action);
    }catch(e){
        console.log("AHHH",e)
    }
}

const store = createStore(reducers,{},applyMiddleware(mylogger,error));//later  move {} to reducer
store.subscribe(()=>{
    console.log('store change',store.getState())
})

store.dispatch({type:"CHANGE_NAME" ,payload:"God",title:"cruel"})
store.dispatch({type:"CHANGE_NAME" })
store.dispatch({type:"CHANGE_NAME" ,payload:"nap",title:"cute"})//'payload' can change name but 'type'
store.dispatch({type:"CHANGE_AGE" ,payload:35})
store.dispatch({type:"E" })
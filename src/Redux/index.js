import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import navbarReducer from './Reducers/navbarReducer'
import listReducer from './Reducers/listReducer'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'

// 纯函数。(1) 对与外界没有副作用 (2) 同样的输入得到同样的输出
// reducer拆开， 再合并


const reducers = combineReducers({
    isShow:navbarReducer,
    list:listReducer
})
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promiseMiddleware,thunkMiddleware))
    );

export default store;


/*
 new Vuex.Store({
    state:{
        isShow:true,
        list:[],

    }
})

    var a="kerwin"
    function test(){    
        var a= "dwa"
        a="xiaoming"
    }

    test();

    function test(a,b){
        return a+b+Math.random();
    }
    test(1,2)
    test(1,2)


    var obj = {
        name:"kerwin"
    }
    function test(myobj){
        var newobj = {...myobj}
        newobj.name="xiaoming"
    }
    test(obj)
*/
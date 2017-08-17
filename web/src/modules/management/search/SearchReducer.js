import * as types from './SearchConstant';
import { combineReducers } from 'redux';
//可以有多个Reducer处理方法，需要用combineReducers连接一起
//const orderReducers = combineReducers({
    // scanCode,ES6写法属性名跟属性值一样可以省略属性名
    // print
// });


function Search(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){

        case types.SEARCH_REQUEST:
            reState.loading = true
            break
        //根据ajax返回的action.type
        case types.SEARCH_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
       

            break
        case types.SEARCH_FAIL:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}
function num(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){

        case types.SEARCH_NUM_REQUEST:
            reState.loading = true
            break
        //根据ajax返回的action.type
        case types.SEARCH_NUM_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
       
            break
        case types.SEARCH_NUM_FAIL:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}

function Shousuo(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){

        case types.SEARCH_SHOU_REQUEST:
            reState.loading = true
            break
        //根据ajax返回的action.type
        case types.SEARCH_SHOU_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
          
            break
        case types.SEARCH_SHOU_FAIL:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}

const orderReducers = combineReducers({
    Search,
    Shousuo,
    num

});

export default orderReducers;
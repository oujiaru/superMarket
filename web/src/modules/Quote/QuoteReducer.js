
import * as types from './QuoteConstant';
import { combineReducers } from 'redux';
//可以有多个Reducer处理方法，需要用combineReducers连接一起
//const orderReducers = combineReducers({
    // scanCode,ES6写法属性名跟属性值一样可以省略属性名
    // print
// });


function Search(state = {loading: false}, action){

    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.Quote_REQUEST:
            reState.loading = true

            break
        //根据ajax返回的action.type

        case types.Quote_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false

            break
        case types.Quote_FAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}
function nums(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){

        case types.Quote_NUMs_REQUEST:
            reState.loading = true
            break
        //根据ajax返回的action.type
        case types.Quote_NUMs_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
        console.log(search,action.body)
            break
        case types.Quote_NUMs_FAIL:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}

function Sousuo(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){

        case types.Quote_SHOUs_REQUEST:
            reState.loading = true
            break
        //根据ajax返回的action.type
        case types.Quote_SHOUs_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
          
            break
        case types.Quote_SHOUs_FAIL:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}

const orderReducers = combineReducers({
    Search,
    Sousuo,
    nums

});

export default orderReducers;


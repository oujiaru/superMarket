import * as types from './QuoteConstant'

export default function(state = {aa: aa}, action){
    console.log(action)
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.Quote_REQUEST:
            reState.loading = true
            console.log(action)
            break
        case types.Quote_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
            console.log(action.body)
            break
        case types.Quote_FAILURE:
            reState.error = action.error
            reState.loading = false
            console.log(action)
            break
    }
    return reState;
}
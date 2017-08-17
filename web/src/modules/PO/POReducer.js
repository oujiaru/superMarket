import * as types from './POConstant'

export default function(state = {loading: false}, action){
    console.log(action)
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.PO_REQUEST:
            reState.loading = true
            break
        case types.PO_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.PO_FAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}
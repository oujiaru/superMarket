import * as types from './AppConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.APP_REQUEST:
            reState.loading = true
            break
        case types.APP_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
            console.log('app',action.body)
            break
        case types.APP_FAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}
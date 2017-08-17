import * as types from './QcompileConstant'
export default function(state = {loading: false}, action){
    console.log(state)
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.Qcompile_REQUEST:
            reState.loading = true
            break
        case types.Qcompile_SUCCESS:
            reState.data = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
            console.log(action.body)
            break
        case types.Qcompile_FAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}
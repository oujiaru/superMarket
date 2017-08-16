import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'
import code from '../modules/POS/PosReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    router,
    code
})

export default rootReducer
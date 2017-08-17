import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'
import code from '../modules/POS/PosReducer'
import {combineReducers} from 'redux'
import reg from '../modules/reg/regReducer'

const rootReducer = combineReducers({
    login,
    router,
    code,
    reg
})

export default rootReducer
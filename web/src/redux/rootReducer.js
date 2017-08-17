import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'

import Search from '../modules/management/Search/SearchReducer'

import code from '../modules/POS/PosReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    router,

    Search,

    code

})

export default rootReducer
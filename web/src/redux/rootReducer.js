import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'

import Search from '../modules/management/Search/SearchReducer'

import code from '../modules/POS/PosReducer'
import  PO from '../modules/PO/POReducer'
import  Qcompile from '../modules/Qcompile/QcompileReducer'
import  Quote from '../modules/Quote/QuoteReducer'


import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    router,
    PO,
    Search,
    Qcompile,
    code,
    Quote,

})

export default rootReducer
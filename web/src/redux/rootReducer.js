import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'
<<<<<<< HEAD
import Search from '../modules/management/Search/SearchReducer'
=======
import code from '../modules/POS/PosReducer'
>>>>>>> 2fc03c95f59b403bfcfd726fba799da7b408e787
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    router,

    Search,

    code

})

export default rootReducer
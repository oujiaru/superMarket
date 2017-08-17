import * as constants from './LoginConstant'

export function login(username, password){
    return {
        types: [constants.LOGIN_REQUEST, constants.LOGIN_SUCCESS, constants.LOGIN_FAILURE],
        path: 'login',
        method: 'get',
        query: {username:username, password:password}
    }
    // return {
    // 	type: constants.REQUEST
    // }
}

// export function login(username, password){
//     return {
//         type: 'aa'
//     }
// }
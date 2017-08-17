import * as constants from './regConstant'

export function reg(username, password){
    return {
        types: [constants.REG_REQUEST, constants.REG_SUCCESS, constants.REG_FAILURE],
        path: 'register',
        method: 'post',
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
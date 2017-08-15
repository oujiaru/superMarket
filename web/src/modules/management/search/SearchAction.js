import * as constants from '../../../redux/commonConstant'

export function login(aa){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'cha',
        method: 'post',
        query: {aa}
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
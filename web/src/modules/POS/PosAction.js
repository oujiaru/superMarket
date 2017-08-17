import * as constants from '../../redux/commonConstant'

export function code(code){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'code',
        method: 'post',
        query: {Code: code}
    }
    // return {
    // 	type: constants.REQUEST
    // }
}

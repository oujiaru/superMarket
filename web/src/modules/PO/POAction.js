import * as constants  from './POConstant';

export function login(aa){

    return {
        types: [constants.PO_REQUEST, constants.PO_SUCCESS, constants.PO_FAILURE],
        path: 'cha1',
        method: 'post',
       	query: {aa:aa}
    }
    // return {
    // 	type: constants.REQUEST
    // }
}
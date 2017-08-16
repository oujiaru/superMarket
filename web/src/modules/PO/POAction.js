import common from '../../libs/common/common';

export function login(aa){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'cha1',
        method: 'post',
        query: {aa}
    }
    // return {
    // 	type: constants.REQUEST
    // }
}
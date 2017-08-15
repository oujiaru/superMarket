import * as constants from '../../../redux/commonConstant'

export function login(
            goodscode,
            goodsname,
            goodsnumber,
            goodsstyle,
            goodsnuit,
            goodsprice,
            menberprice,
            goodsmodel,
            
        ){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addList',
        method: 'post',
        query: {goodscode,
            goodsname,
            goodsnumber,
            goodsstyle,
            goodsnuit,
            goodsprice,
            menberprice,
            goodsmodel,}
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
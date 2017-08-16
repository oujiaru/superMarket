import * as constants from '../../redux/commonConstant';

export function login(
     goodscode,
     goodsname,
     goodsnumber,
     goodsstyle,
     goodsnuit,
     poprice,
     pocount,
     goodsmodel,
     posupplier,
     posubmissiontime,
     poacknowledgingtime,
     postate,
     pobuyer,
            
        ){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addList',
        method: 'post',
        query: {
                 goodscode,
                 goodsname,
                 goodsnumber,
                 goodsstyle,
                 goodsnuit,
                 poprice,
                 pocount,
                 goodsmodel,
                 posupplier,
                 posubmissiontime,
                 poacknowledgingtime,
                 postate,
                 pobuyer,}
    }
    // return {
    // 	type: constants.REQUEST
    // }
}
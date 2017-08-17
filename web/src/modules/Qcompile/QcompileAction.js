import * as constants from './QcompileConstant';

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
        types: [constants.Qcompile_REQUEST, constants.Qcompile_SUCCESS, constants.Qcompile_FAILURE],
        path: 'addQcompile',
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
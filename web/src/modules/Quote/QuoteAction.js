import * as constants from './QuoteConstant';

export function Search(aa){

    return {
        types: [constants.Quote_REQUEST, constants.Quote_SUCCESS, constants.Quote_FAIL],
        path: 'cha1',
        method: 'post',
        query: {aa:aa}
    }
};

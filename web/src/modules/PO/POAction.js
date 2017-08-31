import * as constants  from './POConstant';


export function Search(){
	
    return {

        types: [constants.Quote_REQUEST, constants.Quote_SUCCESS, constants.Quote_FAIL],
        path: 'cx',
        method: 'post',
        query: {}

    }
};
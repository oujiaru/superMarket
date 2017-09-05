
import * as constants from './QuoteConstant'
//引入Constant概念为了防止一个action引发所有组件的Reducer(这也是组件可以通信的原因),
//组件action行为，当有多个动作

export function Search(min,max){
	
    return {
        types: [constants.Quote_REQUEST, constants.Quote_SUCCESS, constants.Quote_FAIL],
        path: 'cx',
        method: 'post',
        query: {min,max}
    }
};
export function nums(){
    
    return {
        types: [constants.Quote_NUMs_REQUEST, constants.Quote_NUMs_SUCCESS, constants.Quote_NUMs_FAIL],
        path: 'nums',
        method: 'post',
        query: {}
    }
};
export function Sousuo(zi){

    return {
        types: [constants.Quote_SHOUs_REQUEST, constants.Quote_SHOUs_SUCCESS, constants.Quote_SHOUs_FAIL],
        path: 'ss',
        method: 'post',
        query: {zi}
    }
};


import * as constants from './SearchConstant'
//引入Constant概念为了防止一个action引发所有组件的Reducer(这也是组件可以通信的原因),
//组件action行为，当有多个动作

export function Search(min,max){
	
    return {
        types: [constants.SEARCH_REQUEST, constants.SEARCH_SUCCESS, constants.SEARCH_FAIL],
        path: 'chaxun',
        method: 'post',
        query: {min,max}
    }
};
export function Shousuo(zhi){

    return {
        types: [constants.SEARCH_SHOU_REQUEST, constants.SEARCH_SHOU_SUCCESS, constants.SEARCH_SHOU_FAIL],
        path: 'Shousuo',
        method: 'post',
        query: {zhi}
    }
};



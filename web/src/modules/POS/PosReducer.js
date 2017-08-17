//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.REQUEST:
            reState.loading = true;
            break;
        case types.SUCCESS:
        	if(reState.data){
        		let aa = 0;
        		for(let i = 0, len = reState.data.length; i < len; i++){
        			if(reState.data[i].Code === action.body[0].Code){
        				reState.data[i].qty ++;
        				reState.data[i].total += action.body[0].Price;
        				aa ++;
        				break;
        			}
        		}
        		if(aa == 0){
        			action.body[0].qty = 1;
    				action.body[0].total = action.body[0].Price;
    				reState.data.push(action.body[0]);
        		}
        	}else{
        		reState.data = action.body;
        		reState.data[0].qty = 1;
        		reState.data[0].total = action.body[0].Price;
        	}  
        	let TotaPrice = 0,Qty = 0;
			for(let i = 0 ,len = reState.data.length; i < len; i++){
				Qty += reState.data[i].qty;
				TotaPrice += reState.data[i].Price * reState.data[i].qty;
			}
			reState.data[0].Qty = Qty;
			reState.data[0].TotaPrice = TotaPrice;
            reState.lastFetched = action.lastFetched;
            reState.loading = false;
            break;
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false;
            break;
    }
    return reState;
}


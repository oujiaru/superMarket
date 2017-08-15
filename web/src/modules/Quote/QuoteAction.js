import common from '../../libs/common/common';
import jquery from '../../libs/jquery/jquery-3.2.1';

export default function push(_batch,_Suppliers, _barcode,_poid, _shopname,_purchasingcost,_price,_number,_date){
    return {
        type: '',
        url: common.baseUrl + 'push',
        data: {_batch,_Suppliers, _barcode,_poid, _shopname,_purchasingcost,_price,_number,_date}
    }
}
// export default function remove(){
//     return {
//         type: '',
//         url: common.baseUrl + 'push',
//         data:
//     }
// }
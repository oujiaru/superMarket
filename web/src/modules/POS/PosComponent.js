import React, {Component} from 'react';
import {Table} from 'element-react' ;
import {connect} from 'react-redux';
import * as PosActions from './PosAction';

import './PosScss.scss';

class PosComponent extends Component{
	constructor(props) {
	 	super(props);
		this.state = {
		    columns: [
		      {
		        label: "条码",
		        prop: "Code",
		        width: 160
		      },
		      {
		        label: "品名",
		        prop: "Name"
		      },
		      {
		        label: "单价￥",
		        prop: "Price",
		        width: 100
		      }
		      ,
		      {
		        label: "特价￥",
		        prop: "address",
		        width: 100
		      }
		      ,
		      {
		        label: "折扣%",
		        prop: "address",
		        width: 100
		      },
		      {
		        label: "数量",
		        prop: "qty",
		        width: 100
		      },
		      {
		        label: "金额￥",
		        prop: "total",
		        width: 100
		      }
		    ]
		  }
	}	
	code(e){
		if(e.keyCode == 13){
			this.props.code(this.refs.code.value);
			e.target.value = '';
		}		
	}
	
	componentDidMount(){
		document.onkeyup = function(e){
			if(e.keyCode == 34){
				// let  TotaPrice = 0,Qty = 0;
				// for(var i = 0 ,len = this.props.data.length; i < len; i++){
				// 	Qty += this.props.data[i].qty;
				// 	TotaPrice += this.props.data[i].Price * this.props.data[i].qty;
				// }
				console.log(this.props.data)
			}
		}.bind(this)
	}
    render(){
        return (
        	<div id="pos">
	            <div className="head">
	            	<div><span>￥</span></div>
	            	<div className="ct"><span>收银员</span></div>
	            	<div className="gt">
	            		<span>-</span>
	            		<span>&times;</span>
	            	</div>
	            </div>
	            <div className="main">
	            	<div className="current">
	            	   <div className="lt"><span>商品编号/条码: </span></div>
	            	   <div className="ct"><input type="text"  ref="code" onKeyUp={this.code.bind(this)}/></div>
	            	   <div className="rt"><span>小票流水号:0000000000</span></div>
	            	</div>
	            	<Table
				      style={{width: '100%', height: '450px'}}
				      columns={this.state.columns}
				      data={this.props.data}
				      border={true}
				    />
	            	<div className="member">
						<span>会员 F8</span>
						<span>卡号:<input type="text"/></span>
						<span>姓名:<input type="text"/></span>
						<span>积分:<input type="text"/></span>	
						<span>类型:<input type="text"/></span>
						<span>折扣:<input type="text"/></span>
						<span>余额:<input type="text"/></span>
						<span className="empty"></span>
						<span>优惠卷:<input type="text"/></span>
	            	</div>
	            	<div className="received">
	            		<div className="price">
	            			<div className="lt">
	            				<span>数量: {this.props.data ? this.props.data[0].Qty : 0}</span>
	            			</div>
	            			<div className="rt">
	            				<p>应收: ￥{this.props.data ? this.props.data[0].TotaPrice : '0.00'}</p>
	            				<p>实收: 0.00<span>打折</span></p>
	            			</div>
	            		</div>
	            		<div className="clearing">
	            			<div className="lt">
								<p>交来: <input type="text"/></p>
		            			<p>卡付: <span></span></p>
		            			<p>其它: <span></span></p>
		            			<p>找零: <span></span></p>
	            			</div>
	            			<div className="rt"><span>结算</span></div>
	            		</div>
	            	</div>
	            </div>
	            <div className="footer">
	            	<div className="time">
	            		<span>08月14日 09:05</span>
	            	</div>
	            	<div className="cashier">
	            		<span>收银员:A</span>
	            	</div>
	            	<div className="footer-rt">
	            		<span>帮助F1</span>
	            		<span>设置</span>
	            		<span>查询</span>
	            		<span>统计</span>
	            		<span>退货</span>
	            		<span>钱箱</span>
	            		<span>交班</span>
	            		<span>打印上一单</span>
	            	</div>
	            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
    data: state.code.data
})

export default connect(mapStateToProps, PosActions)(PosComponent)
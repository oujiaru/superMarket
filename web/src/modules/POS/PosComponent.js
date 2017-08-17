import React, {Component} from 'react';
import {Table} from 'element-react' ;
import {connect} from 'react-redux';
import * as PosActions from './PosAction';
import $ from './jquery-3.2.1 (1)';
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
				var now1 = new Date();
				//获取当前代码距离1970-1-1的时间

				var year = now1.getFullYear();
				var month = now1.getMonth()+1;
				var day1 = now1.getDate();
				// var week = now1.getDay();
				var hours = now1.getHours();
				var minutes = now1.getMinutes();
				var seconds = now1.getSeconds();
				var res = year+'年'+month+'月'+day1+'日'+' '+ hours+':'+minutes+':'+seconds;
				console.log(res)
				let str = `\n         饶荣超市收银系统\n*************************************\n商品名称           单价 数量 总价\n*************************************\n`;
				let Data = this.props.data;
				console.log(Data);
				let Paid = $('.Paid-up').val();
				let price = Paid - Data[0].TotaPrice;
				for(var i = 0 ,len = Data.length; i < len; i++){
					str += `\n${Data[i].Name}\n${Data[i].Code} ${Data[i].Price}元 ${Data[i].qty}${Data[i].Unit}  ${Data[i].Price*Data[i].qty}元\n`;
				}
				str += `\n商品数量: ${Data[0].Qty}\n总金额：${Data[0].TotaPrice} \n实收: ${Paid}元 \n找零: ${price}元\n收银员 饶荣 \n${res} \n *************************************\n\n\n.`
				console.log(str);
				$.post('http://10.3.134.78:81/print', {text:str},function(res){
					console.log(res);
				})
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
								<p>交来: <input type="text" className="Paid-up"/></p>
		            			<p>卡付: <span></span></p>
		            			<p>其它: <span></span></p>
		            			<p>找零: <span className="price"></span></p>
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
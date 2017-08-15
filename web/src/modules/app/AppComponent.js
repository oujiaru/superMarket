import React, {Component} from 'react';
import {connect} from 'react-redux';
import elementui from 'element-react';
import appscss from './AppComponent.scss';
import * as AppAction from './AppAction';
import $ from '../../libs/jquery/jquery3.1.1';

import {Router, Route, Link, hashHistory, browserHistory} from 'react-router'; 

var dataSet = [{type:'商品管理',box:['商品录入','商品浏览','3']},{type:'采购订单',box:['1','2','3']},{type:'用户管理',box:['1','2','3']},{type:'前台收银',box:['1','2','3']}]


class AppComponent extends Component{
	constructor(props){
        super(props)
    }
	change(e){
		
		e.target.nextElementSibling.style.display='block';
		$(e.target).parent().siblings().find('.littleBox').hide();
	}
    render(){
    	console.log(this.props)
        return (
            <div className="box">
            	<div className="header clearfix"><h1>超市管理系统</h1></div>
            	<div className="leftBox">
            		{
            			dataSet.map((item,index)=>{
            				
            				return (
            					<div key={index} className="bigBox">
            					<p key={index} onClick={this.change}>{item.type}</p>
									<ul className="littleBox">
										{
											item.box.map(function(res,idx){
												
												return <li key={idx}><Link to="/login">{res}</Link></li>
											})
										}
									</ul>
            					</div>
            				);
            			})
            		}
            	</div>
            	<div className="rightBox">{this.props.children}</div>
            </div>
        )
    }

}
const mapStateToPorps = state =>({
	title:state.title
})


export default connect(mapStateToPorps,AppAction)(AppComponent)
import React, {Component} from 'react';
import elementui from 'element-react';
import appscss from './AppComponent.scss';
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router'; 

var dataSet = [{type:'商品管理',box:['1','2','3']},{type:'采购订单',box:['1','2','3']},{type:'用户管理',box:['1','2','3']},{type:'前台收银',box:['1','2','3']}]


class AppComponent extends Component{
    render(){
    	
        return (
            <div className="box">
            	<div className="header clearfix"><h1>超市管理系统</h1></div>
            	<div className="leftBox">
            		{
            			dataSet.map(function(item,index){
            				return <div key={index} className="bigBox">
            					<p key={index}>{item.type}</p>
								<ul className="littleBox">
									{
										item.box.map(function(res,idx){
											
											return <li key={idx}>{res}</li>
										})
									}
								</ul>
            				</div>
            			})
            		}
            	</div>
            	<div className="rightBox">{this.props.children}</div>
            </div>
        )
    }
}


export default AppComponent
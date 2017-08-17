import React, {Component} from 'react';
import {connect} from 'react-redux';
import elementui from 'element-react';
import appscss from './AppComponent.scss';
import * as AppAction from './AppAction';
import $ from '../../libs/jquery/jquery3.1.1';

import {Router, Route, Link, hashHistory, browserHistory} from 'react-router'; 

var dataSet = [
{type:'商品管理',
    box:[
    {name:'商品录入',path:'/management/entry'},
    {name:'商品浏览',path:'/management/search'},
    {name:'商品查询',path:'/'}
    ]
},
{type:'采购订单',
    box:[
    {name:'采购商品',path:'/Quote'},
    {name:'查询',path:'/PO'},
    {name:'入库',path:'/Qcompile'}
    ]
},
{type:'用户管理',
    box:[
    {name:'用户权限',path:'/'},
    {name:'1',path:'/'},
    {name:'2',path:'/'}
    ]
},
{type:'前台收银',
    box:[
    {name:'收银台',path:'/POS'},
    ]
}
]


class AppComponent extends Component{
	constructor(props){
        super(props)
    }
    componentDidUpdate(){
        console.log('挂载后',this.props.data)

    }
    componentDidUpdate(){
        console.log('更新后',this.props.data)
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
												
												return <li key={idx}><Link to={res.path}>{res.name}</Link></li>

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
	data:state.login.data
})


export default connect(mapStateToPorps,AppAction)(AppComponent)
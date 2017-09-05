
import './Search.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Table,Icon,Tag,Button,Input,Pagination,MessageBox} from 'element-react';
import './Search.scss';
import * as SearchActions from './SearchAction'
import $ from '../jquery-3.2.1'



var min=1;
var max=10;


class SearchComponent extends Component {
 constructor(props) {
  super(props);

this.loginHandler
  this.state = {
    columns: [
      {
        label: "",
   		prop:"indexid",
        width: 80,
        width: 60,
      fixed: 'left',
        align: 'center'
      },
      {
        label: "商品条码(*)",
        prop: "barcode",
        width: 160,
        align:"center",
      },
      {
        label: "商品名称(*)",
        prop: "productname",
        align:"center",
        width: 160
      },
      {
        label: "商品货号",
        prop: "supplierID",
        align:"center",
        width: 80
      },
      {
        label: "商品类别",
        prop: "category",
        align:"center",
        width: 80
      }
      ,
      {
        label: "单位",
        prop: "standard",
        align:"center",
        width: 80
      },
      {
        label: "零售价",
        prop: "retailprice",
        align:"center",
        width: 100
      },
      {
        label: "会员价",
        prop: "purchaseprice",
        align:"center",
        width: 100
      },
      {
        label: "规格",
        prop: "units",
        align:"center",
        width: 120
      },
      {
        label: "日期",
        prop: "time",
        align:"center",
        width: 250
      },
      {
        label: "编辑",
        align:"center",
        width: 150,
         fixed: 'right',
        render: ()=>{
          return (
                <span>
                     <Button plain={true} type="info" size="small">修改</Button>
                     <Button type="danger" size="small">删除</Button>
                </span>
                  )
            }
      }
    ]

  }
}

 Handler(){
        this.props.Search(min,max)
      
    }


//商品搜索
Shousuo(){
 
   this.props.Shousuo(this.refs.goodscode.refs.input.value)
}


onClick() {
  MessageBox.msgbox({
    title: '提示',
    message: '确定要删除吗',
    showCancelButton: true
  }).then(action => {
    // Message({
    //   type: 'info',
    //   message: '删除成功 ' + action
    // });
  })
}





componentDidMount(){

  this.props.num()
  this.props.Search(min,max)
  //删除商品提示
   var $del = $('.el-table__body')

    $del.on('click','.el-button--danger',function(){
     this.onClick()
      
    }.bind(this))
  //点击修改按钮
  $del.on('click','.el-button--info',function(){


    // console.log($('.el-button--info').parents('tr'))




    $('.change').show()
  })

  $('.sp1').on('click',function(){
    $('.change').hide()
  })
  
 
}



 

  



componentDidUpdate(){

 
  //分页点击事件委托
  var muu = document.getElementsByClassName("el-pagination el-pagination--small")[0]
 muu.onclick = function(e){
          e = e || window.event;
           var target = e.target || e.srcElement;
            if(target.nodeName.toLowerCase() == 'li'){
            
                min=target.innerText;
                 this.props.Search(min,max)
            }
         }.bind(this)


  

}





render() {

  return (
    <div className="search" id="search">
       <p>商品条形码/货号/名称</p>
        <div className="smore">
          <Input placeholder="请输入内容"  ref="goodscode"/>
           <Button type="primary"  onClick={this.Shousuo.bind(this)} >查询</Button>
           <Button type="primary"  onClick={this.Handler.bind(this)} >刷新</Button>
        </div>
        <Table
          style={{width: '100%'}}
          columns={this.state.columns}
          data={this.props.datashou?this.props.datashou:this.props.data}
          border={true}
          height={460}
        />
        <ul className="change">
            <li>商品条码：<input type="text" value="6911006000052"/></li>
            <li>商品名称：<input type="text" value="10kg国宝桥米" /></li>
            <li>商品货号：<input type="text" value="10kg屈家岭京山香米" /></li>
            <li>商品类别：<input type="text" value="1*10kg" /></li>
            <li>单位：<input type="text" value="袋(件)" /></li>
            <li>零售价：<input type="text" value="001" /></li>
            <li>会员价：<input type="text" value="72.1" /></li>
            <li>规格：<input type="text" value="78" /></li>
            <li>日期：<input type="text" value="2017-08-17 20:34:03" /></li>
            <li className="lastli"><span className="sp1">确认</span><span className="sp1">取消</span></li>
        </ul>
        <Pagination layout="prev, pager, next" total={3160} small={true}/>
        <Button type="text" onClick={this.onClick.bind(this)}>点击打开 Message Box</Button>
    </div>
  )
}
    
}



//state可以理解为store树里面有多有不同组件action的行为方法，是所有Reducer返回的数据集合，是不同组件通信媒介
const mapStateToProps = state => {
console.log('6667',state)
  return {
          data:state.Search.Search.data,
          date:state.Search.num.data,
          datashou:state.Search.Shousuo.data
        
    }

}
   
    
//这句起关键性作用连接action跟reducer间的联系
export default connect(mapStateToProps, SearchActions)(SearchComponent)


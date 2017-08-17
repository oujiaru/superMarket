
import './Search.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Table,Icon,Tag,Button,Input,Pagination} from 'element-react';
import './Search.scss';
import * as SearchActions from './SearchAction'



var min=1;
var max=10;
window.onload=function(){
   var butt = document.getElementById("butt")
      butt.click()
   var muu = document.getElementsByClassName("el-pagination el-pagination--small")[0]

      muu.onclick = function(e){
  
          e = e || window.event;
          var target = e.target || e.srcElement;
          if(target.nodeName.toLowerCase() == 'li'){
              min=target.innerText;

               butt.click()
          }
        }

}

class SearchComponent extends Component {
 constructor(props) {
  super(props);

this.loginHandler
  this.state = {
    columns: [
      {
        label: "",
   		prop:"id",
        width: 60,
      fixed: 'left',
        align: 'center'
      },
      {
        label: "商品条码(*)",
        prop: "goodscode",
        width: 160,
        align: 'left'
      },
      {
        label: "商品名称(*)",
        prop: "goodsname",
        width: 160
      },
      {
        label: "商品货号",
        prop: "goodsnumber",
        width: 80
      },
      {
        label: "商品类别",
        prop: "goodsstyle",
        width: 80
      }
      ,
      {
        label: "单位",
        prop: "goodsnuit",
        width: 80
      },
      {
        label: "零售价",
        prop: "goodsprice",
        width: 100
      },
      {
        label: "会员价",
        prop: "menberprice",
        width: 100
      },
      {
        label: "规格",
        prop: "goodsmodel",
        width: 120
      },{
        label:"日期",
        prop:"time",
        width:250

      },
      {
        label: "编辑",
        
        width: 120,
         fixed: 'right',
        render: ()=>{
          return <span><Button type="text" size="small">删除</Button></span>
        }
      }
    ]

  }
}

 loginHandler(){
          
         
        this.props.Search(min,max)
       // location.reload()
    }
SearchShousuo(){

   this.props.Shousuo(this.refs.goodscode.refs.input.value)
}
shuaxin(){
  location.reload();
}



render() {
  


  return (
    <div className="search" id="search">
     

     <p>商品条形码/货号/名称</p>
      <div className="smore">
        <Input placeholder="请输入内容"  ref="goodscode"/>
        <button  onClick={this.loginHandler.bind(this)}  id="butt"></button>
       
         <Button type="primary"  onClick={this.SearchShousuo.bind(this)} >查询</Button>
      <Button type="primary"  onClick={this.shuaxin.bind(this)} >刷新</Button>
      </div>
      <Table
        style={{width: '100%'}}
        columns={this.state.columns}
        data={this.props.data}
        border={true}
        height={460}
      />
      <Pagination layout="prev, pager, next" total={100} small={true}/>
    </div>
  )


}

    	
    
}
//state可以理解为store树里面有多有不同组件action的行为方法，是所有Reducer返回的数据集合，是不同组件通信媒介

const mapStateToProps = state => {

console.log(state)
  return {
          data:state.Search.Search.data,//定义props.data
    }

}
   
    


//这句起关键性作用连接action跟reducer间的联系
export default connect(mapStateToProps, SearchActions)(SearchComponent)




// export default SearchComponent;

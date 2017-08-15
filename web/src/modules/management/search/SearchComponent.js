
import './Search.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Table,Icon,Tag,Button,Input} from 'element-react';
import './Search.scss';




class SearchComponent extends Component {
 constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "",
   		prop:"date",
        width: 40,
    
        align: 'center'
      },
      {
        label: "条码",
        prop: "name",
        width: 160,
        align: 'left'
      },
      {
        label: "货号",
        prop: "province",
        width: 160
      },
      {
        label: "名称",
        prop: "address",
        width: 400
      },
      {
        label: "规格",
        prop: "zip",
        width: 120
      }
      ,
      {
        label: "类别",
        prop: "zip",
        width: 120
      },
      {
        label: "会员价",
        prop: "zip",
        width: 120
      },
      {
        label: "零售价",
        prop: "zip",
        width: 120
      },
      {
        label: "进价",
        prop: "zip",
        width: 120
      }
    ],
    data: [{
      date: '1',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '3',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '4',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '5',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '6',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '7',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }]
  }
}

render() {
  return (
    <div className="search">
     <p>商品条形码/货号/名称</p>
      <div className="smore">
        <Input placeholder="请输入内容" />
         <Button type="primary">主要按钮</Button>
      </div>
      <Table
        style={{width: '100%'}}
        columns={this.state.columns}
        data={this.state.data}
        border={true}
        height={550}
      />
    </div>
  )
}

    	
    
}

export default SearchComponent;

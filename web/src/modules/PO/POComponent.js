import React, {Component} from 'react';
import POActions from './POAction';
import {Form} from 'element-react';
import { Button } from 'element-react';
import { Select } from 'element-react';
import { Input } from 'element-react';
import { Table} from 'element-react';
import { Link } from 'react-router';
import {connect} from 'react-redux'
import $ from '../../libs/jquery/jquery-3.2.1.js'
import './PO.scss';


class POComponent extends Component{
    constructor(props) {
  super(props);

  this.state = {
    form: {
      user1: '',
      region: '',
        user: ''
    },
     columns: [
     {
        type: 'index'
      },
      {
        label: "进货批次",
        prop: "px",
      },
      {
        label: "供货商",
        prop: "name",

      },
      {
        label: "商品条型码",
        prop: "",

      },
      {
        label: "规格",
        prop: "province",

      },
      {
        label: "进价",
        prop: "zip",

      },
      {
        label: "零售价",
        prop: "",

      },
      {
        label: "数量",
        prop: "",
 
      },
      {
        label: "入库日期",
        prop: "date",

      },
      
    ],
        data: [{
      px:'#001',    
      date: '2016-05-02',
      name: '王虎',
      province: '广州',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 2033
    },{
      px:'#002',
      date: '2016-05-02',
      name: '小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 2003
    },{
      px:'#003',
      date: '2016-05-02',
      name: '小王',
      province: '北京',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 2333
    },{
      px:'#004',
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 20033
    },{
      px:'#005',
      date: '2016-05-02',
      name: '王小龙',
      province: '天津',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 333
    },{
      px:'#006',
      date: '2016-05-02',
      name: '王小明',
      province: '海南',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 270333
    },{
      px:'#007',
      date: '2016-05-02',
      name: '李小朗',
      province: '香港',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      px:'#008',
      date: '2016-05-02',
      name: '李狼',
      province: '西藏',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }]
   
  };
}

onSubmit(e) {
  e.preventDefault();

  console.log('submit!');
}

onChange(key, value) {
  this.setState({
    form: Object.assign(this.state.form, { [key]: value })
  });
}


render() {
  return (
  <div id="POx">
    <div className="top">

    <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
      <Form.Item>
        <Input id="spc" value={this.state.form.user1} placeholder="批次" onChange={this.onChange.bind(this, 'user1')}></Input>
      </Form.Item>
    <Form.Item>
        <Button nativeType="submit" type="primary" id="pc">批次查询</Button>
      </Form.Item>
      <Form.Item>
        <Select value={this.state.form.region} placeholder="查询供货商">
          <Select.Option label="区域一" value="shanghai"></Select.Option>
          <Select.Option label="区域二" value="beijing"></Select.Option>
        </Select>
      </Form.Item>
    <Form.Item>
        <Input value={this.state.form.user} placeholder="条码" onChange={this.onChange.bind(this, 'user')}></Input>
      </Form.Item>
      <Form.Item>
        <Button nativeType="submit" type="primary">条码查询</Button>
      </Form.Item>
      <Form.Item>
        <Button nativeType="submit" type="primary"><Link to="/Qcompile">编辑 </Link></Button>
      </Form.Item>
     
    </Form>

    </div>


  <div className="main" id="ma1">


   <Table className="main2" id="ma2"
        style={{width: '100%', marginTop: 20}}
        height={450}
        showSummary={true}
        columns={this.state.columns}
        data={this.state.data}
        sumText='总价'
        
        border={true}
      />
   </div>
</div> 
  )
}
}
const mapStateToProps = state => {

console.log(state)
  return {
          data:state.Search.Search.data,//定义props.data
    }

}
   
    
//这句起关键性作用连接action跟reducer间的联系
export default connect(mapStateToProps, POActions)(POComponent)


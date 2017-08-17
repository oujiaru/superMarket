import React, {Component} from 'react';
import POAction from './POAction';
import {Form} from 'element-react';
import { Button } from 'element-react';
import { Select } from 'element-react';
import { Input } from 'element-react';
import { Table} from 'element-react';
import { Link } from 'react-router';
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
        prop: "",
      },
      {
        label: "供货商",
        prop: "",

      },
      {
        label: "商品条型码",
        prop: "",

      },
      {
        label: "规格",
        prop: "",

      },
      {
        label: "进价",
        prop: "",

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
        prop: "",

      },
      data: [{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }]
      
    ]
   
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
 loginHandler(){
        this.props.login(this.refs.goodscode.value)
        // this.props.login(this.refs.goodscode.value)
       // location.reload()
    }

render() {
  return (
  <div id="PO">
    <div className="top1">

    <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
      <Form.Item>
        <Input value={this.state.form.user1} placeholder="批次"  onChange={this.onChange.bind(this, 'user1')}></Input>
        <Button nativeType="submit" type="primary"  onClick={this.loginHandler.bind(this)}>批次查询</Button>
      </Form.Item>

      <Form.Item>
        <Select value={this.state.form.region} placeholder="查询供货商">
          <Select.Option label="区域一" value="shanghai"></Select.Option>
          <Select.Option label="区域二" value="beijing"></Select.Option>
        </Select>
      </Form.Item>
    <Form.Item>
        <Input value={this.state.form.user} placeholder="条码" ref="goodscode" onChange={this.onChange.bind(this, 'user')}></Input>
        <Button nativeType="submit" type="primary" onClick={this.loginHandler.bind(this)}>单品查询</Button>
      </Form.Item> 
      <Form.Item>
        <Button nativeType="submit" type="primary"><Link to="/Qcompile">编辑 </Link></Button>
      </Form.Item>
     
    </Form>

    </div>



 <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
      maxHeight={400}
    />
 
</div> 

  )
}
}
const mapStateToProps = state => ({
    loading: state.login.loading,
})

export default POComponent;

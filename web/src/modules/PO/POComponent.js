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
  <div>
    <div className="top">

    <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
      <Form.Item>
        <Input value={this.state.form.user1} placeholder="批次" onChange={this.onChange.bind(this, 'user1')}></Input>
      </Form.Item>
    <Form.Item>
        <Button nativeType="submit" type="primary">批次查询</Button>
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
        <Button nativeType="submit" type="primary">单品查询</Button>
      </Form.Item>
      <Form.Item>
        <Button nativeType="submit" type="primary"><Link to="/Qcompile">编辑 </Link></Button>
      </Form.Item>
     
    </Form>

    </div>


  <div className="main">


   <Table className="main2"
        style={{width: '100%', marginTop: 20}}
        height={450}
        showSummary={true}
        columns={this.state.columns}
        data={this.state.data}
        sumText='总价'
        getSummaries={(columns, data)=>{
          const dataList = [];
          for(var i=0; i < columns.length; i++){
            let total = 0;
            for(let j=0; j < data.length; j++){
              let value = data[j][columns[i]['property']];
            
              if(isNaN(value)){
                total = 'N/A'
                break;
              }else{
                total += parseFloat(value);
              }
            }
            dataList[i] = isNaN(total) ? total : total +'元';
          }
          return dataList;
        }}
        border={true}
      />
   </div>
</div> 
  )
}
}

export default POComponent;
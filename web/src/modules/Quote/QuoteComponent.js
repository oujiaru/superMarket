import React, {Component} from 'react';
import * as QuoteActions from './QuoteAction';
import {Form} from 'element-react';
import { Button } from 'element-react';
import { Select } from 'element-react';
import { Input } from 'element-react';
import { Table} from 'element-react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import './Quote.scss';

class QuoteComponent extends Component{
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
        label: "申请时间",
        prop: "posubmissiontime",
        width: 120
      },
      {
        label: "供货商",
        prop: "posupplier",
        width: 120
      },
      {
        label: "商品条型码",
        prop: "goodscode",
        width: 120
      },
      {
        label: "规格",
        prop: "goodsmodel",
        width: 120
      },
      {
        label: "进价",
        prop: "poprice",
        width: 120
      },
      {
        label: "状态",
        prop: "postate",
        width: 120
      },
      {
        label: "数量",
        prop: "pocount",
        width: 120
      },
      {
        label: "确认时间",
        prop: "poacknowledgingtime",
        width: 120
      },
            {
        label: "采购员",
        prop: "pobuyer",
        width: 120
      },
      {
        label: "操作",
        prop: "zip",
        fixed: 'right',
        width: 100,
        render: ()=>{
          return <span><Button type="text" size="small">移除</Button><Button type="text" size="small">编辑</Button></span>
        }
      }
      
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
SearchHandler(){
        this.props.Search(this.refs.goodscode.value)
       // location.reload()
    }


render() {
  return (
   <div className="bigQuote">
    <div className="top">

    <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
      <Form.Item>
        <Input value={this.state.form.user1} placeholder="申请时间" onChange={this.onChange.bind(this, 'user1')}></Input>
        <Button nativeType="submit" type="primary">搜索</Button>
      </Form.Item>
       <Form.Item>
        <Input value={this.state.form.user2} placeholder="确认时间" onChange={this.onChange.bind(this, 'user1')}></Input>
        <Button nativeType="submit" type="primary">搜索</Button>
      </Form.Item>
       <Form.Item>
        <Input value={this.state.form.user1} placeholder="审批状态" onChange={this.onChange.bind(this, 'user1')}></Input>
        <Button nativeType="submit" type="primary">搜索</Button>
      </Form.Item>
      <Form.Item>
        <Input value={this.state.form.user1} placeholder="采购员" onChange={this.onChange.bind(this, 'user1')}></Input>
       <Button nativeType="submit" type="primary">搜索</Button>
      </Form.Item>
      <Form.Item>
        <Select value={this.state.form.region} placeholder="查询供货商">
          <Select.Option label="区域一" value="shanghai"></Select.Option>
          <Select.Option label="区域二" value="beijing"></Select.Option>
        </Select>
      </Form.Item>
    <Form.Item>
        <Input value={this.state.form.user} placeholder="条码" onChange={this.onChange.bind(this, 'user')}></Input>
        <Button nativeType="submit" type="primary">单品查询</Button>
      </Form.Item>

      <Form.Item>
       <Button nativeType="submit" type="primary"><Link to="/Qcompile">新建</Link></Button>
      </Form.Item>

    </Form>
 
    </div>

  <div className="main">

    <Table
        style={{width: '100%' ,height: '100%'}}
        showSummary={true}
        columns={this.state.columns}
        data={this.props.data}
        border={true}
        height={460}
      />
   </div>
</div> 
  )
}
}

const mapStateToProps = state => {
 // console.log(state)
 //  console.log(666)

  return {
          data:state.Search
    }

}
export default connect(mapStateToProps, QuoteActions)(QuoteComponent)


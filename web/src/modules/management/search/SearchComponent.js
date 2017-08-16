
import './Search.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Table,Icon,Tag,Button,Input} from 'element-react';
import './Search.scss';
import * as SearchActions from './SearchAction'







class SearchComponent extends Component {
 constructor(props) {
  super(props);

 
  this.state = {
    columns: [
      {
        label: "",
   		prop:"id",
        width: 60,
    
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
        width: 120
      },
      {
        label: "商品类别",
        prop: "goodsstyle",
        width: 120
      }
      ,
      {
        label: "单位",
        prop: "goodsnuit",
        width: 120
      },
      {
        label: "零售价",
        prop: "goodsprice",
        width: 120
      },
      {
        label: "会员价",
        prop: "menberprice",
        width: 120
      },
      {
        label: "规格",
        prop: "goodsmodel",
        width: 120
      },
      {
        label: "日期",
        prop: "time",
        width: 120
      }
    ],
    data: [{
      id: '1',
      goodscode: '6936928590207',
      goodsname: '5kg屈家岭京山香米',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'6.8',
      menberprice:'5',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:41:07',

    },{
      id: '2',
      goodscode: '6956416200396',
      goodsname: '10kg屈家岭京山香米',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'53',
      menberprice:'50.47',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:41:08',

    }, {
      id: '3',
      goodscode: '6956417800390',
      goodsname: '2.5kg苍台傲雪精制小麦粉',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'73',
      menberprice:'80.47',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:42:50',

    }, {
      id: '4',
      goodscode: '6956416208990',
      goodsname: '2.5kg大中厚家庭用小麦',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'66',
      menberprice:'65',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:43:42',

    }, {
      id: '5',
      goodscode: '6956416266390',
      goodsname: '25kg东北大米  ',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'87',
      menberprice:'99',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:45:16',

    }, {
      id: '6',
      goodscode: '6956416578390',
      goodsname: '25kg泰昌晚优金丝米（新版）',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'85',
      menberprice:'97',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:50:35',

    }, {
      id: '7',
      goodscode: '6956416789090',
      goodsname: '25kg晚杂诚信大米1',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'54',
      menberprice:'60',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:50:59',

    }, {
      id: '8',
      goodscode: '6956416654390',
      goodsname: '5kg屈家岭京山香米',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'65',
      menberprice:'67',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:50:35',

    }, {
      id: '9',
      goodscode: '6956416256740',
      goodsname: '10kg屈家岭京山晚优',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'70',
      menberprice:'71',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:50:35',

    }, {
      id: '10',
      goodscode: '6956416435690',
      goodsname: '10kg东北米（珍宝岛）',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'88',
      menberprice:'99',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:50:35',

    }, {
      id: '11',
      goodscode: '6956416890090',
      goodsname: '25kg新包装东北米（珍珠米）',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'90',
      menberprice:'98',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:50:35',

    }, {
      id: '12',
      goodscode: '6956416000090',
      goodsname: '25kg东北米（珍珠米）',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'89',
      menberprice:'90',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:50:35',

    }, {
      id: '13',
      goodscode: '6956416988890',
      goodsname: '25kg晚杂诚信大米',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'81',
      menberprice:'89.9',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:50:35',

    }, {
      id: '14',
      goodscode: '6956416289550',
      goodsname: '1.8L金龙鱼二代调和油',
      goodsnumber: '001',
      goodsstyle: '米类',
      goodsnuit: '包(件)',
      goodsprice:'53',
      menberprice:'50.47',
      goodsmodel:'1*10袋',
      time:'2017-08-15 16:50:35',

    }]
  }
}

 loginHandler(){
        this.props.login(this.refs.goodscode.value)
       // location.reload()
    }


render() {
  return (
    <div className="search">
     <p>商品条形码/货号/名称</p>
      <div className="smore">
        <Input placeholder="请输入内容"  ref="goodscode"/>
         <Button type="primary"   onClick={this.loginHandler.bind(this)} >查询</Button>
      </div>
      <Table
        style={{width: '100%'}}
        columns={this.state.columns}
        data={this.state.data}
        border={true}
        height={460}
      />
    </div>
  )
}

    	
    
}

const mapStateToProps = state => ({
    loading: state.login.loading,
})
export default connect(mapStateToProps, SearchActions)(SearchComponent)

// export default SearchComponent;

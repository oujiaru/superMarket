
import './Qcompile.scss';

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input } from 'element-react';
import { MessageBox} from 'element-react';
import * as QcompileActions from './QcompileAction'
import $ from '../../libs/jquery/jquery-3.2.1.js'


class QcompileComponent extends Component {

     constructor(props){
        super(props)

    } 
    onClick() {
        MessageBox.msgbox({
        title: '提示',
        message: '采购信息保存成功',
        showCancelButton: true
        }).then(action => {
        Message({
          type: 'info',
          message: 'action: ' + action
        });
        })
    }

    loginHandler(){
        this.props.login(
            this.refs.goodscode.value,
            this.refs.goodsname.value,
            this.refs.goodsnumber.value,
            this.refs.goodsstyle.value,
            this.refs.goodsnuit.value,
            this.refs.poprice.value,
            this.refs.pocount.value,
            this.refs.goodsmodel.value,
            this.refs.posupplier.value,
            this.refs.posubmissiontime.value,
            this.refs.poacknowledgingtime.value,
            this.refs.postate.value,
            this.refs.pobuyer.value,
        )
        // console.log(this.props)
    }
    render(){
        return(
            <div className="entry">
                <ul>
                    <li className="spli">采购信息</li>
                    <li className="nof2"><span>商品条码(*):</span><input placeholder="请输入内容" ref="goodscode"/></li>
                    <li className="nof2">商品名称(*):<input placeholder="请输入内容" ref="goodsname"/></li>
                    <li className="nof2">商品货号:<input placeholder="请输入内容" ref="goodsnumber"/></li>
                    <li className="nof2">商品类别:<input placeholder="请输入内容" ref="goodsstyle"/></li>
                    <li className="nof2">单位:<input placeholder="请输入内容" ref="goodsnuit"/></li>
                    <li className="nof2">进货价:<input placeholder="请输入内容" ref="poprice"/></li>
                    <li className="nof2">规格:<input placeholder="请输入内容"  ref="goodsmodel"/></li>
                    <li className="nof2">数量:<input placeholder="请输入内容"  ref="pocount"/></li>
                    
                </ul>
                <ul>
                    <li className="spli"></li>
                    <li className="nof2">供货商:<input placeholder="请输入内容"  ref="posupplier"/></li>
                    <li className="nof2">采购申请时间:<input placeholder="请输入内容"  ref="posubmissiontime"/></li>
                    <li className="nof2">采购单确认时间:<input placeholder="请输入内容"  ref="poacknowledgingtime"/></li>
                    <li className="nof2">采购单状态:<input placeholder="请输入内容"  ref="postate"/></li>
                    <li className="nof2">采购员:<input placeholder="请输入内容"  ref="pobuyer"/></li>
                </ul>
                 
                 <button onClick={this.loginHandler.bind(this)}><button type="text" id = "ying"  onClick={this.onClick.bind(this)}>保存</button></button>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
     console.log(123,state.login.loading)
    return {
    loading: state.login.loading,
}}
export default connect(mapStateToProps, QcompileActions)(QcompileComponent)
// export default LoginComponent


// export default QcompileComponent;
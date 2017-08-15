
import './Qcompile.scss';

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input } from 'element-react';
// import * as QcompileAction from './QcompileAction'



class QcompileComponent extends Component {

     constructor(props){
        super(props)
    }

    loginHandler(){
       
        
        this.props.login(
            this.refs.goodscode.value,
            this.refs.goodsname.value,
            this.refs.goodsnumber.value,
            this.refs.goodsstyle.value,
            this.refs.goodsnuit.value,
            this.refs.goodsprice.value,
            this.refs.menberprice.value,
            this.refs.goodsmodel.value,
        )
        console.log(this.props)
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
                    <li className="nof2">进货价:<input placeholder="请输入内容" ref="goodsprice"/></li>
                    <li className="nof2">规格:<input placeholder="请输入内容"  ref=""/></li>
                    <li className="nof2">数量:<input placeholder="请输入内容"  ref=""/></li>
                    <li className="nof2">供货商:<input placeholder="请输入内容"  ref=""/></li>
                    <li className="nof2">采购申请时间:<input placeholder="请输入内容"  ref=""/></li>
                    <li className="nof2">采购单确认时间:<input placeholder="请输入内容"  ref=""/></li>
                    <li className="nof2">采购单状态:<input placeholder="请输入内容"  ref=""/></li>
                    <li className="nof2">采购员:<input placeholder="请输入内容"  ref=""/></li>
                </ul>

                 <button onClick={this.loginHandler.bind(this)}>保存</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.login.loading,
})
// export default connect(mapStateToProps, QcompileActions)(QcompileComponent)
// export default LoginComponent


export default QcompileComponent;
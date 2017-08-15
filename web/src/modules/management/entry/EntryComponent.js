
import './Entry.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input } from 'element-react';
import * as EntryActions from './EntryAction'



class EntryComponent extends Component {

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
                    <li className="spli">商品信息</li>
                    <li className="nof2"><span>商品条码(*):</span><input placeholder="请输入内容" ref="goodscode"/></li>
                    <li className="nof2">商品名称(*):<input placeholder="请输入内容" ref="goodsname"/></li>
                    <li className="nof2">商品货号:<input placeholder="请输入内容" ref="goodsnumber"/></li>
                    <li className="nof2">商品类别:<input placeholder="请输入内容" ref="goodsstyle"/></li>
                    <li className="nof2">单位:<input placeholder="请输入内容" ref="goodsnuit"/></li>
                    <li className="nof2">零售价:<input placeholder="请输入内容" ref="goodsprice"/></li>
                    <li className="nof2">会员价:<input placeholder="请输入内容"  ref="menberprice"/></li>
                    <li className="nof2">规格:<input placeholder="请输入内容"  ref="goodsmodel"/></li>
                   
                    <li className="nofl">允许打折：<input type="checkbox" />是 <input type="checkbox" />否</li>
                    <li className="nofl">是否积分：<input type="checkbox" />是 <input type="checkbox" />否</li>
                </ul>
                  <ul>
                    <li className="spli">进货信息</li>
                    <li className="nof2">供货商:<input placeholder="请输入内容" /></li>
                    <li className="nof2">进货批次:<input placeholder="请输入内容" /></li>
                    <li className="nof2">商品进价:<input placeholder="请输入内容" /></li>
                    <li className="nof2">数量(*):<input placeholder="请输入内容" /></li>
                   
                </ul>
                 <button onClick={this.loginHandler.bind(this)}>出库</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.login.loading,
})
export default connect(mapStateToProps, EntryActions)(EntryComponent)
// export default LoginComponent


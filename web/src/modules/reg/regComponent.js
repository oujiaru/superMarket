import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as regActions from './regAction';
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Input,Button} from 'element-react';
import regSCSS from './reg.scss';

// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )

class regComponent extends React.Component {
    constructor(props){
        super(props)
    }

    regHandler(){
        // console.log(loginActions)
        // this.router.push('register')
        // if(!this.refs.username){
        //     //show up dialog => username cannot empty
        //     return
        // } else if(!this.refs.password){
        //     //show up dialog => password cannot empty
        //     return 
        // }
        
        this.props.reg(this.refs.username.value, this.refs.password.value)
        console.log(this.props)
    }

    render(){
        return(
            <div className="reg">
                <ul>
                    <li><h3>Register</h3></li>
                    <li><span>用户名 :</span><input  ref="username"/></li>
                    <li><span>密码 :</span><input type="password"  ref="password"/></li>
                    <li><Button type="primary" onClick={this.regHandler.bind(this)}>注册</Button></li>
                    <li>{this.props.loading + ''}</li>
                </ul>
                 <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.reg.data
})
export default connect(mapStateToProps, regActions)(regComponent)

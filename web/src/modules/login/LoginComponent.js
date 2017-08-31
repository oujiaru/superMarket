import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as loginActions from './LoginAction';
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Input,Button,Alert} from 'element-react';
import loginSCSS from './Login.scss';
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router'; 
import $ from '../../libs/jquery/jquery3.1.1';
// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )
class LoginComponent extends React.Component {
    constructor(props){
        super(props)
    }

    loginHandler(){
        console.log(66666)
        this.props.login(this.refs.username.value, this.refs.password.value)
       
        
    }
    Changepsw(){
        
        if(this.refs.username.value!=''||this.refs.password.value!=''){
            $('.btn button').removeAttr('disabled').addClass('btnColor');

        }
             
        
    }
    componentDidUpdate(){
        setTimeout(function(){
            console.log('更新后',this.props)
            if(this.props.data.status===true){
                
                location.href="http://localhost:1703/index.html#/";
            }else{
                console.log(this.refs.username.value)
                this.refs.username.value='';
                this.refs.password.value='';
                $('.el-alert').show();
                setTimeout(function(){
                    $('.el-alert').hide();

                },2000)
                $('.btn button').removeClass('btnColor').attr({disabled:'disabled'});
            }
        }.bind(this),500)
        
    }
    render(){
        console.log(this)
        return(
            <div className="login">
                <ul>
                    <li className="header"><h3>Login</h3></li>
                    <li className="username"><span>用户名 :</span><input ref="username"/></li>
                    <li className="psw"><span>密码 :</span><input type="password"  ref="password" onChange={this.Changepsw.bind(this)}/></li>
                    <li className="btn">
                        <button  onClick={this.loginHandler.bind(this)}>登录</button>
                        <span className="reg"><Link to="/reg">还没有帐号？注册一个</Link></span>
                    </li>
                    <li className="loading">{this.props.loading + ''}</li>
                </ul>
                 <Alert title="用户名或者密码错误" type="error" showIcon={true} />
                 <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({

    loading: state.login.loading,
    data:state.login.data
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
// export default LoginComponent
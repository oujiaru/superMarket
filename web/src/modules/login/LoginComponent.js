import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as loginActions from './LoginAction';
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Input,Button} from 'element-react';
import loginSCSS from './Login.scss';
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
        // console.log(loginActions)
        // this.router.push('register')
        // if(!this.refs.username){
        //     //show up dialog => username cannot empty
        //     return
        // } else if(!this.refs.password){
        //     //show up dialog => password cannot empty
        //     return 
        // }
        
        this.props.login(this.refs.username.value, this.refs.password.value)
        console.log(this.props)
    }

    render(){
        console.log(this)
        return(
            <div className="login">
                <ul>
                    <li>用户名:<Input  ref="username"/></li>
                    <li>密码:<Input type="password"  ref="password"/></li>
                    <li><Button type="primary" onClick={this.loginHandler.bind(this)}>登录</Button></li>
                    <li>{this.props.loading + ''}</li>
                </ul>
                 <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
// export default LoginComponent
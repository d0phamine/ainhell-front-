import LoginForm from './LoginForm';
import React from 'react';
import {connect} from 'react-redux';

import {setUsernameText, setPasswordText, setToken, setAuth} from '../../store/login/actions';

class LoginFormContainer extends React.Component {
    render () {
        return (
        <LoginForm 
            username={this.props.username} 
            password={this.props.password} 
            token={this.props.token}
            auth={this.props.auth}
            setUsernameText={this.props.setUsernameText} 
            setPasswordText={this.props.setPasswordText}
            setToken={this.props.setToken}
            setAuth={this.props.setAuth}
        />
        ) 
    }
}

const mapStateToProps = state =>{
    return {
        username: state.login.username,
        password: state.login.password,
        token: state.login.token,
        auth: state.login.auth
    };
}

const mapDispatchToProps = {
    setUsernameText,
    setPasswordText,
    setAuth,
    setToken
}

export default connect (mapStateToProps,mapDispatchToProps)(LoginFormContainer);
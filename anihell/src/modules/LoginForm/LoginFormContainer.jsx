import LoginForm from './LoginForm';
import React from 'react';
import {connect} from 'react-redux';

import {setUsernameText, setPasswordText} from '../../store/login/actions';

class LoginFormContainer extends React.Component {
    render () {
        return (
        <LoginForm 
            username={this.props.username} 
            password={this.props.password} 
            setUsernameText={this.props.setUsernameText} 
            setPasswordText={this.props.setPasswordText}/>
        ) 
    }
}

const mapStateToProps = state =>{
    return {
        username: state.login.username,
        password: state.login.password
    };
}

const mapDispatchToProps = {
    setUsernameText,
    setPasswordText
}

export default connect (mapStateToProps,mapDispatchToProps)(LoginFormContainer);
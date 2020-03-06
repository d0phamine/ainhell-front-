import React from "react";
import Header from "./Header";
import {connect} from 'react-redux';

import {setUsernameText, setPasswordText, setToken, setAuth} from '../../store/login/actions';

class HeaderContainer extends React.Component {
    render(){
        return(
            <Header 
                auth={this.props.auth}
                username={this.props.username}
                token={this.props.token}
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

export default connect (mapStateToProps,mapDispatchToProps)(HeaderContainer);
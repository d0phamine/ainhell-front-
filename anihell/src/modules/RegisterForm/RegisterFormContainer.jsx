import React from 'react';
import RegisterForm from "./RegisterForm";
import {connect} from 'react-redux';
import { setUsernameText, setPasswordText, setRepeatPasswordText , setNameText} from '../../store/register/actions';

class RegisterFormContainer extends React.Component {
  render(){
    return(
      <RegisterForm
        username={this.props.username}
        setUsernameText={this.props.setUsernameText}
        password={this.props.password}
        setPasswordText={this.props.setPasswordText}
        repeatPassword={this.repeatPassword}
        setRepeatPasswordText={this.props.setRepeatPasswordText}
        name={this.name}
        setNameText={this.props.setNameText}
      />
    )
  }
}

const mapStateToProps = state => {
  return{
    username: state.register.username,
    password: state.register.password,
    repeatPassword: state.register.repeatPassword,
    name: state.register.name
  };
};

const mapDispatchToProps = {
  setUsernameText,
  setPasswordText,
  setRepeatPasswordText,
  setNameText
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);

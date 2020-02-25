import React from 'react';
import RegisterForm from "./RegisterForm";
import {connect} from 'react-redux';
import { setUsernameText, setPasswordText, setRepeatPasswordText , setNameText} from '../../store/register/actions';

class RegisterFormContainer extends React.Component {
  render(){
    return(
      <RegisterForm
        username={this.props.username}
        password={this.props.password}
        repeatPassword={this.repeatPassword}
        name={this.name}
        setUsernameText={this.props.setUsernameText}
        setPasswordText={this.props.setPasswordText}
        setRepeatPasswordText={this.props.setRepeatPasswordText}
        setNameText={this.props.setNameText}
      />
    );
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

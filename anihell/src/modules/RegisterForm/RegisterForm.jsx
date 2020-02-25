import React from 'react';
import { Form, Icon, Input } from 'antd';
import {Link} from 'react-router-dom';
import hydra  from 'assets/hydra.svg';

import {Button, Block} from "components";

const success = false;

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
    }

    onUsernameChange(event) {
        this.props.setUsernameText(event.target.value)
    }

    onPasswordChange(event){
        this.props.setPasswordText(event.target.value)
    }
    onNameChange(event){
        this.props.setNameText(event.target.value)
    }
    onRepeatPasswordChange(event){
        this.props.setRepeatPasswordText(event.target.value)
    }
    render() {
        return(
            <div>
                <div className="auth__top">
                    <img src={hydra}></img>
                    <h2>Регистрация</h2>
                    <p>Для входа в Anihell вам нужно зарегистрироваться</p>
                </div>
                <Block>
                
                <Form  className="login-form">
                    <Form.Item>
                        <Input
                        id="email"
                        prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="username" 
                        size="large" 
                        onChange={this.onUsernameChange}
                        value={this.props.username}
                        />
                    
                    </Form.Item>
                    <Form.Item>
                    
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Ваше имя"
                        size="large"
                        onChange={this.onNameChange}
                        value={this.props.name}
                        />
                    
                    </Form.Item>
                    <Form.Item>
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Пароль"
                        id="password"
                        size="large" 
                        onChange={this.onPasswordChange}
                        value={this.props.password}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Повторите Пароль"
                        size="large"
                        onChange={this.onRepeatPasswordChange}
                        value={this.props.repeatPassword}
                        type="password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button  type="primary" size="large">
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="login">Войти в аккаунт </Link>
                </Form> : 
                </Block>
            </div>
        )};
    }
    

export default RegisterForm;
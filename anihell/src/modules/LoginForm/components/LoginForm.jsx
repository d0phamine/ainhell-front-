import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import {PostData} from './PostData'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Redirect} from "react-router-dom"


import hydra  from 'assets/hydra.svg';
import {Button, Block} from "components";


class LoginForm extends Component {

    constructor()
    {
        super();
        this.state={
            username:'',
            password:'',
            login:false,
            store:null,
        }
        
    }

    saveToken(token) {
        sessionStorage.setItem('tokenData', JSON.stringify(token));
    }
    
    login(){
        fetch('http://127.0.0.1:8000/api/api-token-auth/',{
            method:"POST",
            body:JSON.stringify(this.state),
            headers:{
                'Content-Type':'application/json'
            }
            
        })
        .then((response)=> {
            response.json().then((result)=>{
                console.warn("result",result);
                localStorage.setItem('login',JSON.stringify({
                    login:true,
                    token:result.token
                }))
                this.setState({login:true})
            })
            
        })
    //     if (this.state.username && this.state.password){
    //         PostData(this.state).then ((result) =>{
    //             let responseJSON = result;
    //             if(responseJSON.username){
    //                 sessionStorage.setItem('username',responseJSON);
    //                 this.setState({redirect:true});
    //             }
    //             else{
    //                 console.log('login error')
    //             }
    //         });
    //     }
        
    }

    render(){
        
        if (this.state.login == true){
           return(<Redirect to={'/'}/>) 
        }

        return(
            <div>
                <div className="auth__top">
                    <img src={hydra}></img>
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item validateStatus="success" hasFeedback>
                            
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username" size="large" 
                                type="text" onChange={(event)=>{this.setState({username:event.target.value})}}
                                />

                            </Form.Item>
                            <Form.Item>
                            
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                size="large" 
                                onChange={(event)=>{this.setState({password:event.target.value})}}
                                />
                            
                            </Form.Item>
                            <Form.Item>
                            <Button type="primary" size="large" onClick={()=>{this.login()}}>
                                Войти в аккаунт
                            </Button>
                            </Form.Item>
                            <Link className="auth__register-link" to="register">Зарегистрироваться</Link>
                        </Form>
                    </Block>
                
                
            </div>
        )
    }
}

export default LoginForm;
import React from 'react';
import {Route} from 'react-router-dom';



import LoginFormContainer from '../../modules/LoginForm/LoginFormContainer'
import RegisterFormContainer from '../../modules/RegisterForm/RegisterFormContainer';
import './Auth.scss'




const Auth = () => (
        <section className="auth">
            <div className="auth__content">
                <Route exact path={["/", "/login"]} component={LoginFormContainer} />
                <Route exact path={["/", "/register"]} component={RegisterFormContainer} />
            </div>
        </section>
);




export default Auth;
import React from 'react';
import {Route} from 'react-router-dom';

import {RegisterForm} from 'modules'
import {LoginForm} from 'modules'

import './Auth.scss'

const Auth = () => (
    <section className="auth">
            <div className="auth__content">
                <Route exact path={["/", "/login"]} component={LoginForm} />
                <Route exact path={["/", "/register"]} component={RegisterForm} />
            </div>
        </section>
);




export default Auth;
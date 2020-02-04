import React from 'react';
import {Route} from 'react-router-dom';
import hydra  from 'assets/hydra.svg';

import {LoginForm} from 'modules'

import './Auth.scss'

const Auth = () => (
    <section className="auth">
            <div className="auth__content">
                <img src={hydra}></img>
                <Route exact path={["/", "/login"]} component={LoginForm} />
            </div>
        </section>
);




export default Auth;
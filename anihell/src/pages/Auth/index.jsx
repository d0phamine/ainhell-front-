import React from 'react';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../../store/reducers';

import LoginFormContainer from '../../modules/LoginForm/LoginFormContainer'
import RegisterFormContainer from '../../modules/RegisterForm/RegisterFormContainer';
import './Auth.scss'


const store  = createStore(rootReducer);

const Auth = () => (
    <Provider store={store}>
        <section className="auth">
            <div className="auth__content">
                <Route exact path={["/", "/login"]} component={LoginFormContainer} />
                <Route exact path={["/", "/register"]} component={RegisterFormContainer} />
            </div>
        </section>
    </Provider>
);




export default Auth;
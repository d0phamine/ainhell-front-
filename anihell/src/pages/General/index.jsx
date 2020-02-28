import React from 'react';
import {Provider} from 'react-redux';
import HeaderContainer from "../../components/Header/HeaderContainer";
import BaseCard from "../../components/BaseCard/BaseCard";
import Cardlist from "../../components/Cardlist/Cardlist"
import {createStore} from 'redux';
import rootReducer from '../../store/reducers';

import './General.scss'

const store  = createStore(rootReducer);
    

const General = () => (
    <Provider store={store}>
    <div className="general">
        <HeaderContainer/>
        <div className="general__content">
            <div className="content-header">
                <h1>Ongoing</h1>
            </div>
            <div className="content-cards">
                <Cardlist />
            </div>
        </div>
        <div className="footer"></div>
    </div>
    </Provider>
);

export default General;

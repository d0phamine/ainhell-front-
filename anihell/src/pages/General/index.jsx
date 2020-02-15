import React from 'react';
import {Header} from "components";
import {BaseCard, Cardlist} from "components";

import './General.scss'




const General = () => (
    <div className="general">
        <Header/>
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
);

export default General;
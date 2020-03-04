import React from 'react';

import HeaderContainer from "../../components/Header/HeaderContainer";
import BaseCard from "../../components/BaseCard/BaseCard";
import Cardlist from "../../components/Cardlist/Cardlist"


import './General.scss'


    

const General = () => (
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
);

export default General;

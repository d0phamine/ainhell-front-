import React from 'react';
import {Route} from 'react-router-dom';


import './Profile.scss'
import Header from '../../components/Header/Header';

const Profile = () =>(
    <div className="profile">
        <Header/>
        <div className="profile__block">
            <div className="profile__content">
                <div className="profile__main">
                    <div className="profile__avatar">
                        <img src="https://sun9-16.userapi.com/c854220/v854220647/155f21/M3ERTUovlxg.jpg"></img>
                    </div>
                    <div className="profile__info">
                        <h2>Dophamine</h2>
                        <p>Mail: 19pokemonchik99@mail.ru</p>
                        <p>Возраст: 20лет</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Profile;
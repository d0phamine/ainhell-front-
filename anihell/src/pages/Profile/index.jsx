import React from 'react';
import {Route} from 'react-router-dom';


import './Profile.scss'
import HeaderContainer from '../../components/Header/HeaderContainer';
import Cardlist from '../../components/Cardlist/Cardlist'

class Profile extends React.Component {
    render(){
        return(
            <div className="profile">
                <HeaderContainer/>
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
                        <div className="profile__list">
                            <h2>Мои аниме</h2>
                            <Cardlist/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    


export default Profile;
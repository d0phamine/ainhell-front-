import React from 'react';
import {Button} from "components";
import {Link} from 'react-router-dom';


import './Header.scss'
import hydra from 'assets/hydra.svg'
import megaphone from 'assets/megaphone.svg'



const Header = props =>(
    <div className='header'>
        <div className='header__logo'>
            <img src={hydra} className="hydra"></img>
            <h1>AniHell</h1>
        </div>
        <div className='header__content'>
            <Link><img src={megaphone} className="megaphone"></img></Link>
            <div className="profileblock">
              <div className="profileblock__avatar"><p>D</p></div> 
              <Link><p>Dophamine</p></Link>
            </div>  
            <Button className="enterButton"><Link to="login" >Войти</Link></Button> />
        </div>
        
    </div>
)


export default Header;
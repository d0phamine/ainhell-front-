import React from 'react';
import Button from "../Button/Button";
import {Link} from 'react-router-dom';
import {Icon, Badge, Popover} from 'antd';



import './Header.scss'
import hydra from 'assets/hydra.svg'
import megaphone from 'assets/megaphone.svg'
import settings from 'assets/settings.svg'
import survey from 'assets/survey.svg'



const text = <span> Оповещения </span>;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class Header extends React.Component {
  constructor (props) 
  {
    super(props);
  }



  render(){
    let button;
    
    if (this.props.auth === false){
      button = <Button className="enterButton" ><Link to="login" >Выйти</Link></Button>; 
    } else {
      button = <Button className="enterButton"><Link to="login" >Войти</Link></Button>;
    }
      return(
        <div className='header'>
          <div className='header__logo'>
              <img src={hydra} className="hydra"></img>
              <Link to="/"><h1>AniHell</h1></Link>
          </div>
          <div className='header__content'>
              <Link className="link-btn"><img src={survey}></img></Link>
              <Link className="link-btn"><img src={settings} ></img></Link>
              <Popover  placement="bottom" title={text} content={content} trigger="click">
                  <Link className="link-btn">
                      <Badge className="badge" count={5}><img src={megaphone} ></img></Badge>
                  </Link>
              </Popover>
              <div className="profileblock">
                <div className="profileblock__avatar"><p>D</p></div> 
                <Link to="profile"><p>Dophamine</p></Link>
              </div>  
              {button}
          </div>
      </div>
    )
  }  
}

  



export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Rate} from 'antd';
import PropTypes from 'prop-types';


import './Card.scss';
import plus from 'assets/plus.svg'
import Button from "../Button/Button";


const BaseCard = ({title, title_image}) => (
    <Card className="card" title={BaseCard.name} extra={<a href="#">More</a>} >
      <div className="card__content">
          <div className="card__image">
              <img src={title_image}/>
          </div>
          <div className="card__usability">
              <Button className="addbutton"><img src={plus}></img></Button>
              <Rate className="card__rate" allowHalf defaultValue={0} />
          </div>
      </div>
    </Card>
)



Card.propTypes = {
    title: PropTypes.string,
    title_image: PropTypes.string
};

export default BaseCard;
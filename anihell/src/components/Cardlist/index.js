import React from 'react';
import {Button} from "components";
import axios from 'axios';
import PropTypes from 'prop-types';


import {Card, Rate} from 'antd';
import plus from 'assets/plus.svg'
import "./Cardlist.scss"


 class Cardlist extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cards:'',
      };
    };
    

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/animeall/')
        .then(response =>{
            console.log(response)
            this.setState({cards: response.data.list})
        })
        
                     
    }

     render() {
        const {cards} = this.state
        return (
            console.log(this.state.cards.length),
            <div>
                {
                    cards.length ? (
                        cards.map(card => <div key={cards.id} ><p>{cards.name}</p></div>)
                    )
                     : null
                }
                
               {/* <Card  className="card"  extra={<a href="#">More</a>} onChange={this.changeHandler} >
                    <div className="card__content">
                        <div className="card__image">
                            <img src={}/>
                        </div>
                        <div className="card__usability">
                            <Button className="addbutton"><img src={plus}></img></Button>
                            <Rate className="card__rate" allowHalf defaultValue={0} />
                        </div>
                    </div>
                </Card> */}
            </div>
        )    
    }
}

export default Cardlist;
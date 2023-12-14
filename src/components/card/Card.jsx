import { useState, useEffect } from 'react';
import axios from 'axios';
import Star_fill from '../../assets/Star_fill.svg';
import Star from '../../assets/Star.svg'

import './card.css';

const Card = () => {
    const [cardData, setCardData] = useState([]);
    const [availability, setAvailability] = useState(false);


useEffect(() => {
axios.get("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
    .then(res => res.data)
    .then(data => {
        setCardData(data);
    })
}, []);

const handleAllClick = () => {
    setAvailability(false);
}

const handleAvailableClick = () => {
    setAvailability(true);
}

  return (
    <div className='card__container'>
    <div className="btn__container">
            <button onClick={handleAllClick} className='all' autoFocus >All Products</button>
            <button onClick={handleAvailableClick} className='available'>Available Now</button>
    </div>

    <div className="coffee__container">
    {cardData.map((datas, index) => {
         if (availability && !datas.available) {
            return null;
         }
         return (
            <div className='coffee__card' key={index.id}>
                <div className="coffee__card-img_container">
                    <img src={datas.image} alt="" />
                    {datas.popular && <p>Popular</p>}
                </div>
                <div className="coffee__card-props">
                        <p className="name">{datas.name}</p>
                        <p className="price">{datas.price}</p>
                </div>
                <div className="coffee__card-votes">
                        
                        {datas.rating ? 
                            <div className="rating">
                            <img src={Star_fill} alt='star-logo'/> 
                            <p>{datas.rating}</p>
                            </div> : null}
                        

                        {datas.available || <p className='sold-out' >Sold out</p>}
                        <div className="votes">
                        {datas.votes ? `(${datas.votes} votes)`
                         : <div className="no-votes">
                            <img src={Star} alt='star-logo'/>
                            <p className='votes'>No Ratings</p>
                         </div>}
                         </div>
                         
                </div>
            </div>
         )
    })}
    </div>
    </div>
  )
}

export default Card;
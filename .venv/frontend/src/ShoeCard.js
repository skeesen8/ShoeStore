
import React from 'react';
import './ShoeCard.css';
    
const ShoeCard = ({
      id,
      brand,
      color,
      size,
      creator_id,
      image,
      price,
      buy_now,
      set_shoes,
    }) => {
      return (
        <div classname="carousel">
        <div className="shoe-card" key={id} >
          <div className="shoe-image-container">
            <img src={image} alt={`${brand} Shoe`} className="shoe-image" />
          </div>
          <div className="shoe-details">
            <h2 className="shoe-brand">{brand}</h2>
            <p className="shoe-color">Color: <span>{color}</span></p>
            <p className="shoe-size">Size: <span>{size}</span></p>
            <p className="shoe-creator">Creator ID: <span>{creator_id}</span></p>
            <p className="shoe-price">Price: <span>${price}</span></p>
            {buy_now && <button className="buy-now-button">Buy Now</button>}
          </div>
        </div>
        </div>
      );
    };
    

export default ShoeCard

import { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


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

        const [isPopupVisible, setIsPopupVisible] = useState(false);

        const showPopup = () => {
          setIsPopupVisible(!isPopupVisible);
        };
      
        const hidePopup = () => {
          setIsPopupVisible(false);
        };

      return (
        <div className="carousel">
        <div className="shoe-card" key={id} >
          <div className="shoe-image-container">
            <img src={image} alt={`${brand} Shoe`} className="shoe-image" />
          </div>
          <div className="shoe-details">
            <h2 className="shoe-brand">{brand}</h2>
            <p className="shoe-color">Color: <span>{color}</span></p>
            <p className="shoe-size">Size: <span>{size}</span></p>
            <p className="shoe-price">Price: <span>${price}</span></p>
            {buy_now && <button onClick={showPopup} className="buy-now-button">Buy Now</button>}
            {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-button" onClick={hidePopup}>
              &times;
            </span>
            <h2>Congratulations you have purchased this shoe!</h2>
            <p>🎉🎉🎉🎉🎉🎉🎉</p>
          </div>
        </div>
      )}
          </div>
        </div>
        </div>


      );
    };
    

export default ShoeCard

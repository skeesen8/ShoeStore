
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ShoeCard.css'
import './index.css'

const ShoeCard = ({
  id,
  brand,
  color,
  size,
  image,
  price,
  buy_now,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();


  const reroute = () => {
    navigate(`/shoes/${id}`);
    console.log(id);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="shoe-card modern-login-card" key={id}>
      {/* Apply shared styles (modern-login-card) */}
      <div className="shoe-image-container">
        <img src={image} alt={`${brand} Shoe`} className="shoe-image" />
      </div>
      <div className="shoe-details">
        <h2 className="shoe-brand login-header">{brand}</h2>
        {/* Styled text */}
        <p className="shoe-color modern-input">
          Color: <span>{color}</span>
        </p>
        <p className="shoe-size modern-input">
          Size: <span>{size}</span>
        </p>
        <p className="shoe-price modern-input">
          Price: <span>${price}</span>
        </p>
        <button
          onClick={reroute}
          className="buy-now-button modern-button"
        >
          Buy Now
        </button>
        {isPopupVisible && (
          <div className="popup-overlay">
            <div className="popup-content modern-login-card">
              <span className="close-button" onClick={hidePopup}>
                &times;
              </span>
              <h2>Congratulations, you have purchased this shoe!</h2>
              <p>🎉🎉🎉🎉🎉🎉🎉</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoeCard;




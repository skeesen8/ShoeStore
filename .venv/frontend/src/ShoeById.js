import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ShoeDetails from "./ShoeDetails";
import './ShoeCard.css'
import './index.css'

const ShoeById = () => {
  const { id } = useParams();
  const [id_shoe, set_id] = useState([]); 
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const load_shoe = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/shoes/${id}`);
      set_id(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error("Error fetching shoes:", error);
    }
  };

  useEffect(() => {
    load_shoe();
  }, [id]);

  if (!id_shoe || id_shoe.length === 0) {
    return <p>Loading...</p>; 
  }


  const showPopup = (e) => {
    e.stopPropagation(); 
        if (!isPopupVisible) {
          setIsPopupVisible(true);
      };
  };


  const hidePopup = (e) => {
    e.stopPropagation(); 
    setIsPopupVisible(false);
  };


  return (
    <div className="test">
      {id_shoe.map((item) => (
        <div className="shoe-card-id" key={item.id}>
          <div className="shoe-image-container">
            <img src={item.image} alt={`${item.brand} Shoe`} className="shoe-image" />
          </div>
          <div className="shoe-details">
            <h2 className="shoe-brand">{item.brand}</h2>
            <p className="shoe-color">
              Color: <span>{item.color}</span>
            </p>
            <p className="shoe-size">
              Size: <span>{item.size}</span>
            </p>
            <p className="shoe-price">
              Price: <span>${item.start_price}</span>
            </p>
            {item.buy_now && (
                <div className="popup-content">
              <button  onClick={showPopup} className="buy-now-button">
                Buy Now
              </button>
              </div>
            )}
            {isPopupVisible && (
              <div className="popup-overlay">
                <div className="popup-content">
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
      ))}
    </div>
  );
};

export default ShoeById;

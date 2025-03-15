import React from "react";
import { useState,useEffect } from "react";
import api from "./api"; 
import axios from "axios";
import ShoeCard from "./ShoeCard";

const Fetch_shoes = () => {
    const [all_shoes, set_shoes] = useState([]);
  
    const load_shoes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/shoes');
        set_shoes(response.data); 
      } catch (error) {
        console.error('Error fetching shoes:', error);
      }
    };
  
    useEffect(() => {
      load_shoes();
    }, []);
  
    const render_shoes = all_shoes.map((item) => (

        <ShoeCard
        set_shoes={set_shoes}
        key={item.id}
        id={item.id}
        brand={item.brand}
        color={item.color}
        size={item.size}
        creator_id={item.creator_id}
        image={item.image}
        price={item.start_price}
        buy_now={item.buy_now}
         
        />
    ));
  
    return (
      <div>
        <h1>Shoes</h1>
        {render_shoes}
        {/* <ShoeCard/> */}
      </div>
    );
}


export default Fetch_shoes
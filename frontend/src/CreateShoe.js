import React, { use, useState } from "react";
import "./index.css"; // Import your shared CSS styles

const CreateShoe = () => {
    const [brand,set_brand]=useState('')
    const [size,set_size]=useState('')
    const [creator_id, set_creator_id]=useState('')
    const[color,set_color]=useState('')
    const[buy_now,set_buy_now]=useState('')
    const [image,set_image]=useState('')
    const[start_price,set_start_price]=useState('')



    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/shoes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    brand: brand,
                    size: size,
                    creator_id: 1,
                    color: color,
                    buy_now: buy_now,
                    image: image,
                    start_price: start_price,}),
            })

        console.log(response)
        if (response.ok) {

            console.log("Shoe created successfully!");
            set_brand('')
            set_size('')
            set_buy_now('')
            set_color('')
            set_image('')
            set_start_price('')
        } else {
            console.error("Failed to create shoe:", await response.json());
        }
    } catch (error) {
        console.error("Error creating shoe:", error);
    }
};

    return (
        <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg modern-login-card">
        <h2 className="text-center mb-4 login-header">Create a New Shoe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="brand"
              value={brand}
              onChange={(e) => set_brand(e.target.value)}
              className="form-control modern-input"
              placeholder="Brand"
              required
              />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="size"
              value={size}
              onChange={(e) => set_size(e.target.value)}
              className="form-control modern-input"
              placeholder="Size"
              required
              />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="color"
              value={color}
              onChange={(e) => set_color(e.target.value)}
              className="form-control modern-input"
              placeholder="Color"
              required
              />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="buy_now"
              value={buy_now}
              onChange={(e) => set_buy_now(e.target.value)}
              className="form-control modern-input"
              placeholder="Buy Now Price"
              required
              />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="image"
              value={image}
              onChange={(e) => set_image(e.target.value)}
              className="form-control modern-input"
              placeholder="Image URL"
              required
              />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="start_price"
              value={start_price}
              onChange={(e) => set_start_price(e.target.value)}
              className="form-control modern-input"
              placeholder="Start Price"
              required
              />
          </div>
          <button type="submit" className="btn btn-primary w-100 modern-button">
            Create Shoe
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateShoe;
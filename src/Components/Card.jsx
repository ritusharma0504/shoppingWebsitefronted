import React, { useState } from "react";

function Card(props) {  
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="c:\Users\HP\Downloads\beautiful-nature-mountain-scenery-with-flowers-picjumbo-com.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">hello image</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
    
  );
}

export default Card;

import React from 'react';
import './famousproducts.css';
const FamousProducts = ({ famous_product }) => {
  const { prod_img, topTitle, mainTitle, subTitle } = famous_product;
  
  return (
    <>
      <div className="col-3">
        <div className="famous-card position-relative bg-dark">
          <img src={prod_img} alt="Famous Product" className="" />
          <div
            className="famous-content position-absolute"
          >
            <h5>{topTitle}</h5>
            <h6>{mainTitle}</h6>
            <p>{subTitle} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamousProducts;

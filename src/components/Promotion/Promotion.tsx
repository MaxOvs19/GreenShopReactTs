import React from 'react';
import plantBig from 'assets/icons/plantBig.png';
import plantSmall from 'assets/icons/plantSmall.png';

import BaseButton from 'UI/BaseButton/BaseButton';

import './promotion.scss';

const Promotion = () => {
  return (
    <div className="promotion">
      <div className="promotion-body">
        <div className="promotion-body__text">
          <h6>Welcome to GreenShop</h6>
          <h2>
            Let’s Make a Better <span>Planet</span>
          </h2>
          <p>
            We are an online plant shop offering a wide range of cheap and trendy plants. Use our
            plants to create an unique Urban Jungle. Order your favorite plants!
          </p>
          <BaseButton styles="promotion-body__button">SHOP NOW</BaseButton>
        </div>
        <img src={plantBig} alt="@" className="plant-big" />
        <img src={plantSmall} alt="@" className="plant-small" />
      </div>
    </div>
  );
};

export default Promotion;

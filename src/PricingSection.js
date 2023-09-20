import React from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css'; // Import the CSS file for styling

const PricingSection = ({ title, price }) => {
  return (
    <div className="pricing-section">
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

PricingSection.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default PricingSection;

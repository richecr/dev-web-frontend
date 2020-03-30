import React from 'react';

import PropTypes from 'prop-types';

import ServiceItem from '../ServiceItem';

import './styles.css';

export default function ServicesList({ services }) {
  return (
    <div className="div-items">
      {services.map(item => (
        <ServiceItem key={item.name} item={item} />
      ))}
    </div>
  );
}

ServicesList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      url_foto: PropTypes.string.isRequired,
      occupation: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      neighborhood: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

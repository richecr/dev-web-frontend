import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './styles.css';

export default function ServiceItem({ item }) {
  return (
    <div className="div-item">
      <div className="info-author">
        <div className="div-author-info">
          <div className="img-author">
            <img src={item.url_foto} alt="Avatar do usuário" />
          </div>

          <div className="author">
            <strong id="name-author">{item.name}</strong>
            <strong id="occupation-author">{item.occupation}</strong>
            <span>Avaliações: {item.rating}</span>
          </div>
        </div>

        <div>
          <strong id="occupation-author">R$ {item.price}</strong>
        </div>
      </div>

      <div className="div-link">
        <Link className="back-link" to={`/profile/${item.email}`}>
          Ver perfil
        </Link>
      </div>
    </div>
  );
}

ServiceItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    url_foto: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    neighborhood: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

import React from 'react';

import './index.css';

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
            <span>Classificação: {item.ranking}</span>
          </div>
        </div>

        <div>
          <strong id="occupation-author">{item.price}</strong>
        </div>
      </div>

      <div>
        <button>Ver perfil</button>
      </div>
    </div>
  );
}

import React from 'react';

import './index.css';

export default function ServiceItem({ item }) {
  return (
    <div className="div-item">
      <div className="info-author">
        <div className="img-author">
          <img src={item.url_foto} alt="Avatar do usuário" />
        </div>

        <div className="author">
          <strong id="name-author">{item.name}</strong>
          <strong id="occupation-author">{item.occupation}</strong>
        </div>
      </div>
    </div>
  );
}

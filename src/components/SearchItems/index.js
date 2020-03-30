import React, { useState } from 'react';

import PropTypes from 'prop-types';

import './styles.css';

export default function SearchItems({ onChangeText, value }) {
  return (
    <div className="div-search">
      <input
        placeholder="Buscar por serviços"
        onChange={e => onChangeText(e.target.value)}
        value={value}
      />
    </div>
  );
}

SearchItems.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

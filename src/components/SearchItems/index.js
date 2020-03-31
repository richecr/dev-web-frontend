import React, { useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import PropTypes from 'prop-types';

import './styles.css';

export default function SearchItems({ onChangeText }) {
  const [text, setText] = useState('');

  function handleSearch(e) {
    e.preventDefault();

    onChangeText(text);
  }

  return (
    <div className="div-search">
      <form onSubmit={handleSearch}>
        <FormControl>
          <InputLabel htmlFor="standard-adornment-password">
            Buscar por serviços, nome, cidade ou estado
          </InputLabel>
          <Input
            id="standard-adornment-password"
            value={text}
            onChange={e => setText(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    </div>
  );
}

SearchItems.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};

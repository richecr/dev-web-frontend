import React, { useState } from 'react';

import ServicesList from '../../components/ServicesList';
import SearchItems from '../../components/SearchItems';

import './styles.css';

export default function Main() {
  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <SearchItems onChangeText={setSearchText} />
      <ServicesList className="div-items" searchText={searchText} />
    </div>
  );
}

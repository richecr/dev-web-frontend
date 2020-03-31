import React, { useState } from 'react';

import ServicesList from '../../components/ServicesList';
import SearchItems from '../../components/SearchItems';

import './styles.css';

export default function Main() {
  const [services, setServices] = useState([
    {
      name: 'Rick',
      email: 'rich@elton.com',
      ranking: 5,
      rating: 10,
      url_foto:
        'https://avatars1.githubusercontent.com/u/25726888?s=460&u=8252555dd09e9b823676ff8e9585ca1b69ad3de6&v=4',
      occupation: 'Desenvolvedor',
      state: 'Paraíba',
      city: 'Campina Grande',
      neighborhood: 'Bodocongo',
      price: 1000,
    },
    {
      name: 'Igor',
      email: 'igor@silveira.com',
      ranking: 5,
      rating: 10,
      url_foto:
        'https://avatars3.githubusercontent.com/u/39952041?s=460&u=e16c50c262713bef1abcecd1a9a7747dd5f0ff49&v=4',
      occupation: 'Programador',
      state: 'Pernambuco',
      city: 'Recife',
      neighborhood: 'Cordeiro',
      numberOfServices: 10,
      price: 1000,
    },
    {
      name: 'Davi',
      email: 'davi@live.com',
      ranking: 4.5,
      rating: 9,
      url_foto: 'https://avatars0.githubusercontent.com/u/40031432?s=400&v=4',
      occupation: 'Desenvolvedor',
      state: 'Pernambuco',
      city: 'Recife',
      neighborhood: 'Afogados',
      price: 1000,
    },
    {
      name: 'Pedro',
      email: 'pedro@live.com',
      ranking: 5,
      rating: 10,
      url_foto:
        'https://avatars1.githubusercontent.com/u/25726888?s=460&u=8252555dd09e9b823676ff8e9585ca1b69ad3de6&v=4',
      occupation: 'Motorista',
      state: 'Paraíba',
      city: 'Cajazeiras',
      neighborhood: 'Jardim Oasis',
      price: 1000,
    },
    {
      name: 'José',
      email: 'jose@live.com',
      ranking: 5,
      rating: 11,
      url_foto:
        'https://avatars1.githubusercontent.com/u/25726888?s=460&u=8252555dd09e9b823676ff8e9585ca1b69ad3de6&v=4',
      occupation: 'Menino da TI',
      state: 'Paraíba',
      city: 'João Pessoa',
      neighborhood: 'Bancários',
      price: 1000,
    },
    {
      name: 'Lucas',
      email: 'lucas@live.com',
      ranking: 4,
      rating: 15,
      url_foto: 'https://avatars0.githubusercontent.com/u/43856678?s=460&v=4',
      occupation: 'Encanador',
      state: 'Paraíba',
      city: 'João Pessoa',
      neighborhood: 'Bancários',
      price: 1000,
    },
  ]);

  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <SearchItems onChangeText={setSearchText} value={searchText} />
      <ServicesList className="div-items" services={services} />
    </div>
  );
}

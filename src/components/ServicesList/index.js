import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import ServiceItem from '../ServiceItem';

import './styles.css';

export default function ServicesList({ searchText }) {
  const [services, setServices] = useState([
    {
      name: 'Rick',
      email: 'rich@elton.com',
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
      rating: 15,
      url_foto: 'https://avatars0.githubusercontent.com/u/43856678?s=460&v=4',
      occupation: 'Encanador',
      state: 'Paraíba',
      city: 'João Pessoa',
      neighborhood: 'Bancários',
      price: 1000,
    },
  ]);

  useEffect(() => {
    const servicesFilter = services.filter(
      element =>
        element.occupation.includes(searchText) ||
        element.name.includes(searchText) ||
        element.city.includes(searchText) ||
        element.state.includes(searchText)
    );

    // Ao fazer uma filtragem todos os outros dados são perdidos.
    // Quando estive usando a API isso não será um problema, pois sempre
    // vai buscar os dados no servidor.

    setServices(servicesFilter);
  }, [searchText]);

  return (
    <div className="div-items">
      <ul>
        {services.map(item => (
          <ServiceItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

ServicesList.defaultProps = {
  searchText: '',
};

ServicesList.propTypes = {
  searchText: PropTypes.string,
};

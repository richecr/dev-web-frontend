import React, { useState } from 'react';

import ServiceItem from '../../components/ServiceItem';

import './index.css';

export default function Main() {
  const [services, setServices] = useState([
    {
      name: 'Rick',
      url_foto:
        'https://avatars1.githubusercontent.com/u/25726888?s=460&u=8252555dd09e9b823676ff8e9585ca1b69ad3de6&v=4',
      occupation: 'Desenvolvedor',
      state: 'Paraíba',
      city: 'Campina Grande',
      neighborhood: 'Bodocongo',
    },
    {
      name: 'Davi',
      url_foto: 'https://avatars0.githubusercontent.com/u/40031432?s=400&v=4',
      occupation: 'Desenvolvedor',
      state: 'Pernambuco',
      city: 'Recife',
      neighborhood: 'Afogados',
    },
    {
      name: 'Pedro',
      url_foto:
        'https://avatars1.githubusercontent.com/u/25726888?s=460&u=8252555dd09e9b823676ff8e9585ca1b69ad3de6&v=4',
      occupation: 'Motorista',
      state: 'Paraíba',
      city: 'Cajazeiras',
      neighborhood: 'Jardim Oasis',
    },
    {
      name: 'José',
      url_foto:
        'https://avatars1.githubusercontent.com/u/25726888?s=460&u=8252555dd09e9b823676ff8e9585ca1b69ad3de6&v=4',
      occupation: 'Menino da TI',
      state: 'Paraíba',
      city: 'João Pessoa',
      neighborhood: 'Bancários',
    },
    {
      name: 'Lucas',
      url_foto: 'https://avatars0.githubusercontent.com/u/43856678?s=460&v=4',
      occupation: 'Encanador',
      state: 'Paraíba',
      city: 'João Pessoa',
      neighborhood: 'Bancários',
    },
  ]);

  return (
    <div className="div-items">
      {services.map(item => (
        <ServiceItem key={item.name} item={item} />
      ))}
    </div>
  );
}

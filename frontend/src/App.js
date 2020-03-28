import React from 'react';

import './global.css';

import Routes from './routes';

/**
 * JSX (JavaScript XML - quando o html está integrado dentro do javascript)
 * Componente do reack é uma função que retorna no html ( js, css, html etc)
 * Propriedades: sintaxe de atributos, são atributados que sao passados 
 * para componentes ao inves de elementos do html
 */

function App() {
  return (
    <Routes />
  );
}

export default App;

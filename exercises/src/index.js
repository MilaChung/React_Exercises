import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Primeiro, Segundo } from './components/component'

ReactDOM.render(
  <div>
    <Primeiro />
    <Segundo />
  </div>,
  document.getElementById('root')
);


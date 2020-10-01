import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Family from './components/family';
import Member from './components/member';

ReactDOM.render(
  <Family lastName='Chung'>
    <Member name='Camila'/>
    <Member name='Juliana'/>
    <Member name='Sônia'/>
    <Member name='Júlio'/>
  </Family>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { SantJhoane } from './SantJhoane';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <SantJhoane />
  </HashRouter>,
  document.getElementById('root')
);


import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { FirebaseAppProvider } from "reactfire";
import authConfig from "./firebaseConfig";
import { SantJhoane } from './SantJhoane';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={authConfig}>
    <Suspense fallback={<h3>Esperando Firebase....</h3>}>
      <SantJhoane />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);


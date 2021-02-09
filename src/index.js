import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {promoCardData, miniCardData} from './mock/data';

ReactDOM.render(
    <App
      promoCard={promoCardData}
      miniCardData={miniCardData}
    />,
    document.querySelector(`#root`)
);

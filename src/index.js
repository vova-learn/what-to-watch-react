import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {promoCardData} from './mock/data';

ReactDOM.render(<App promoCard={promoCardData}/>, document.querySelector(`#root`));

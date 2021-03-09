import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/app/app';
import {films} from './mock/films';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);

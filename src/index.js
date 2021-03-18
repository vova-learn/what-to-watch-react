import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from './store/reducer';
import {createApi} from './api/api';
import {ActionCreator} from './store/actions';
import {AuthorizationStatus} from './const';

import App from './components/app/app';
import {checkAuth} from './store/api-actions';

const api = createApi(
    () => store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);
// TODO: fix. не работал роутинг в момент перехода по прямой ссылке
store.dispatch(checkAuth());

// TODO: удалить
window.s = store;

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

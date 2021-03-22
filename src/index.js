import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {reducer} from './store/reducer';
import {ActionCreator} from './store/actions';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

import {createApi} from './api/api';
import {AuthorizationStatus} from './const';
import App from './components/app/app';

const api = createApi(
    () => store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
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

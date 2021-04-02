import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './store/root-reducer';
import {requiredAuthorization} from './store/actions';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

import {createApi} from './api/api';
import {AuthorizationStatus} from './const';
import App from './components/app/app';

const api = createApi(
    () => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducers/reducer';

import createSagaMiddleware from 'redux-saga';
import submitFormData from './store/sagas/sagas';

import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from 'react-router-dom';

import './i18n';

const persistConfig = {
  key : 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig,reducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
  );

const persistor = persistStore(store);
sagaMiddleware.run(submitFormData)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate persistor={persistor}> 
          <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
              <App /> 
            </Suspense>
          </BrowserRouter>
       </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

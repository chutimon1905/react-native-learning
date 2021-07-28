import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/feed.saga';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga);

export default store;

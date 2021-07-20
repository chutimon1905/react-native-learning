import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/feed.saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware, thunk, logger)),
);

sagaMiddleware.run(rootSaga);

export default store;

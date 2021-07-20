import {all, fork} from 'redux-saga/effects';

import feedSaga from './feed.saga';

export function* rootSaga() {
  yield all([fork(feedSaga)]);
}

/** Libraries */
import { all, call } from 'redux-saga/effects';

/** Sagas */
import { reviewsSaga } from './reviews/reviews.saga';

export default function* rootSaga() {
  yield all([call(reviewsSaga)]);
}

/** Dependencies */
import { takeLatest, call, put, all } from 'redux-saga/effects';

/** Actions */
import { ReviewsActionType } from './reviews.action-types';
import { fetchReviewsFailed, fetchReviewsSuccess } from './reviews.action-creators';

/** Models */
import { Review } from '../../models/Review.model';

/** API */
import API from '../../api';

export function* fetchReviewsAsync() {
  try {
    const result: Review[] = yield call(API.getReviews);
    yield put(fetchReviewsSuccess(result));
  } catch (error) {
    yield put(fetchReviewsFailed(error.message));
  }
}

export function* fetchReviewsStarted() {
  yield takeLatest(ReviewsActionType.FETCH_REVIEWS_START, fetchReviewsAsync);
}

export function* reviewsSaga() {
  yield all([call(fetchReviewsStarted)]);
}

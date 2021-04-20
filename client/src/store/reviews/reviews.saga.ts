/** Dependencies */
import { takeLatest, call, put, all } from 'redux-saga/effects';

/** Actions */
import { ReviewsActionType } from './reviews.action-types';
import { fetchReviewsFailed, fetchReviewsSuccess } from './reviews.action-creators';
import { FetchReviewsStart } from './reviews.actions';

/** Models */
import { Review } from '../../models/Review.model';

/** API */
import API from '../../api';

export function* fetchReviewsAsync({ payload: { page, postsPerPage } }: FetchReviewsStart) {
  try {
    const result: { data: Review[] } = yield call(API.getReviews, page, postsPerPage);
    console.log(result);
    // TODO: Add separate fetch to count the whole reviews (insted 3)
    yield put(fetchReviewsSuccess(result.data, 7, page, postsPerPage));
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

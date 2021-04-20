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

/** Get Reviews from API */
export function* fetchReviewsAsync({ payload: { page, postsPerPage } }: FetchReviewsStart) {
  try {
    const result: { data: Review[] } = yield call(API.getReviews, page, postsPerPage);
    const count: { data: number } = yield call(API.getReviewsCount);
    yield put(fetchReviewsSuccess(result.data, count.data, page, postsPerPage));
  } catch (error) {
    yield put(fetchReviewsFailed(error.message));
  }
}

/** Saga for fetching reviews */
export function* fetchReviewsStarted() {
  yield takeLatest(ReviewsActionType.FETCH_REVIEWS_START, fetchReviewsAsync);
}

/** Main Saga (for all actions with reviews) */
// TODO: Add creation, updating and deleting for the review
export function* reviewsSaga() {
  yield all([call(fetchReviewsStarted)]);
}

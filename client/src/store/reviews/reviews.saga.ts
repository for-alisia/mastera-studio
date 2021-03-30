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
    const result: { data: Review[]; headers: { 'x-total-count': number } } = yield call(
      API.getReviews,
      page,
      postsPerPage
    );
    console.log(result);
    const totalPages = +result.headers['x-total-count'];
    yield put(fetchReviewsSuccess(result.data, totalPages, page, postsPerPage));
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

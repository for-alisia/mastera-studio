/** Models */
import { ReviewAction } from './reviews.actions';
import { ReviewsActionType } from './reviews.action-types';
import { Review } from '../../models/Review.model';

export const fetchReviewsStart = (): ReviewAction => ({
  type: ReviewsActionType.FETCH_REVIEWS_START,
});

export const fetchReviewsSuccess = (reviews: Review[]): ReviewAction => ({
  type: ReviewsActionType.FETCH_REVIEWS_SUCCESS,
  payload: reviews,
});

export const fetchReviewsFailed = (errorMsg: string): ReviewAction => ({
  type: ReviewsActionType.FETCH_REVIEWS_FAILED,
  payload: errorMsg,
});

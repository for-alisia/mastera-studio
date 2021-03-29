/** Action Types */
import { ReviewsActionType } from './reviews.action-types';

/** Models */
import { Review } from '../../models/Review.model';

export interface FetchReviewsStart {
  type: ReviewsActionType.FETCH_REVIEWS_START;
}

export interface FetchReviewsFailed {
  type: ReviewsActionType.FETCH_REVIEWS_FAILED;
  payload: string;
}

export interface FetchReviewsSuccess {
  type: ReviewsActionType.FETCH_REVIEWS_SUCCESS;
  payload: Review[];
}

export type ReviewAction = FetchReviewsFailed | FetchReviewsStart | FetchReviewsSuccess;

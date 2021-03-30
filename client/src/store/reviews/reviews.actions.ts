/** Action Types */
import { ReviewsActionType } from './reviews.action-types';

/** Models */
import { Review } from '../../models/Review.model';

export interface FetchReviewsStart {
  type: ReviewsActionType.FETCH_REVIEWS_START;
  payload: { page: number; postsPerPage: number };
}

export interface FetchReviewsFailed {
  type: ReviewsActionType.FETCH_REVIEWS_FAILED;
  payload: string;
}

export interface FetchReviewsSuccess {
  type: ReviewsActionType.FETCH_REVIEWS_SUCCESS;
  payload: { reviews: Review[]; totalPages: number; currentPage: number; postsPerPage: number };
}

export type ReviewAction = FetchReviewsFailed | FetchReviewsStart | FetchReviewsSuccess;

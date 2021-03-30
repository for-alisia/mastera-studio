/** Models */
import { ReviewAction } from './reviews.actions';
import { ReviewsActionType } from './reviews.action-types';
import { Review } from '../../models/Review.model';

export const fetchReviewsStart = (page: number, postsPerPage: number): ReviewAction => ({
  type: ReviewsActionType.FETCH_REVIEWS_START,
  payload: { page, postsPerPage },
});

export const fetchReviewsSuccess = (
  reviews: Review[],
  totalPages: number,
  currentPage: number,
  postsPerPage: number
): ReviewAction => ({
  type: ReviewsActionType.FETCH_REVIEWS_SUCCESS,
  payload: { reviews, totalPages, currentPage, postsPerPage },
});

export const fetchReviewsFailed = (errorMsg: string): ReviewAction => ({
  type: ReviewsActionType.FETCH_REVIEWS_FAILED,
  payload: errorMsg,
});

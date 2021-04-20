/** Models */
import { ReviewAction } from './reviews.actions';
import { ReviewsActionType } from './reviews.action-types';
import { Review } from '../../models/Review.model';

/** Fetching of reviews */
export const fetchReviewsStart = (page: number, postsPerPage: number): ReviewAction => ({
  type: ReviewsActionType.FETCH_REVIEWS_START,
  payload: { page, postsPerPage },
});

export const fetchReviewsSuccess = (
  reviews: Review[],
  totalCount: number,
  currentPage: number,
  postsPerPage: number
): ReviewAction => ({
  type: ReviewsActionType.FETCH_REVIEWS_SUCCESS,
  payload: { reviews, totalCount, currentPage, postsPerPage },
});

export const fetchReviewsFailed = (errorMsg: string): ReviewAction => ({
  type: ReviewsActionType.FETCH_REVIEWS_FAILED,
  payload: errorMsg,
});

/** Adding a new review */
export const addReviewStart = (review: Review): ReviewAction => ({
  type: ReviewsActionType.ADD_REVIEW_START,
  payload: review,
});

export const addReviewFailed = (error: string): ReviewAction => ({
  type: ReviewsActionType.ADD_REVIEW_FAILED,
  payload: error,
});

export const addReviewSuccess = (review: Review): ReviewAction => ({
  type: ReviewsActionType.ADD_REVIEW_SUCCESS,
  payload: review,
});

/** Deleting a new review */
export const deleteReviewStart = (reviewId: string): ReviewAction => ({
  type: ReviewsActionType.DELETE_REVIEW_START,
  payload: reviewId,
});

export const deleteReviewFailed = (error: string): ReviewAction => ({
  type: ReviewsActionType.DELETE_REVIEW_FAILED,
  payload: error,
});

export const deleteReviewSuccess = (message: string): ReviewAction => ({
  type: ReviewsActionType.DELETE_REVIEW_SUCCESS,
  payload: message,
});

/** Editing a new review */
export const editReviewStart = (reviewId: string): ReviewAction => ({
  type: ReviewsActionType.EDIT_REVIEW_START,
  payload: reviewId,
});

export const editReviewFailed = (error: string): ReviewAction => ({
  type: ReviewsActionType.EDIT_REVIEW_FAILED,
  payload: error,
});

export const editReviewSuccess = (review: Review): ReviewAction => ({
  type: ReviewsActionType.EDIT_REVIEW_SUCCESS,
  payload: review,
});

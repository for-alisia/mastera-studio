/** Action Types */
import { ReviewsActionType } from './reviews.action-types';

/** Models */
import { Review } from '../../models/Review.model';

/** Fetching of the existing Reviews */
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

/** Creating a new Review */
export interface AddReviewStart {
  type: ReviewsActionType.ADD_REVIEW_START;
  payload: Review;
}

export interface AddReviewFailed {
  type: ReviewsActionType.ADD_REVIEW_FAILED;
  payload: string;
}

export interface AddReviewSuccess {
  type: ReviewsActionType.ADD_REVIEW_SUCCESS;
  payload: Review;
}

/** Deleting a Review */

export interface DeleteReviewStart {
  type: ReviewsActionType.DELETE_REVIEW_START;
  payload: string;
}

export interface DeleteReviewFailed {
  type: ReviewsActionType.DELETE_REVIEW_FAILED;
  payload: string;
}

export interface DeleteReviewSuccess {
  type: ReviewsActionType.DELETE_REVIEW_SUCCESS;
  payload: string;
}

/** Editing a Review */

export interface EditReviewStart {
  type: ReviewsActionType.EDIT_REVIEW_START;
  payload: string;
}

export interface EditReviewFailed {
  type: ReviewsActionType.EDIT_REVIEW_FAILED;
  payload: string;
}

export interface EditReviewSuccess {
  type: ReviewsActionType.EDIT_REVIEW_SUCCESS;
  payload: Review;
}

export type ReviewAction =
  | FetchReviewsFailed
  | FetchReviewsStart
  | FetchReviewsSuccess
  | AddReviewStart
  | AddReviewSuccess
  | AddReviewFailed
  | EditReviewFailed
  | EditReviewSuccess
  | EditReviewStart
  | DeleteReviewFailed
  | DeleteReviewStart
  | DeleteReviewSuccess;

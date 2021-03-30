/** Dependencies */
import produce from 'immer';

/** Models */
import { Review } from './../../models/Review.model';

/** Actions */
import { ReviewAction } from './reviews.actions';
import { ReviewsActionType } from './reviews.action-types';

interface ReviewState {
  loading: boolean;
  error: string | null;
  data: {
    [key: string]: Review;
  };
  totalPages: number;
  currentPage: number;
}

const initialState: ReviewState = {
  loading: false,
  error: null,
  data: {},
  totalPages: 1,
  currentPage: 1,
};

const reviewsReducer = produce(
  (state: ReviewState = initialState, action: ReviewAction): ReviewState => {
    switch (action.type) {
      case ReviewsActionType.FETCH_REVIEWS_START:
        state.loading = true;
        state.error = null;

        return state;
      case ReviewsActionType.FETCH_REVIEWS_SUCCESS:
        state.loading = false;
        state.error = null;
        state.data = action.payload.reviews.reduce((acc, review) => {
          acc[review.id] = review;
          return acc;
        }, {} as ReviewState['data']);
        state.totalPages = Math.ceil(action.payload.totalPages / action.payload.postsPerPage);
        state.currentPage = action.payload.currentPage;

        return state;
      case ReviewsActionType.FETCH_REVIEWS_FAILED:
        state.loading = false;
        state.data = {};
        state.error = action.payload;

        return state;
      default:
        return state;
    }
  }
);

export default reviewsReducer;

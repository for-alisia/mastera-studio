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
}

const initialState: ReviewState = {
  loading: false,
  error: null,
  data: {},
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
        state.data = action.payload.reduce((acc, review) => {
          acc[review.id] = review;
          return acc;
        }, {} as ReviewState['data']);

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

/** Dependencies */
import { combineReducers } from 'redux';

/** Reducers */
import reviewsReducer from './reviews/reviews.reducer';

const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

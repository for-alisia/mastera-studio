/** Dependencies */
import { useEffect, useState } from 'react';

/** Hooks */
import { useTypedSelector, useActions } from '../../../hooks';

/** Components */
import ReviewCard from '../review-card';
import { SliderControls } from '../../ui';

const ReviewList = () => {
  const [page, setPage] = useState(1);

  const postPerPage = 3;
  const pages = 3;

  const reviews = useTypedSelector(({ reviews: { data } }) => Object.values(data));
  const { fetchReviewsStart } = useActions();

  useEffect(() => {
    fetchReviewsStart();
  }, [fetchReviewsStart]);

  return (
    <>
      <div className="flex mb-6 justify-center">
        {reviews &&
          reviews
            .filter((_, idx) => idx < postPerPage)
            .map((review) => <ReviewCard {...review} key={review.id} />)}
      </div>
      {pages >= 2 && (
        <SliderControls
          currentPage={`0${page.toString()}`}
          pages={`0${pages.toString()}`}
          nextClickHandler={() => {}}
          prevClickHandler={() => {}}
        />
      )}
    </>
  );
};

export default ReviewList;

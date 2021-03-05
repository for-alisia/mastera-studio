/** Dependencies */
import { useEffect, useState } from 'react';
import axios from 'axios';

/** Components */
import ReviewCard from '../review-card';
import { SliderControls } from '../../ui';

/** Models */

import { Review } from '../../models';

const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[] | undefined>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Review[]>('http://localhost:3000/reviews');
      setReviews(data);
    })();
  }, []);

  return (
    <>
      <div className="flex mb-6 justify-center">
        {reviews && reviews.map((review: Review) => <ReviewCard {...review} key={review.id} />)}
      </div>

      <SliderControls
        currentPage={1}
        pages={3}
        nextClickHandler={() => {}}
        prevClickHandler={() => {}}
      />
    </>
  );
};

export default ReviewList;

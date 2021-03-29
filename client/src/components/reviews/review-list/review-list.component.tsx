/** Dependencies */
import { useEffect, useState } from 'react';
import axios from 'axios';

/** Components */
import ReviewCard from '../review-card';
import { SliderControls } from '../../ui';

/** Models */
import { Review } from '../../../models/models';

const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[] | undefined>();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Review[]>('http://localhost:3000/reviews');
      setReviews(data);
      setPage(1);
      setPages(Math.ceil(data.length / postPerPage));
    })();
  }, [postPerPage]);

  return (
    <>
      <div className="flex mb-6 justify-center">
        {reviews &&
          reviews
            .filter((_, idx) => idx < postPerPage)
            .map((review: Review) => <ReviewCard {...review} key={review.id} />)}
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

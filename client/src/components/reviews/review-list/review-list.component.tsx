/** Dependencies */
import { useEffect, useState } from 'react';

/** Hooks */
import { useTypedSelector, useActions } from '../../../hooks';

/** Components */
import ReviewCard from '../review-card';
import { SliderControls } from '../../ui';

const ReviewList = () => {
  const [postsPerPage, setPostsPerPage] = useState(3);

  const reviews = useTypedSelector(({ reviews: { data } }) => Object.values(data));
  const page = useTypedSelector(({ reviews: { currentPage } }) => currentPage);
  const pages = useTypedSelector(({ reviews: { totalPages } }) => totalPages);

  const { fetchReviewsStart } = useActions();

  /** Fetch the reviews */
  useEffect(() => {
    fetchReviewsStart(page, postsPerPage);
  }, [fetchReviewsStart, page, postsPerPage]);

  /** Determine reviews per page, based on window size */
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 1024 && window.innerWidth > 640) {
        setPostsPerPage(2);
      } else if (window.innerWidth <= 640) {
        setPostsPerPage(1);
      } else {
        setPostsPerPage(3);
      }
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const nextClickHandler = () => {
    const next = page === pages ? 1 : page + 1;
    fetchReviewsStart(next, postsPerPage);
  };

  const prevClickHandler = () => {
    const prev = page === 1 ? pages : page - 1;
    fetchReviewsStart(prev, postsPerPage);
  };

  return (
    <>
      <div className="flex mb-6 justify-between">
        {reviews && reviews.map((review) => <ReviewCard {...review} key={review.id} />)}
      </div>
      {pages >= 2 && (
        <SliderControls
          currentPage={page < 10 ? `0${page.toString()}` : page.toString()}
          pages={pages < 10 ? `0${pages.toString()}` : pages.toString()}
          nextClickHandler={nextClickHandler}
          prevClickHandler={prevClickHandler}
        />
      )}
    </>
  );
};

export default ReviewList;

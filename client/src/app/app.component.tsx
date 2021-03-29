/** Dependencies */
import { useEffect } from 'react';

/** Store */
import { useTypedSelector, useActions } from '../hooks';

/** Pages */
import { HomePage } from '../pages';

const App: React.FC = () => {
  const reviews = useTypedSelector((state) => state.reviews);
  const { fetchReviewsStart } = useActions();

  useEffect(() => {
    fetchReviewsStart();
  }, [fetchReviewsStart]);

  return (
    <div className="font-primary bg-light-50 h-screen text-dark-50 text-xl tracking-wide font-light">
      <HomePage />
    </div>
  );
};

export default App;

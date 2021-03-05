/** Components */
import { Avatar, Title } from '../../ui';

const ReviewCard: React.FC = () => {
  return (
    <div>
      <Avatar rounded clickHandler={() => console.log('Clicked!')} />
      <Title tag="h4" color="dark-50">
        Anna Block
      </Title>
    </div>
  );
};

export default ReviewCard;

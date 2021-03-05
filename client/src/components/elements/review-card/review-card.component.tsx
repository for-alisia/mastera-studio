/** Components */
import { Avatar, Title, CustomLink } from '../../ui';

/** Models */
import { Review } from '../../models';

const ReviewCard: React.FC<Review> = ({ client, master, content, img, extraImgs }) => {
  return (
    <div className="max-w-33p flex flex-col  items-center p-8">
      <Avatar
        rounded
        clickHandler={() => console.log('Clicked!')}
        imgAlt={`${client} review`}
        imgSrc={img}
        extraImgs={extraImgs}
      />
      <Title tag="h4" color="dark-50" mb="5" alignment="center">
        {client}
      </Title>
      <p className="mb-8">
        Master: <CustomLink clickHandler={() => console.log('Clicked!')}>{master}</CustomLink>
      </p>
      <p className="text-center mb-6 text-base">{content.substring(0, 100)}...</p>
      <CustomLink clickHandler={() => console.log('Clicked!')}>Read more</CustomLink>
    </div>
  );
};

export default ReviewCard;

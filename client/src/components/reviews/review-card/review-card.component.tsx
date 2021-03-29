/** Dependencies */
import { useState } from 'react';
/** Components */
import { Avatar, Title, CustomLink } from '../../ui';
import ReviewModal from '../review-modal';

/** Models */
import { Review } from '../../../models/models';

const ReviewCard: React.FC<Review> = ({ client, master, content, img, extraImgs }) => {
  const [modal, setModal] = useState(false);

  const closeModalHandler = () => {
    console.log('Close modal');
  };

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
      <CustomLink clickHandler={() => setModal(true)}>Read more</CustomLink>
      {modal && (
        <ReviewModal
          modal={{ isOpen: modal, title: client, closeHandler: closeModalHandler, image: img }}
        />
      )}
    </div>
  );
};

export default ReviewCard;

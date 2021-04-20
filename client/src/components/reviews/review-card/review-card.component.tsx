/** Dependencies */
import { useState } from 'react';
/** Components */
import { Avatar, Title, CustomLink } from '../../ui';
import ReviewModal from '../review-modal';

/** Models */
import { Review } from '../../../models/Review.model';

const ReviewCard: React.FC<Review> = ({ client, master, content, img }) => {
  const [modal, setModal] = useState(false);

  const closeModalHandler = () => {
    console.log('Close modal');
  };

  return (
    <div className="xl:max-w-33p lg:max-w-50p sm:max-w-100p  flex flex-col  items-center p-8 sm:p-4 lg:p-8">
      <Avatar
        rounded
        clickHandler={() => console.log('Clicked!')}
        imgAlt={`Отзыв о салоне Mastera Studio клиента ${client}`}
        imgSrc={img.url}
      />
      <Title tag="h4" color="dark-50" mb="5" alignment="center">
        {client}
      </Title>
      <p className="xl:mb-8 lg:mb-6 mb-4">
        Мастер: <CustomLink clickHandler={() => console.log('Clicked!')}>{master.name}</CustomLink>
      </p>
      <p className="text-center mb-6 text-base">{content.substring(0, 100)}...</p>
      <CustomLink clickHandler={() => setModal(true)}>Читать дальше</CustomLink>
      {modal && (
        <ReviewModal
          modal={{ isOpen: modal, title: client, closeHandler: closeModalHandler, image: img.url }}
        />
      )}
    </div>
  );
};

export default ReviewCard;

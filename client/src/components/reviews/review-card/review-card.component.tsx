/** Dependencies */
import { useState } from 'react';
/** Components */
import { Avatar, Title, CustomLink } from '../../ui';
import ReviewModal from '../review-modal';

/** Models */
import { Review } from '../../../models/Review.model';

const ReviewCard: React.FC<Review> = ({ client, master, content, img, original }) => {
  const [reviewModal, setReviewModal] = useState(false);
  const [masterModal, setMasterModal] = useState(false);

  const closeReviewModalHandler = () => {
    setReviewModal(false);
  };

  return (
    <div className="xl:max-w-33p lg:max-w-50p sm:max-w-100p  flex flex-col  items-center p-8 sm:p-4 lg:p-8">
      <Avatar
        rounded
        clickHandler={() => setReviewModal(true)}
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
      <CustomLink clickHandler={() => setReviewModal(true)}>Читать дальше</CustomLink>
      {reviewModal && (
        <ReviewModal
          modal={{
            isOpen: reviewModal,
            title: client,
            closeHandler: closeReviewModalHandler,
            image: img.url,
            ariaLabel: `Прочитать отзыв ${client}`,
          }}
          content={content}
          master={master.name}
          original={original}
        />
      )}
    </div>
  );
};

export default ReviewCard;

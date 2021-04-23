/** Components */
import { Modal, CustomLink, ExternalLink } from '../../ui';

/** Models */
import { IModal } from '../../../models/UIModels';

interface ReviewModalProps {
  modal: IModal;
  content: string;
  master: string;
  original: string;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ modal, content, master, original }) => {
  console.log(modal);
  return (
    <Modal {...modal}>
      <p className="xl:mb-8 mb-4">
        Мастер: <CustomLink clickHandler={() => {}}>{master}</CustomLink>
      </p>
      <p className="xl:mb-8 mb-4">{content}</p>
      <p className="xl:mb-8 mb-4">
        <ExternalLink href={original}>Прочитать отзыв в VK</ExternalLink>
      </p>
    </Modal>
  );
};

export default ReviewModal;

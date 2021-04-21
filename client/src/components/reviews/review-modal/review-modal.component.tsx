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
      <p className="mb-8">
        Мастер: <CustomLink clickHandler={() => {}}>{master}</CustomLink>
      </p>
      <p className="mb-8">{content}</p>
      <ExternalLink href={original}>Прочитать отзыв в VK</ExternalLink>
    </Modal>
  );
};

export default ReviewModal;

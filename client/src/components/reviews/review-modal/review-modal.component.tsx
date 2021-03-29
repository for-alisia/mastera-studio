/** Dependencies */

/** Components */
import { Modal } from '../../ui';

/** Models */
import { IModal } from '../../../models/models';

interface ReviewModalProps {
  modal: IModal;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ modal }) => {
  return (
    <Modal {...modal}>
      <p>Some content here</p>
    </Modal>
  );
};

export default ReviewModal;

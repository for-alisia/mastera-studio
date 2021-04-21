/** Dependencies */
import { Dialog } from '@reach/dialog';

/** Models */
import { IModal } from '../../../models/UIModels';

/** Components */
import Image from '../image';
import Title from '../title';
import CrossControl from '../cross-control';

const Modal: React.FC<IModal> = ({ image, closeHandler, children, title, isOpen, ariaLabel }) => {
  return (
    <Dialog isOpen={isOpen} onDismiss={closeHandler} aria-label={ariaLabel}>
      <div className="flex relative min-h-75vh">
        <CrossControl closeHandler={closeHandler} color="secondary" />

        <div className="max-w-50p">
          <Image src={image} alt={title} />
        </div>
        <div className="max-w-50p p-4 pt-24">
          <Title tag="h5" mb={'8'}>
            {title}
          </Title>
          {children}
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;

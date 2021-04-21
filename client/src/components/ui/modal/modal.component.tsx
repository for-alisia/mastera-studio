/** Dependencies */
import { Dialog } from '@reach/dialog';
import styled from 'styled-components';

/** Models */
import { IModal } from '../../../models/UIModels';

/** Components */
import Image from '../image';
import Title from '../title';

const CloseCross = styled.button`
  span {
    display: block;
    width: 1px;
    height: 60px;
    transform-origin: center center;
    position: absolute;
    top: 0;
    left: 40px;
    transition: all 0.3s ease-out;
  }

  .first {
    transform: rotate(45deg);
  }

  .second {
    transform: rotate(-45deg);
  }

  &:hover .first {
    transform: rotate(45deg) scale(1.2);
  }

  &:hover .second {
    transform: rotate(-45deg) scale(1.2);
  }
`;

const Modal: React.FC<IModal> = ({ image, closeHandler, children, title, isOpen, ariaLabel }) => {
  return (
    <Dialog isOpen={isOpen} onDismiss={closeHandler} aria-label={ariaLabel}>
      <div className="flex relative min-h-75vh">
        <CloseCross
          aria-hidden
          onClick={closeHandler}
          className="absolute top-6 right-6 w-20 h-20 cursor-pointer"
        >
          <span className="bg-secondary-50 first"></span>
          <span className="bg-secondary-50 second"></span>
        </CloseCross>
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

/** Dependencies */
import ReactDOM from 'react-dom';

/** Models */
import { IModal } from '../../../models/models';

/** Components */
import Image from '../image';
import Title from '../title';

const Modal: React.FC<IModal> = ({ image, closeHandler, children, title }) => {
  return ReactDOM.createPortal(
    <div onClick={closeHandler}>
      <div className="absolute inset-0 bg-dark-40 opacity-40"></div>
      <div
        className="absolute max-w-75p h-96 top-1/2 left-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <Image src={image} alt={title} />
        </div>
        <div>
          <Title tag={'h4'} color="dark-50">
            {title}
          </Title>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;

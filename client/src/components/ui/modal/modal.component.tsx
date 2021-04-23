/** Dependencies */
import { Dialog } from '@reach/dialog';

/** Models */
import { IModal } from '../../../models/UIModels';

/** Components */
import Image from '../image';
import Title from '../title';
import CrossControl from '../cross-control';
import StepControl from '../step-control';

const Modal: React.FC<IModal> = ({
  image,
  closeHandler,
  children,
  title,
  isOpen,
  ariaLabel,
  stepControl,
  nextStep,
  prevStep,
}) => {
  return (
    <Dialog isOpen={isOpen} onDismiss={closeHandler} aria-label={ariaLabel}>
      <div className="flex relative min-h-75vh xl:flex-row flex-col">
        <CrossControl closeHandler={closeHandler} color="secondary" />
        <div className="xl:max-w-50p max-h-50vh overflow-hidden">
          <Image src={image} alt={title} />
        </div>
        <div className="xl:max-w-50p p-4 xl:pt-24 flex flex-col justify-between">
          <div>
            <Title tag="h5" mb={'4'}>
              {title}
            </Title>
            {children}
          </div>
          {stepControl && (
            <div className="relative bottom-0">
              <StepControl
                next={nextStep ? nextStep : () => {}}
                prev={prevStep ? prevStep : () => {}}
              />
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;

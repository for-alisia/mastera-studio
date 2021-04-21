/** Dependencies */

/** Components */
import Icon from '../icon';

interface StepControlProps {
  next: () => void;
  prev: () => void;
}

const StepControl: React.FC<StepControlProps> = ({ next, prev }) => {
  // TODO: Change transformation to more fancy stuff
  return (
    <div className="flex justify-between">
      <button onClick={prev} className="focus:outline-primary">
        <Icon name="arrow-left" color="primary" transform="scaleX(1.17)" />
      </button>
      <button onClick={next} className="focus:outline-primary">
        <Icon name="arrow-right" color="primary" transform="scaleX(1.17)" />
      </button>
    </div>
  );
};

export default StepControl;

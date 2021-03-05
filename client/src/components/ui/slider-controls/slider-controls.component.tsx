/** Images */
import { ReactComponent as ArrowLeft } from '../../../assets/arrow-left.icon.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrow-right.icon.svg';

interface SliderControlsProps {
  nextClickHandler: () => void;
  prevClickHandler: () => void;
  currentPage: number;
  pages: number;
}

const SliderControls: React.FC<SliderControlsProps> = ({
  currentPage,
  pages,
  nextClickHandler,
  prevClickHandler,
}) => {
  let arrowClasses =
    'opacity-50 h-full px-7 flex items-center cursor-pointer hover:opacity-70 transition-opacity';
  return (
    <div className="flex items-center justify-between border-dark-50 border h-10 w-96 border-opacity-50 mx-auto">
      <div className={arrowClasses} style={{ borderRight: '1px solid' }} onClick={prevClickHandler}>
        <ArrowLeft />
      </div>
      <div className="opacity-50 text-2xl">
        {currentPage}/{pages}
      </div>
      <div className={arrowClasses} style={{ borderLeft: '1px solid' }} onClick={nextClickHandler}>
        <ArrowRight />
      </div>
    </div>
  );
};

export default SliderControls;

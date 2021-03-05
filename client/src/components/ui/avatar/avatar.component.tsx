/** Dependencies */
import className from 'classnames';
import styled from 'styled-components';

/** Components */
import Image from '../image';

/** Images */
import { ReactComponent as CrossSvg } from '../../../assets/plus.icon.svg';

interface AvatarProps {
  rounded?: boolean;
  clickHandler: () => void;
}

const ImageWrapperStyled = styled.div`
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    background-color: rgba(255, 153, 153, 0.3);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    svg {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const Avatar: React.FC<AvatarProps> = ({ rounded, clickHandler }) => {
  let avatarClasses = className({
    'rounded-full': rounded,
    'overflow-hidden': rounded,
    'w-10/12': rounded,
    'h-10/12': rounded,
    relative: true,
    'cursor-pointer': true,
  });
  let avatarWrapperClasses = `2xl:h-96 2xl:w-96 xl:h-80 xl:w-80 lg:h-72 lg:w-72 md:h-64 md:w-64 h-56 w-56 flex justify-center items-center border-primary-50 border rounded-full`;
  return (
    <div className={avatarWrapperClasses}>
      <ImageWrapperStyled className={avatarClasses} onClick={clickHandler}>
        <CrossSvg />
        <Image src="/images/review1-1x.jpg" alt="Review 1" />
      </ImageWrapperStyled>
    </div>
  );
};

export default Avatar;

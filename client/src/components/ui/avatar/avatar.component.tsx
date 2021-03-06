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
  imgSrc: string;
  imgAlt: string;
  retinaSrc?: string;
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

const Avatar: React.FC<AvatarProps> = ({ rounded, clickHandler, imgSrc, imgAlt }) => {
  let avatarClasses = className({
    'rounded-full': rounded,
    'overflow-hidden': rounded,
    '2xl:h-72 2xl:w-72 xl:h-64 xl:w-64 lg:h-60 lg:w-60 md:h-48 md:w-48 h-60 w-60': true,
    relative: true,
    'cursor-pointer': true,
  });
  let avatarWrapperClasses = `2xl:h-80 2xl:w-80 xl:h-72 xl:w-72 lg:h-64 lg:w-64 md:h-52 md:w-52 h-64 w-64 flex justify-center items-center border-primary-50 border rounded-full mb-10`;
  return (
    <div className={avatarWrapperClasses}>
      <ImageWrapperStyled className={avatarClasses} onClick={clickHandler}>
        <CrossSvg />
        <Image src={imgSrc} alt={imgAlt} />
      </ImageWrapperStyled>
    </div>
  );
};

export default Avatar;

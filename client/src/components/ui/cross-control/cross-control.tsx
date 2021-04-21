/** Dependencies */
import styled from 'styled-components';

/** Models */
import { MainColors } from '../../../models/UIModels';

interface CrossControlProps {
  closeHandler: () => void;
  color?: MainColors;
}

interface ButtonStyledProps {
  color?: MainColors;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: 60px;
  height: 60px;
  top: 16px;
  right: 16px;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 60px;
    background-color: ${(props) => (props.color ? `var(--${props.color})` : 'var(--secondary)')};
    transform-origin: center center;
    position: absolute;
    top: 0;
    left: 30px;
    transition: all 0.3s ease-out;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover:before {
    transform: rotate(45deg) scaleY(1.17);
  }

  &:hover:after {
    transform: rotate(-45deg) scaleY(1.17);
  }
`;

const CrossControl: React.FC<CrossControlProps> = ({ closeHandler, color }) => {
  return (
    <ButtonStyled
      aria-hidden
      onClick={closeHandler}
      className="absolute cursor-pointer focus:outline-secondary"
      color={color}
    />
  );
};

export default CrossControl;

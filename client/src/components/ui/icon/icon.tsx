/** Dependencies */
import { ReactSVG } from 'react-svg';
import styled, { css } from 'styled-components';

/** Models */
import { MainColors } from '../../../models/UIModels';

interface IconProps {
  name: string;
  color?: MainColors;
  size?: number;
  transform?: string;
}

interface StyledIconProps {
  color?: MainColors;
  size?: number;
  transform?: string;
}

const StyledIcon = styled(ReactSVG)<StyledIconProps>`
  svg {
    cursor: pointer;
    transition: transform 0.3s ease-out;
    ${({ size }) =>
      size &&
      css`
        width: ${size};
        height: ${size};
      `}
  }
  path {
    fill: ${({ color }) => (color ? 'var(--' + color + ')' : 'var(--primary)')};
  }

  svg:hover {
    ${({ transform }) =>
      transform &&
      css`
        transform: ${transform};
      `}
  }
`;

const Icon: React.FC<IconProps> = ({ name, color, size, transform }) => (
  <StyledIcon src={`/icons/${name}.icon.svg`} color={color} size={size} transform={transform} />
);

export default Icon;

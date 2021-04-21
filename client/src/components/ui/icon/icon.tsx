/** Dependencies */
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
}

const StyledIcon = styled(ReactSVG)<{ color: string }>`
  path {
    fill: ${(props) => props.color};
  }
`;

const Icon: React.FC<IconProps> = ({ name, color, size }) => (
  <StyledIcon src={`/icons/${name}.icon.svg`} color={color} />
);

export default Icon;

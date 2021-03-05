/** Dependencies */
import styled from 'styled-components';

interface ButtonProps {
  type?: 'inverted';
}

const ButtonStyled = styled.button`
  font-size: 14px;
`;

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;

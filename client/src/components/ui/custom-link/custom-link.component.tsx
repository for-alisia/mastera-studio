/** Dependencies */
import styled from 'styled-components';

const SpanStyled = styled.span`
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    transform: scale(0);
    transition: all 0.3s ease;
  }

  &:hover::before {
    transform: scale(1);
  }
`;

interface CustomLinkProps {
  clickHandler: () => void;
}

const CustomLimk: React.FC<CustomLinkProps> = ({ children, clickHandler }) => {
  return (
    <SpanStyled
      className="text-secondary-40 ml-3 hover:text-secondary-50 transition-colors cursor-pointer relative inline-block"
      onClick={clickHandler}
    >
      {children}
    </SpanStyled>
  );
};

export default CustomLimk;

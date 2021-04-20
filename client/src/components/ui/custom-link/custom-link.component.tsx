/** Dependencies */
import styled from 'styled-components';

const SpanStyled = styled.span`
  transition: all 0.4s ease-out;
  .decor-top,
  .decor-bottom {
    transform: scaleX(0);
    transition: all 0.4s ease-out;
    transform-origin: left;
    height: 1px;
  }
  &:hover .decor-top,
  &:hover .decor-bottom {
    transform: scaleX(1);
  }

  .decor-bottom {
    transform-origin: right;
    bottom: 0;
  }
`;

interface CustomLinkProps {
  clickHandler: () => void;
}

const CustomLimk: React.FC<CustomLinkProps> = ({ children, clickHandler }) => {
  return (
    <SpanStyled
      className="text-secondary-40 cursor-pointer relative inline-block"
      onClick={clickHandler}
    >
      <div className="decor-top absolute w-full bg-secondary-40"></div>
      <div className="decor-bottom absolute w-full bg-secondary-40"></div>
      {children}
    </SpanStyled>
  );
};

export default CustomLimk;

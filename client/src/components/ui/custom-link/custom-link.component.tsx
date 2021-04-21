/** Dependencies */
import styled from 'styled-components';

const SpanStyled = styled.button`
  transition: all 0.4s ease-out;
  .decor-top,
  .decor-bottom {
    display: block;
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

const CustomLink: React.FC<CustomLinkProps> = ({ children, clickHandler }) => {
  return (
    <SpanStyled
      className="text-secondary-40 cursor-pointer relative inline-block "
      onClick={clickHandler}
    >
      <span className="decor-top absolute w-full bg-secondary-40"></span>
      <span className="decor-bottom absolute w-full bg-secondary-40"></span>
      {children}
    </SpanStyled>
  );
};

export default CustomLink;

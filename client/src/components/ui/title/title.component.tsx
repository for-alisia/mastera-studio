/** Dependencies */
import classNames from 'classnames';
interface TitleProps {
  tag: string;
  color?: string;
  mb?: string;
  alignment?: 'left' | 'center' | 'right';
}

const Title: React.FC<TitleProps> = ({ children, tag, color, mb, alignment }) => {
  let titleClasses = classNames({
    uppercase: true,
    'xl:text-2xl lg:text-xl md:text-lg sm:text-base': true,
    'font-medium': true,
    'text-secondary-50': !color,
    'tracking-wide': true,
    'xl:mb-20 lg:mb-14 md:mb-10 mb-6': !mb,
  });
  if (color) titleClasses += ` text-${color}`;
  if (mb) titleClasses += ` lg:mb-${mb} mb-${+mb - 2}`;
  if (alignment) titleClasses += ` text-${alignment}`;

  switch (tag) {
    case 'h1':
      return <h1 className={titleClasses}>{children}</h1>;
    case 'h2':
      return <h2 className={titleClasses}>{children}</h2>;
    case 'h3':
      return <h3 className={titleClasses}>{children}</h3>;
    case 'h4':
      return <h4 className={titleClasses}>{children}</h4>;
    case 'h5':
      return <h5 className={titleClasses}>{children}</h5>;
    case 'h6':
      return <h6 className={titleClasses}>{children}</h6>;
    default:
      return <div>{children}</div>;
  }
};

export default Title;

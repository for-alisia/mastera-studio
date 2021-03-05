/** Dependencies */
import classNames from 'classnames';
interface TitleProps {
  tag: string;
  color?: string;
}

const Title: React.FC<TitleProps> = ({ children, tag, color }) => {
  let titleClasses = classNames({
    uppercase: true,
    'text-2xl': true,
    'font-semibold': true,
    'text-secondary-50': !color,
    'tracking-wide': true,
    'mb-12': true,
  });
  if (color) titleClasses += ` text-${color}`;

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

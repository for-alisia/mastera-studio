interface ExternalLinkProps {
  href: string;
}
const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-secondary-50 underline hover:text-primary-70 transition-colors duration-300 ease-out focus:outline-none focus:ring-1 focus:ring-secondary-50 focus:no-underline"
      style={{ textUnderlineOffset: '4px' }}
    >
      {children}
    </a>
  );
};

export default ExternalLink;

interface ExternalLinkProps {
  href: string;
}
const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  // TODO: Create fancy hover effect for this link;
  return (
    <a
      href={href}
      className="text-secondary-50 underline focus:outline-secondary focus:no-underline"
      style={{ textUnderlineOffset: '4px' }}
    >
      {children}
    </a>
  );
};

export default ExternalLink;

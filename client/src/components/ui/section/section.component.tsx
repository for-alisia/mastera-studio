interface SectionProps {
  background?: string;
}

const Section: React.FC<SectionProps> = ({ children, background }) => {
  return <section className={`py-36 ${background && 'bg-' + background}`}>{children}</section>;
};

export default Section;

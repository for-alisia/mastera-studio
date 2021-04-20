interface SectionProps {
  background?: string;
}

const Section: React.FC<SectionProps> = ({ children, background }) => {
  return (
    <section className={`xl:py-36 lg:py-24 md:py-12 sm:py-6 ${background && 'bg-' + background}`}>
      {children}
    </section>
  );
};

export default Section;

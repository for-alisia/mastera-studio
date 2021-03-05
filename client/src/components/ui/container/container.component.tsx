interface ContainerProps {
  fluid?: boolean;
}
const Container: React.FC<ContainerProps> = ({ children, fluid }) => {
  return (
    <div className={`container mx-auto ${!fluid && 'px-6 md:px-10 lg:px-14 xl:px-20'}`}>
      {children}
    </div>
  );
};

export default Container;

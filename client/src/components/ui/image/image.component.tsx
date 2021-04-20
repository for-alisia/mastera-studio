/** Models */
interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img alt={alt} src={src} className="object-cover object-center w-full h-full" />;
};

export default Image;

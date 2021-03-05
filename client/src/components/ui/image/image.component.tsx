/** Models */
import { AdditionalImage } from '../../models';
interface ImageProps {
  src: string;
  alt: string;
  retinaSrc?: string;
  sources?: AdditionalImage[];
}

const Image: React.FC<ImageProps> = ({ src, alt, retinaSrc, sources }) => {
  return (
    <picture>
      {sources &&
        sources.map(({ breakpoint, src, retinaSrc }) => (
          <source srcSet={`${src} 1x, ${retinaSrc} 2x`} media={breakpoint} />
        ))}

      <img
        srcSet={retinaSrc && `${src} 1x, ${retinaSrc} 2x`}
        alt={alt}
        src={src}
        className="object-cover object-center w-full"
      />
    </picture>
  );
};

export default Image;

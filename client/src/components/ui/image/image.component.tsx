interface AdditionalImage {
  breakpoint: string;
  src: string;
  retinaSrc: string;
}

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

      <img srcSet={retinaSrc && `${src} 1x, ${retinaSrc} 2x`} alt={alt} src={src} />
    </picture>
  );
};

export default Image;

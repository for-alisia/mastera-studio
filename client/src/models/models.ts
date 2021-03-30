/** Set of sources for the Image component (responsive img) */
export interface AdditionalImage {
  breakpoint: string;
  src: string;
  retinaSrc: string;
}

/** TODO: removed to a separate file */
export interface Review {
  id: number;
  client: string;
  master: string;
  content: string;
  img: string;
  extraImgs?: AdditionalImage[];
}

/** TODO: remove to UI file */
export interface IModal {
  isOpen: boolean;
  image: string;
  title: string;
  closeHandler: () => void;
}

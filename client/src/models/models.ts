export interface AdditionalImage {
  breakpoint: string;
  src: string;
  retinaSrc: string;
}

export interface Review {
  id: number;
  client: string;
  master: string;
  content: string;
  img: string;
  extraImgs?: AdditionalImage[];
}

export interface IModal {
  isOpen: boolean;
  image: string;
  title: string;
  closeHandler: () => void;
}

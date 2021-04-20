export interface CloudImage {
  id: string;
  alternativeText: string;
  caption: string;
  ext: string;
  height: number;
  width: number;
  name: string;
  url: string;
  formats: {
    [key in FormatsOfImage]: {
      ext: string;
      height: number;
      width: number;
      url: string;
    };
  };
}

type FormatsOfImage = 'medium' | 'small' | 'thumbnail';

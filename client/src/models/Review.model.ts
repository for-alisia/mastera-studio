import { AdditionalImage } from './models';

export interface Review {
  id: number;
  client: string;
  master: string;
  content: string;
  img: string;
  extraImgs?: AdditionalImage[];
}

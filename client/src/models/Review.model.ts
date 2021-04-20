import { CloudImage } from './CloudImage.model';
import { Master } from './Master.model';
export interface Review {
  id: string;
  client: string;
  master: Master;
  content: string;
  img: CloudImage;
  original: string;
  createdAt?: string;
}

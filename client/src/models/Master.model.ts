import { CloudImage } from './CloudImage.model';

export interface Master {
  id: string;
  name: string;
  position: string;
  description: string;
  img: CloudImage;
}

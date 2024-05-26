import { ISong } from './ISong';

export interface IArtist {
  id: number;
  name: string;
  songs?: ISong[];
}

import { IArtist } from './IArtist';
import { IComment } from './IComment';

export interface ISong {
  id: number;
  title: string;
  artist?: IArtist;
  comments?: IComment[];
}

import { IArtist } from './IArtist';
import { IUserSong } from './IUserSong';
import { IComment } from './IComment';
import { ISongProgress } from './ISongProgress';

export interface ISong {
  id: number;
  title: string;
  artist?: IArtist;
  comments?: IComment[];
}

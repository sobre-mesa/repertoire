import { IUser } from './IUser';
import { ISong } from './ISong';

export interface IComment {
  id: number;
  content: string;
  createdAt: Date;
  user?: IUser;
  song?: ISong;
}

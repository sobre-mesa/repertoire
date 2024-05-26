import { IUser } from './IUser';
import { ISong } from './ISong';
import { IInstrument } from './IInstrument';

export interface ISongProgress {
  id: number;
  completion: number;
  user?: IUser;
  song?: ISong;
  instrument?: IInstrument;
}

import { IArtist } from "./IArtist";
import { IComment } from "./IComment";
import { IInstrument } from "./IInstrument";
import { ISong } from "./ISong";
import { ISongProgress } from "./ISongProgress";
import { IUser } from "./IUser";

export type PostRequestBody<T> = Omit<T, 'id' | 'createdAt'>;

export type GenericPOSTData =
  | PostRequestBody<IUser>
  | PostRequestBody<IArtist>
  | PostRequestBody<ISong>
  | PostRequestBody<ISongProgress>
  | PostRequestBody<IInstrument>
  | PostRequestBody<IComment>


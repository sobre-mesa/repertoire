export interface IUser {
  id: number;
  email: string;
  name?: string;
  password: string;
  songs?: IUserSong[];
  comments?: IComment[];
  songProgress?: ISongProgress[];
}

import { SongProgress } from "@prisma/client";
export interface IUser {
  id: number;
  email: string;
  name?: string | null;
  password: string;
  comments?: Comment[];
  songProgress?: SongProgress[];
}

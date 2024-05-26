// pages/index.js
import prisma from "@/lib/prisma";
import { DataDisplay, DataDisplayProps } from "@/components/DataDisplay"
import { IUser } from "@/types/IUser";
import { IArtist } from "@/types/IArtist";
import { ISong } from "@/types/ISong";
import { IInstrument } from "@/types/IInstrument";
import { ISongProgress } from "@/types/ISongProgress";
import { IComment } from "@/types/IComment";
export const metadata = {
  title: 'Home Page',
  description: 'This is the home page',
};

async function getData() {
  const users: IUser[]= await prisma.user.findMany();
  const artists: IArtist[] = await prisma.artist.findMany();
  const songs: ISong[] = await prisma.song.findMany({
    include: {
      artist: true,
    },
  });
  const instruments: IInstrument[] = await prisma.instrument.findMany();
  const songProgress: ISongProgress[] = await prisma.songProgress.findMany();
  const comments: IComment[] = await prisma.comment.findMany();

  // Map songs to include artist name
  const mappedSongs = songs.map(song => ({
    ...song,
    artistName: song?.artist?.name,
  }));

  return { users, artists, songs: mappedSongs, instruments, songProgress, comments };
}

export default async function Home() {
  const dataProps: DataDisplayProps= await getData();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <DataDisplay
        {...dataProps} />
    </div>
  );
}

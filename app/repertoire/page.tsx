// pages/index.js
import React from 'react';
import prisma from "@/lib/prisma";
import { IInstrumentProgressRecord, IRepertoire, IRepertoireArtist, IRepertoireSong } from '@/types/IRepertoire';
import RepertoireDisplay from '@/components/Repertoire/Repertoire';

export const metadata = {
  title: 'Home Page',
  description: 'This is the home page',
};

async function getData(currentUserId: number) {
  const songProgressWithDetails = await prisma.songProgress.findMany({
    where: {
      userId: currentUserId
    },
    include: {
      song: {
        select: {
          id: true,
          title: true,
          artist: {
            select: {
              name: true,
              id: true
            }
          }
        }
      },
      instrument: {
        select: {
          id: true,
          name: true
        }
      },
      user: {
        select: {
          email: true,
          name: true
        }
      }
    }
  });
  return songProgressWithDetails;
}

export default async function Home() {


  const data = await getData(1);

  const repertoire: IRepertoire = data.reduce((acc, curr) => {
    const artists: IRepertoireArtist[] = acc.artists
    const indexOfArtist = artists.findIndex((x=>x.artist.id===curr.song.artist.id))
    const instProgress: IInstrumentProgressRecord = {
      instrument: curr.instrument,
      percentage: curr.completion
    }
    const song: IRepertoireSong = {
      song: curr.song,
      instrumentProgress: [instProgress],
    }
    if(indexOfArtist >= 0) {
      const foundArtist = artists[indexOfArtist];
      const indexOfSong = foundArtist.songs.findIndex(x=>x.song.id === curr.song.id) 
      if(indexOfSong >= 0) {
        foundArtist.songs[indexOfSong].instrumentProgress.push(instProgress)
      }
      else {
        foundArtist.songs.push(song)
      }
    }
    else {
      artists.push({
        artist: curr.song.artist,
        songs: [song],
      })
    }
    return acc
  }, {artists: []})

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <RepertoireDisplay repertoire={repertoire} />
    </div>
  );
}

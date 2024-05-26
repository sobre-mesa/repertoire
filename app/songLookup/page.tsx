import React from 'react';
import prisma from "@/lib/prisma";
import { SongTable } from '@/components/AddProgress/SongTable';
import { ISong } from '@/types/ISong';

export const metadata = {
  title: 'Home Page',
  description: 'This is the home page',
};

async function getData(): Promise<ISong[]> {
  return await prisma.song.findMany({
    include: {
      artist: {
        select: {
          name: true, 
          id: true
        }
      }
    }
  });
}

export default async function Home() {
  const songs = await getData();
  return (
    <div className="container mx-auto p-4">
      <SongTable songs={songs} />
    </div>
  );
}

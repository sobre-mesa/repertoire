// components/DataDisplay.js
import { IArtist } from '@/types/IArtist';
import { IComment } from '@/types/IComment';
import { IInstrument } from '@/types/IInstrument';
import { ISong } from '@/types/ISong';
import { ISongProgress } from '@/types/ISongProgress';
import { IUser } from '@/types/IUser';
import React from 'react';
export interface DataDisplayProps {
  users: IUser[]
  artists: IArtist[]
  songs: ISong[]
  instruments: IInstrument[]
  songProgress: ISongProgress[]
  comments: IComment[]
}

export const DataDisplay = ({ users, artists, songs, instruments, songProgress, comments } : DataDisplayProps) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} className="mb-2 p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Artists</h2>
        <ul>
          {artists.map(artist => (
            <li key={artist.id} className="mb-2 p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">{artist.name}</h3>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Songs</h2>
        <ul>
          {songs.map(song => (
            <li key={song.id} className="mb-2 p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">{song.title}</h3>
              <p>{song?.artist?.name}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Instruments</h2>
        <ul>
          {instruments.map(instrument => (
            <li key={instrument.id} className="mb-2 p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">{instrument.name}</h3>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Song Progress</h2>
        <ul>
          {songProgress.map(progress => (
            <li key={progress.id} className="mb-2 p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">Song ID: {progress?.song?.id}</h3>
              <p>Progress: {progress.completion}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        <ul>
          {comments.map(comment => (
            <li key={comment.id} className="mb-2 p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">Comment by: {comment?.user?.id}</h3>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};


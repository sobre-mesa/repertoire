'use client'
import { ISong } from "@/types/ISong";
import { useState } from "react";
import { AddSongButton } from "./AddSongButton";
import { SongRow } from "./SongRow";

export interface ISongTableProps {
    songs: ISong[];
}


export const SongTable: React.FC<ISongTableProps> = ({ songs }) => {
    const [foundSongs, setFoundSongs] = useState<ISong[]>(songs);
    const matchingSongOrArtist = (song: ISong, searchTerm: string) => song.title.includes(searchTerm) || song.artist?.name.includes(searchTerm);

    const handleAddSong = () => {
        // Function to handle adding a new song
        console.log("Add new song");
    };

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <textarea
                    onChange={(e) => setFoundSongs(songs.filter((x) => matchingSongOrArtist(x, e.target.value)))}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Search Song"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 text-left">Song</th>
                            <th className="py-2 px-4 text-left">Artist</th>
                            <th className="py-2 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {foundSongs.length > 0 ? (
                            foundSongs.map((song) => (
                                <SongRow key={song.id} song={song} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="text-center py-4 bg-red-100 text-red-600">
                                    No songs found
                                    <div className="mt-2 flex justify-center">
                                        <AddSongButton onClick={handleAddSong} />
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

import React from "react";
import { AddSongButton } from "./AddSongButton";
import { ISong } from "@/types/ISong";

interface ISongRowProps {
    song: ISong;
}
export const SongRow: React.FC<ISongRowProps> = ({ song }) => (
    <tr className="border-b hover:bg-gray-100 transition duration-300">
        <td className="py-2 px-4">{song?.title}</td>
        <td className="py-2 px-4">{song?.artist?.name}</td>
        <td className="py-2 px-4">
            <AddSongButton />
        </td>
    </tr>
);


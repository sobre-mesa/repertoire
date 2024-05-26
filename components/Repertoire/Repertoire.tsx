import React from 'react';
import { IRepertoire } from '@/types/IRepertoire'

interface RepertoireDisplayProps {
    repertoire: IRepertoire;
}

const RepertoireDisplay: React.FC<RepertoireDisplayProps> = ({ repertoire }) => {
    return (
        <div className="repertoire-display space-y-6">
            {repertoire.artists.map((artistData, artistIndex) => (
                <div key={artistIndex} className="artist-display bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">{artistData.artist.name}</h2>
                    {artistData.songs.map((songData, songIndex) => (
                        <div key={songIndex} className="song-display mb-4">
                            <h3 className="text-lg font-medium">{songData.song.title}</h3>
                            <ul className="mt-2">
                                {songData.instrumentProgress.map((progress, progressIndex) => (
                                    <li key={progressIndex} className="flex items-center mb-2">
                                        <span className="w-1/3">{progress.instrument.name}:</span>
                                        <div className="w-2/3 bg-gray-200 rounded-full h-4 overflow-hidden">
                                            <div 
                                                className="bg-blue-500 h-full text-xs text-white text-center"
                                                style={{ width: `${progress.percentage * 100}%` }}
                                            >
                                                {progress.percentage * 100}%
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default RepertoireDisplay;

import {IArtist} from './IArtist'
import {ISong} from './ISong'
import {IInstrument} from './IInstrument'
export interface IRepertoire {
    artists: IRepertoireArtist[]
}

export interface IRepertoireArtist{
    artist: IArtist
    songs: IRepertoireSong[]
}

export interface IRepertoireSong {
    song: ISong
    instrumentProgress: IInstrumentProgressRecord[]
}

export interface IInstrumentProgressRecord{
    instrument: IInstrument
    percentage: number
}
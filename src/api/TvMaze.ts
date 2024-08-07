import axios from "axios"

const showId = import.meta.env.VITE_SHOW_ID

interface TvShowInfoInterface {
    id: number,
    url: string,
    name: string,
    type: string,
    language: string,
    genres: string[],
    status: string,
    runtime: number,
    averageRuntime: number,
    premiered: string,
    ended: string,
    officialSite: string,
    schedule:{
        time: string,
        days: string[]
    },
    rating:{
        average: number
    },
    weight: number,
    network:{
        id: number,
        name: string,
        country:{
            name: string,
            code: string,
            timezone: string
        },
        officialSite: string
    },
    webChannel:unknown,
    dvdCountry:unknown,
    externals: unknown,
    image:{
        medium: string,
        original: string
    },
    summary: string,
    updated:number,
    _links: unknown
}

interface TvEpisodeInfoInterface {
    id: number,
    name: string,
    season: 1,
    number:1,
    airdate: string,
    airtime: string,
    airstamp: string
    rating:{
        average: number
    },
    image:{
        medium: string,
        original: string
    }
    summary: string
}

export async function fetchTvShowInfo(){
    try{
        const { data }  = await axios.get(`https://api.tvmaze.com/shows/${showId}`)
        return data as TvShowInfoInterface;
    }catch(error){
        console.error(error)
        return Error("TvMaze fetch error")
    }
}

export async function fetchEpisodeList(){
    try{
        const { data }  = await axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`)
        return data as TvEpisodeInfoInterface[];
    }catch(error){
        console.error(error)
        return Error("TvMaze fetch error")
    }
}
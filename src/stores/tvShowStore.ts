import { defineStore } from 'pinia'
import { fetchTvShowInfo, fetchEpisodeList } from '../api/TvMaze'

interface TvShowInterface {
    title: string,
    description: string,
    coverImageUrl: string,
    episodeList: EpisodeInterface[] 
}

interface EpisodeInterface{
    title: string,
    summary: string,
    episodeCoverImageUrl: string
}

const tvShowStore = defineStore('tvShow', {
    state: ()=>{
        return {
            title: "",
            description: "",
            coverImageUrl: "",
            episodeList: []
        } as TvShowInterface
    },

    actions: {
        async fetchTvShow(){
            const tvShow = await fetchTvShowInfo()
            if(tvShow instanceof Error) return 

            this.title = tvShow.name
            this.description = tvShow.summary
            this.coverImageUrl = tvShow.image.medium
        },
        async fetchTvEpisodes(){
            const episodeList = await fetchEpisodeList()
            if(episodeList instanceof Error) return 

            this.episodeList = episodeList.map((ep)=>({
                title: ep.name,
                summary: ep.summary,
                episodeCoverImageUrl: ep.image.medium
            }))
        }
    }
})

export default tvShowStore
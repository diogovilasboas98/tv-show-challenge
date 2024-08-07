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
    episodeCoverImageUrl: string,
    season: number,
    number: number
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

    getters:{
        TvShowSeasons(state){
            //Get different seasons
            return Array.from(new Set(state.episodeList.map(ep=>ep.season)))
        },

        getEpisodesBySeason(state){
            //Filter by season
            return (season:number)=> state.episodeList.filter(ep=>ep.season == season)
        },

        getEpisodeBySeasonEpNumber(state){
            return (season:number, epNumber:number)=>{
                return state.episodeList.find(ep=>{
                    return ep.season == season && ep.number == epNumber
                })
            }
        }
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
                episodeCoverImageUrl: ep.image?.medium ?? '/No_Image_Available.jpg',
                season: ep.season,
                number: ep.number
            }))
        }
    }
})

export default tvShowStore
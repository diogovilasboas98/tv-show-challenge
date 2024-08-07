<script lang="ts" setup>
import useTvShowStore from '../../stores/tvShowStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const store = useTvShowStore()
const router = useRouter()

store.fetchTvShow()
store.fetchTvEpisodes()

const currSeason = ref('1')

const seasonOnClick = (tab:number)=>{
    currSeason.value = tab.toString()
}

const openEpisode = (ep:number)=>{
    if (!ep) return
    if(typeof ep != 'number') return
    router.push('/'+ currSeason.value +'/'+ep)
}

</script>

<template>
    <div>
        <h1 data-test="title" class="mb-5">{{ store.title }}</h1>
        <div class="flex flex-col sm:flex-row sm:items-center p-6 w-[70dvw] max-w-[1216px] mx-auto">
            <PVImage class="flex flex-row md:flex-col items-start mr-7" data-test="coverImage" imageClass="my-5 mx-auto" :src="store.coverImageUrl" :alt="store.title" width="250" />
            <div data-test="description" class="description flex flex-row md:flex-col w-100" v-html="store.description"/>
        </div>
        

        <PVTabs class="tabs" scrollable :value="currSeason">
            <PVTabList data-test="tabs">
                <PVTab  @click="seasonOnClick(tab)" v-for="(tab,index) in store.TvShowSeasons" :key="'tab-'+ index" :value="tab.toString()">
                    Season {{tab}}
                </PVTab>
            </PVTabList>
        </PVTabs>
        
        <PVDataView :value="store.getEpisodesBySeason(+currSeason)">
            <template #list="slotProps">
                <div data-test="episodes" class="flex flex-col">
                    <div @click="openEpisode(item.number)" v-for="(item, index) in slotProps.items" class="episode cursor-pointer" :key="index">
                        <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                    <div>
                                        <div class="title text-lg font-medium mt-2">{{ item.number }}. {{ item.title }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="md:w-40 relative">
                                <PVImage class="block xl:block mx-auto rounded w-full" :src="item.episodeCoverImageUrl" :imageStyle="{height:'100px'}" width="250" :alt="item.name" />
                                <div class="dark:bg-surface-900 absolute rounded-border" style="left: 4px; top: 4px">
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </template>
        </PVDataView>
    </div>
</template>

<style scoped>
@import url("./tvShow.css");
</style>
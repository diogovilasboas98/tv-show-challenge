<script lang="ts" setup>
import useTvShowStore from '../../stores/tvShowStore';
import { useRouter, useRoute } from 'vue-router';

const store = useTvShowStore()
const router = useRouter()
const route = useRoute()

store.fetchTvEpisodes()
if(!route?.params.season && route?.params.ep){
    router.push('/')
}

</script>
<template>
    <div>
        <h1 data-test="title" class="mb-5">{{ store.getEpisodeBySeasonEpNumber(+route.params.season, +route.params.ep )?.title }}</h1>
        <PVImage data-test="coverImage" imageClass="my-5 mx-auto" :src="store.getEpisodeBySeasonEpNumber(+route.params.season, +route.params.ep )?.episodeCoverImageUrl" :alt="store.getEpisodeBySeasonEpNumber(+route.params.season, +route.params.ep )?.title" width="400" />
        
        <div data-test="description" class="description mx-auto mb-5 w-[70vw]" v-html="store.getEpisodeBySeasonEpNumber(+route.params.season, +route.params.ep )?.summary"/>

        <PVButton class=" mx-auto mt-5" @click="router.go(-1)">
            <i class="pi pi-arrow-left"></i>
        </PVButton>
    </div>
</template>
<style scoped>
@import './episode.css';
</style>
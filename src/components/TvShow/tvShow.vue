<script lang="ts" setup>
import usetvShowStore from '../../stores/tvShowStore';

const store = usetvShowStore()

store.fetchTvShow()
store.fetchTvEpisodes()

</script>

<template>
    TvShow

    {{ store.title }}
    {{ store.description }}
    {{ store.coverImageUrl }}
    {{ store.episodeList }}

</template>
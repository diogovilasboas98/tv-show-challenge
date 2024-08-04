import { createWebHistory, createRouter } from 'vue-router'

import EpisodeView from '../components/Episode/episode.vue'
import TvShowView from '../components/TvShow/tvShow.vue'

const routes = [
  { path: '/', component: TvShowView },
  { path: '/:ep', component: EpisodeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
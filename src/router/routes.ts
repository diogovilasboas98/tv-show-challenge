import { createWebHistory, createRouter } from 'vue-router'

import EpisodeView from '../components/Episode/Episode.vue'
import TvShowView from '../components/TvShow/TvShow.vue'

const routes = [
  { path: '/', component: TvShowView },
  { path: '/:ep', component: EpisodeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
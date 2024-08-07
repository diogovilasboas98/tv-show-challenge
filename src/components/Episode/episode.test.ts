import { expect, it, describe, beforeEach} from 'vitest'
import { mount } from '@vue/test-utils'
import Episode from './episode.vue'
import { createPinia, setActivePinia } from 'pinia'
import PVImage from 'primevue/image'
import PVButton from 'primevue/button'
import { createTestingPinia } from '@pinia/testing'
import router from '../../router/routes'
// import {useRoute} from 'vue-router'
// import { nextTick } from 'vue'
// import usetvShowStore from '../../stores/tvShowStore'

const components = {
    PVImage,
    PVButton
}

describe('Episode', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    
    it('Loads succefully', ()=>{
        const wrapper = mount(Episode,{
            global:{
                components:components,
                plugins:[
                    createTestingPinia(),
                    router
                ]
            }
        })
        
        expect(wrapper.exists()).toBeTruthy()
    })

    // I didn't manage to find a way to mock the route to have the params of the route /:season/:ep to test properly

    /* it('Title shows succefully', async ()=>{
        const route = useRoute()
       
        const wrapper = mount(Episode,{
            global:{
                components:components,
                plugins:[
                    createTestingPinia(),
                    router,
                    route
                ]
            }
        })
        
        const store = usetvShowStore()
        route.params = {
            season: '1',
            number: '1'
        }
        store.episodeList = [{
            title: 'test title episode',
            summary: 'test',
            episodeCoverImageUrl: 'url',
            season: 1,
            number: 1
        }]
        
        await nextTick();
        const title = wrapper.get('[data-test="title"]')
        console.log(title.html())
        expect(title.text()).toBe('test title episode')
    }) */
})

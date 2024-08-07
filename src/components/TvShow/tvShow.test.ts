import { expect, it, describe, beforeEach} from 'vitest'
import { mount } from '@vue/test-utils'
import TvShow from './tvShow.vue'
import usetvShowStore from '../../stores/tvShowStore';

import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import PrimeVue from 'primevue/config';

import PVImage from 'primevue/image'
import PVTabs from 'primevue/tabs'
import PVTab from 'primevue/tab'
//import PVTabList from 'primevue/tablist'
import PVDataView from 'primevue/dataview'
import { nextTick } from 'vue';
import router from '../../router/routes'


const components = {
    PVImage,
    PVTab,
    PVTabs,
    PVDataView,
    //PVTabList
}

const originalConsoleError = console.error;
const jsDomCssError = "Error: Could not parse CSS stylesheet";
console.error = (...params) => {
  if (!params.find((p) => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params);
  }
};

describe('TV Show', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    
    it('Loads succefully', ()=>{
        const wrapper = mount(TvShow,{
            global:{
                components:components,
                plugins:[
                    createTestingPinia(),
                    router,
                    PrimeVue
                ]
            }
        })
        
        expect(wrapper).toBeTruthy()
    })

    it('Has title', async ()=>{
        const wrapper = mount(TvShow,{
            global:{
                components:components,
                plugins: [
                    createTestingPinia(),
                    router,
                    PrimeVue
                ],
            }
        })
        const store = usetvShowStore()
        store.title= "Test Title"
        const title = wrapper.get('[data-test="title"]')
        await nextTick();
        expect(title.text()).toBe(store.title)
    }),

    it('Has description', async ()=>{
        const wrapper = mount(TvShow,{
            global:{
                components:components,
                plugins: [
                    createTestingPinia(),
                    router,
                    PrimeVue
                ],
            }
        })
        const store = usetvShowStore()
        store.description= "Test description"
        const description = wrapper.get('[data-test="description"]')
        await nextTick();
        expect(description.text()).toBe(store.description)
    }),

    it('Has cover image', async ()=>{
        const wrapper = mount(TvShow,{
            global:{
                components:components,
                plugins: [
                    createTestingPinia(),
                    router,
                    PrimeVue
                ],
            }
        })
        const store = usetvShowStore()
        store.coverImageUrl= "image.png"
        const coverImage = wrapper.get('[data-test="coverImage"]')
        await nextTick();
        expect(coverImage.element.attributes.getNamedItem('src')?.value).toBe(store.coverImageUrl)
    })

    it('Has seasons', async()=>{
        const wrapper = mount(TvShow,{
            global:{
                components:components,
                plugins: [
                    createTestingPinia(),
                    router,
                    PrimeVue
                ],
            }
        })
        const store = usetvShowStore()
        store.episodeList= [{
            title: 'test',
            summary: 'test',
            episodeCoverImageUrl: 'url',
            season: 1,
            number: 1
        },
        {
            title: 'test',
            summary: 'test',
            episodeCoverImageUrl: 'url',
            season: 1,
            number: 1
        },{
            title: 'test',
            summary: 'test',
            episodeCoverImageUrl: 'url',
            season: 2,
            number: 1
        }]
        const seasonTabs = wrapper.get('[data-test="tabs"]')
        await nextTick();
        expect(seasonTabs.element.children.length).toBe(2)
    }),
    it('Has episodes', async()=>{
        const wrapper = mount(TvShow,{
            global:{
                components:components,
                plugins: [
                    createTestingPinia(),
                    router,
                    PrimeVue
                ],
            }
        })
        const store = usetvShowStore()
        store.episodeList= [{
            title: 'test',
            summary: 'test',
            episodeCoverImageUrl: 'url',
            season: 1,
            number: 1
        },
        {
            title: 'test',
            summary: 'test',
            episodeCoverImageUrl: 'url',
            season: 1,
            number: 1
        },{
            title: 'test',
            summary: 'test',
            episodeCoverImageUrl: 'url',
            season: 2,
            number: 1
        }]
        
        await nextTick();
        expect(store.getEpisodesBySeason(1)).toHaveLength(2)
    })
})



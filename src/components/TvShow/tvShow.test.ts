import { expect, it, describe} from 'vitest'
import { mount } from '@vue/test-utils'
import TvShow from './tvShow.vue'

describe('TV Show', () => {
    it('Loads succefully', ()=>{
        const wrapper = mount(TvShow)
        
        expect(wrapper.exists()).toBeTruthy()
    })
})
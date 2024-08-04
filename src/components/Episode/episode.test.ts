import { expect, it, describe} from 'vitest'
import { mount } from '@vue/test-utils'
import Episode from './episode.vue'

describe('Episode', () => {
    it('Loads succefully', ()=>{
        const wrapper = mount(Episode)
        
        expect(wrapper.exists()).toBeTruthy()
    })
})
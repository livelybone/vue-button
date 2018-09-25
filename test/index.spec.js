import { shallowMount } from '@vue/test-utils'
import VueBtn from '../src/components/Index.vue'

describe('Index.vue', () => {
  it('Rendered', () => {
    const wrapper = shallowMount(VueBtn)
    expect(wrapper.find('div').exists()).to.equal(true)
  })
})

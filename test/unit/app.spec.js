import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from './App.vue'

import vueTabevents from '../../src/index'
import { doesNotThrow } from 'assert'

const localVue = createLocalVue()
localVue.use(vueTabevents)

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(App, { localVue })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('it have a BUTTON and an H1', () => {
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('h1').exists()).toBe(true)
  })

  it('H1 to be hidden when BUTTON is clicked', () => {
    expect(wrapper.find('h1').exists()).toBe(true)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.find('h1').exists()).toBe(false)
  })

  it('it catches storage events', () => {
    expect(wrapper.vm.show).toBe(true)
    window.dispatchEvent(
            new StorageEvent('storage', {
              key: 'event',
              newValue: 'hide/show'
            })
        )
    expect(wrapper.vm.show).toBe(false)
  })
})

import { shallowMount } from '@vue/test-utils'
import Challenges from '@/components/challenge/Challenges'

describe('Challenges', () => {
  it(`should render the status message when request is loaded with empty challenges`, () => {
    const props = {
      challenges: [],
      status: {
        loaded: true,
        message: 'Nenhum evento realizado até o momento'
      }
    }

    const component = shallowMount(Challenges, { propsData: props })
    expect(component.text()).toBe('Nenhum evento realizado até o momento')
  })

  it(`should render the status message when state is not loaded`, () => {
    const props = {
      challenges: [],
      status: {
        loaded: false,
        message: 'Buscando informações sobre os eventos'
      }
    }

    const component = shallowMount(Challenges, { propsData: props })
    expect(component.text()).toBe('Buscando informações sobre os eventos')
  })

  it(`should render the challenge when state is loaded`, () => {
    const props = {
      challenges: [{
        fakechallenge: ':)'
      }],
      status: {
        loaded: true,
        message: 'Buscando informações sobre os eventos'
      }
    }

    const component = shallowMount(Challenges, { propsData: props })
    expect(component.findAll('challenge-stub').length).toBe(1)
  })
})
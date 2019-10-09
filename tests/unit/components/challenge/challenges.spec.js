import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Challenges from '@/components/challenge/Challenges'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Challenges', () => {

  it(`should show a "waiting" message when challenges are not loaded yet`, () => {
    const mockedEmptyChallengeGetter = jest.fn(_ => [])
    const store = new Vuex.Store({
      getters: {
        challenges: mockedEmptyChallengeGetter
      }
    })

    const component = shallowMount(Challenges, { store, localVue })
    expect(component.text()).toBe('Buscando informações relacionadas aos eventos, aguarde...')
    expect(mockedEmptyChallengeGetter).toHaveBeenCalled()
  })

  it(`'show the challenges when they are loaded`, () => {
    const mockedChallengeGetter = jest.fn(_ => [{
      fakechallenge: ':)'
    }])
    const store = new Vuex.Store({
      getters: {
        challenges: mockedChallengeGetter
      }
    })

    const component = shallowMount(Challenges, { store, localVue })
    expect(component.findAll('challenge-stub').length).toBe(1)
    expect(mockedEmptyChallengeGetter).toHaveBeenCalled()
  })
})
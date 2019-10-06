import { mount, shallowMount } from '@vue/test-utils'
import Reactions from '@/components/reaction/Reactions'

describe('Reactions', () => {
  it(`should render "Ninguém votou nesse pull request ainda" when reactions total count is zero`, () => {
    const reactions = { totalCount: 0 }
    const component = mount(Reactions, { propsData: { reactions }})
    expect(component.text()).toBe('Ninguém votou nesse pull request ainda')
  })

  it(`should render "Ninguém votou nesse pull request ainda" when reactions total count is undefined`, () => {
    const reactions = {}
    const component = mount(Reactions, { propsData: { reactions }})
    expect(component.text()).toBe('Ninguém votou nesse pull request ainda')
  })

  it(`should render the reactions total count correctly`, () => {
    const reactions = {
      totalCount: 10,
      nodes: []
    }
    const component = shallowMount(Reactions, { propsData: { reactions }})
    expect(component.find('.reactions__counter__total').text()).toBe('Reações 10')
  })

  it(`should render one unique reaction count when there's more than one reaction for same user`, () => {
    const user = { login: 'gituser' }
    const reactions = {
      totalCount: 3,
      nodes: [{ user }, { user }, { user }]
    }
    const component = shallowMount(Reactions, { propsData: { reactions }})
    expect(component.find('.reactions__counter__total').text()).toBe('Reações 3')
    expect(component.find('.reactions__counter__unique').text()).toBe('Reações Únicas 1')
  })

  it(`should render unique reactions count correctly when there's different users`, () => {
    const reactions = {
      totalCount: 3,
      nodes: [
        { user: { login: 'gituser1'} },
        { user: { login: 'gituser2'} },
        { user: { login: 'gituser3'} }
      ]
    }
    const component = shallowMount(Reactions, { propsData: { reactions }})
    expect(component.find('.reactions__counter__total').text()).toBe('Reações 3')
    expect(component.find('.reactions__counter__unique').text()).toBe('Reações Únicas 3')
  })
})
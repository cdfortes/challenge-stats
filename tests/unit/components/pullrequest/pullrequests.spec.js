import { shallowMount } from '@vue/test-utils'
import PullRequests from '@/components/pullrequest/PullRequests'

describe('Pull Requests', () => {
  it(`should not render the pull requests when the repository pull requests is empty`, () => {
    const repository = {
      pullRequests: {
        nodes: []
      }
    }
    const component = shallowMount(PullRequests, { propsData: { repository }})
    expect(component.text()).toBe('Nenhum pull request foi enviado para essa edição do evento ainda')
  })

  it(`should not render the pull requests when the repository pull requests nodes is undefined`, () => {
    const repository = {
      pullRequests: {}
    }
    const component = shallowMount(PullRequests, { propsData: { repository }})
    expect(component.text()).toBe('Nenhum pull request foi enviado para essa edição do evento ainda')
  })

  it(`should render the pull requests when the repository contains pull requests nodes`, () => {
    const repository = {
      pullRequests: {
        totalCount: 1,
        nodes: [{
          fakepullrequest: ':)'
        }]
      }
    }
    const component = shallowMount(PullRequests, { propsData: { repository }})
    expect(component.text()).toBe('')
  })
})
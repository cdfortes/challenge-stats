import { shallowMount } from '@vue/test-utils'
import PullRequests from '@/components/pullrequest/PullRequests'

describe('Pull Requests', () => {

  const winners = ['gituser1', 'gituser2', 'gituser3']

  it(`should not render the pull requests when the repository pull requests is empty`, () => {
    const repository = {
      pullRequests: {
        nodes: []
      }
    }
    const component = shallowMount(PullRequests, { propsData: { repository, winners }})
    expect(component.text()).toBe('Nenhum pull request foi enviado para essa edição do evento ainda')
  })

  it(`should not render the pull requests when the repository pull requests nodes is undefined`, () => {
    const repository = {
      pullRequests: {}
    }
    const component = shallowMount(PullRequests, { propsData: { repository, winners }})
    expect(component.text()).toBe('Nenhum pull request foi enviado para essa edição do evento ainda')
  })

  it(`should render the pull requests when the repository contains pull requests nodes`, () => {
    const repository = {
      pullRequests: {
        totalCount: 1,
        nodes: [{
          id: 'hash',
          permalink: 'permalink',
          title: 'pull request title',
          author: {
            avatarUrl: 'avatar-url',
            login: 'gituser',
            url: 'https://github.com/gituser'
          },
          reactions: {
            totalCount: 1,
            nodes: [{
              content: 'heart',
              user: {
                id: 'hash',
                avatarUrl: 'avatar-url',
                login: 'gituser',
                url: 'https://github.com/gituser'
              }
            }]
          }
        }]
      }
    }
    const component = shallowMount(PullRequests, { propsData: { repository, winners }})
    expect(component.text()).toBe('')
  })
})
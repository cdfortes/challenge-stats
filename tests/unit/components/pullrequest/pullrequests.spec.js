import { shallowMount } from '@vue/test-utils'
import PullRequests from '@/components/pullrequest/PullRequests'

describe('Pull Requests', () => {

  it(`should not render the pull requests when the repository pull requests is empty`, () => {
    const repository = {
      pullRequests: {
        nodes: []
      }
    }
    const winners = ['gituser']
    const component = shallowMount(PullRequests, { propsData: { repository, winners }})
    expect(component.text()).toBe('Nenhum pull request foi enviado para essa edição do evento ainda')
  })

  it(`should not render the pull requests when the repository pull requests nodes is undefined`, () => {
    const repository = {
      pullRequests: {}
    }
    const winners = ['gituser']
    const component = shallowMount(PullRequests, { propsData: { repository, winners }})
    expect(component.text()).toBe('Nenhum pull request foi enviado para essa edição do evento ainda')
  })

  it(`should render the pull requests when the repository contains pull requests nodes`, () => {
    const repository = {
      pullRequests: {
        totalCount: 1,
        nodes: [{
          author: {
            avatarUrl: 'avatar-url',
            login: 'gituser',
            url: 'https://github.com/gituser'
          },
          createdAt: '2019-08-25T00:00:00',
          id: 'MDExOlB1bGxSZXF1ZXN0MzIxMTYxMzI5',
          permalink: 'permalink',
          title: 'pull request title',
          reactions: {
            totalCount: 1,
            nodes: [{
              content: 'heart',
              createdAt: '2019-08-25T00:00:00',
              user: {
                avatarUrl: 'avatar-url',
                id: 'MDExOlB1bGxSZXF1ZXN0MzIxMTYxMzI5',
                login: 'gituser',
                url: 'https://github.com/gituser'
              }
            }]
          }
        }]
      }
    }
    const winners = ['gituser1']
    const component = shallowMount(PullRequests, { propsData: { repository, winners }})
    expect(component.text()).toBe('')
  })
})
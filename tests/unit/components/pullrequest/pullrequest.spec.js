import { shallowMount } from '@vue/test-utils'
import PullRequest from '@/components/pullrequest/PullRequest'
import { cleanText } from '../../test-helpers'

describe('Pull Request', () => {

  const winners = [{
    position: 1,
    login: 'gituser1'
  }, {
    position: 2,
    login: 'gituser2'
  }, {
    position: 3,
    login: 'gituser3'
  }]

  const pullRequest = {
    author: {
      avatarUrl: 'https://fake-github.com/gituser/avatar.png',
      login: 'gituser1',
      url: 'https://fake-github.com/gituser'
    },
    permalink: 'https://fake-github.com/project-x/pulls/123',
    createdAt: '2019-10-05T17:00:00Z',
    reactions: {}
  }

  const filters = {
    toTextFromNow: _ => 'há alguns minutos'
  }

  it(`should render author avatar correctly`, () => {
    const component = shallowMount(PullRequest, {
      propsData: { pullRequest, winners },
      filters
    })

    const image = component.find('.pull-request__user-avatar > img')
    expect(image.attributes('src')).toBe(pullRequest.author.avatarUrl)
    expect(image.attributes('alt')).toBe(pullRequest.author.login)
    expect(image.attributes('title')).toBe('@' + pullRequest.author.login)
  })

  it(`should render the signed message correctly`, () => {
    const component = shallowMount(PullRequest, {
      propsData: { pullRequest, winners },
      filters
    })

    const signed = component.find('.pull-request__signed')
    expect(signed.find('a').attributes('href')).toBe(pullRequest.author.url)
    expect(cleanText(signed.text())).toBe('@gituser1 enviou sua participação há alguns minutos')
  })

  it(`should render the pull request permalink correctly`, () => {
    const component = shallowMount(PullRequest, {
      propsData: { pullRequest, winners },
      filters
    })

    const vote = component.find('.pull-request__vote')
    expect(vote.find('a').attributes('href')).toBe(pullRequest.permalink)
    expect(cleanText(vote.text())).toBe('Vote nesse pull request reagindo aqui')
  })

  it(`should render the winner badge correctly`, () => {
    const component = shallowMount(PullRequest, {
      propsData: { pullRequest, winners },
      filters,
    })

    const badge = component.find('.pull-request__user-avatar > div')
    expect(badge.attributes('data-position')).toBe('1')
    expect(badge.attributes('title')).toBe('1º colocado(a) nessa edição do evento')
    expect(badge.text()).toBe('1')
  })
})
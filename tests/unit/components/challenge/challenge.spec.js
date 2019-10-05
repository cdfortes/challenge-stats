import { shallowMount } from '@vue/test-utils'
import Challenge from '@/components/challenge/Challenge'
import { cleanText } from '../../test-helpers'

describe('Challenge', () => {

  const challenge = {
    title: 'Testing Title',
    deadline: '2019-08-24T17:00:00Z',
    description: 'Testing description',
    repository: {
      pullRequests: {
        nodes: [jest.fn(), jest.fn(), jest.fn()]
      }
    },
    winners: []
  }

  const filters = {
    toTextFromNow: _ => 'em dois dias'
  }

  it(`should render the title correctly`, () => {
    const component = shallowMount(Challenge, {
      propsData: { challenge },
      filters
    })
    const header = component.find('.challenge__header')
    expect(header.find('h2').text()).toBe(challenge.title)
  })

  it(`should render the deadline correctly`, () => {
    const component = shallowMount(Challenge, {
      propsData: { challenge },
      filters
    })
    const deadline = component.find('.challenge__header__deadline')
    expect(deadline.attributes('title')).toBe(challenge.deadline)
    expect(cleanText(deadline.text())).toBe('Deadline: em dois dias')
  })

  it(`should render the number of participants correctly`, () => {
    const component = shallowMount(Challenge, {
      propsData: { challenge },
      filters
    })
    const participants = component.find('.challenge__header__participants')
    expect(participants.attributes('title')).toBe('Nº de participantes')
    expect(cleanText(participants.text())).toBe('Participantes: 3')
  })

  it(`should render the description correctly`, () => {
    const component = shallowMount(Challenge, {
      propsData: { challenge },
      filters
    })
    const description = component.find('.challenge__description')
    expect(cleanText(description.text())).toBe(challenge.description)
  })
})
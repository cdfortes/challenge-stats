import { mount } from '@vue/test-utils'
import Reaction from '@/components/reaction/Reaction'
import { cleanText } from '../../test-helpers'

describe('Reaction', () => {

  const reaction = {
    createdAt: 'XX/XX/XXXX',
    content: 'THUMBS_UP',
    user: {
      url: 'https://github-fake.com/gituser',
      login: 'gituser',
      avatarUrl: 'https://github-fake.com/gituser/avatar.png'
    }
  }

  it(`should render the GitHub user image correctly`, () => {
    const component = mount(Reaction, {
      propsData: { reaction },
      filters: {
        toEmoji: content => 'TEST_EMOJI',
        toTextFromNow: content => 'há 10 dias'
      }
    })
    const image = component.find('img')
    expect(image.attributes('src')).toBe(reaction.user.avatarUrl)
    expect(image.attributes('alt')).toBe(reaction.user.login)
  })

  it(`should render the information about the reaction`, () => {
    const component = mount(Reaction, {
      propsData: { reaction },
      filters: {
        toTextFromNow: content => 'há 10 dias'
      }
    })

    const anchor = component.find('div > a')
    expect(anchor.attributes('href')).toBe(reaction.user.url)

    const text = component.find('div').text()
    expect(cleanText(text)).toBe('@gituser reagiu com 👍 há 10 dias')

  })
})
import '../../jestUtils'
import { PlayScreen } from '../../src/components/PlayScreen'

describe('MainScreen renders correctly', () => {
  let wrapper
  let props
  let feed
  let PlayAction
  let IncrementAction

  beforeEach(() => {
    feed = [
      {"displayTime": 1000, "word": "test"},
      {"displayTime": 1000, "word": "it"}
    ]
    PlayAction = jest.fn()
    IncrementAction = jest.fn()
    props = { playing: false, place: 0, feed, PlayAction, IncrementAction }
    wrapper = shallow(<PlayScreen {...props}/>)
  })

  it('renders the buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2)
  })
})

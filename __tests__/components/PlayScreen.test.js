import '../../jestUtils'
import { PlayScreen } from '../../fakeComponents/PlayScreen'
import { mount } from 'enzyme'


describe('PlayScreen', () => {
  let props, feed, PlayAction, IncrementAction

  beforeEach(() => {
    feed = [
      {"displayTime": 1000, "word": "test"},
      {"displayTime": 1000, "word": "it"},
      {"displayTime": 1000, "word": "test"},
      {"displayTime": 1000, "word": "it"}
    ]
    PlayAction = jest.fn()
    IncrementAction = jest.fn()
    NavToHomeAction = jest.fn()
    dispatch = jest.fn()
    props = {
      playing: false,
      place: 0, feed,
      PlayAction,
      IncrementAction,
      navigation: {},
      goBack: {},
      NavToHomeAction,
      dispatch
    }

  })

  describe('Playscreen rendering and props', () => {
    let wrapper, instance

    beforeEach(() => {
      wrapper = shallow(<PlayScreen {...props}/>)
      instance = wrapper.instance()
    })

    it('renders the view containing the content', () => {
      expect(wrapper.find('View')).toHaveLength(1)
    })

    it('is not playing when it start', () => {
      expect(instance.props.playing).toEqual(false)
    })

    it('contains the correct feed', () => {
      expect(instance.props.feed).toEqual(feed)
    })

    it('it begins at the 0th place', () => {
      expect(instance.props.place).toEqual(0)
    })
  })

  // describe('Playscreen interactions', () => {
  //   let component
  //
  //   beforeEach(() => {
  //     component = mount(<PlayScreen {...props} />)
  //   })
  //
  //   it('starts playing', () => {
  //     component.setProps({ playing: true })
  //     jest.useFakeTimers()
  //     jest.runTimersToTime(1050)
  //     const instance = component.instance()
  //     console.log(instance.props)
  //   })
  // })
})

import '../../jestUtils'
import { MainScreen } from '../../fakeComponents/MainScreen'
import TestRenderer from 'react-test-renderer'
import toJSON from 'enzyme-to-json'
import mock from 'react-native-mock-render/mock'
import { mount } from 'enzyme'

describe('MainScreen renders correctly', () => {
  let text
  let TextChangedAction
  let SubmitTextAction
  let SubmitTextFromEditorAction
  let component
  let tree

  beforeEach(() => {
    TextChangedAction = jest.fn()
    SubmitTextAction = jest.fn()
    SubmitTextFromEditorAction = jest.fn()
    props = {
      text: 'test this shit',
      TextChangedAction,
      SubmitTextAction,
      SubmitTextFromEditorAction
    }
    component = shallow(<MainScreen {...props} />)
    tree = toJSON(component)
  })

  describe('default UI', () => {
    it('has the correct default state', () => {
      expect(component.state().inputType).toEqual('paste')
    })

    it('renders the default buttons', () => {
      expect(component.find("Button").length).toEqual(3)
      expect(component.find("PasteButton").length).toEqual(1)
    })
    it('matches the default snapshot', () => {
      expect(tree).toMatchSnapshot()
    })
  })

  // describe('trying to mount with jsdom', () => {
  //   it('calls the paste button', () => {
  //     const pasteButton = component.find("PasteButton")
  //     pasteButton.simulate('click')
  //     //expect(component.props.SubmitTextAction).toHaveBeenCalled()
  //     console.log(props.SubmitTextAction.calls())
  //
  //   })
  //
  // })


})

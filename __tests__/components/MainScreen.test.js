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
    it('matches the default snapshot', () => {
      expect(tree).toMatchSnapshot()
    })
  })
})

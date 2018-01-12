import TextReducer from '../../src/reducers/TextReducer'
import { TEXT_CHANGE } from '../../src/actions/types'

describe('Text Reducer', () => {
  let initial_state

  beforeEach(() => {
    initial_state = {
    	textInput: { text: '' },
    	navigation: {},
    }
  })

	it('it handles and empty action', () => {
		expect(TextReducer(undefined, {}).text).toEqual('')
	})

	it('changes text when TEXT_CHANGE is called', () => {
		const action = { type: TEXT_CHANGE, payload: 'test test' }
		expect(TextReducer(undefined, action).text).toEqual("test test")
	})
})

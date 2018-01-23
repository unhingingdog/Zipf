import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { weightTotal } from '../src/engine'
import { SubmitTextAction } from '../src/actions/SubmitTextAction'
import { SUBMIT_TEXT } from '../src/actions/types'

const Clipboard = {
  getString: return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('running')
      resolve(return 'test this text')
    }, 0))
  }

  setTimeout(() => {
    console.log('running')
    resolve(return 'test this text')
  }, 0)
}

const testText = 'This is the test text, check this shit.'

describe('Async actions', () => {
	it('should call SubmitText', () => {
    const expectedAction = { type: SUBMIT_TEXT, payload: testText }
    const store = mockStore({ feed: [] })
    store.dispatch(SubmitTextAction(Clipboard))

    expect(store.getActions()).toEqual(expectedAction)
	})
})

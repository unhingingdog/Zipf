import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { weightTotal } from '../src/engine'
import {
  SubmitTextAction,
  SubmitTextFromEditorAction
} from '../src/actions/SubmitTextAction'
import { SUBMIT_TEXT } from '../src/actions/types'
import weights from '../src/weights'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const testText = 'test it'

Clipboard = {
  getString: () => {
    return new Promise((resolve, reject) => {
      process.nextTick(() =>
        resolve(testText)
      )
    })
  }
}

describe('Async actions', () => {
  let expectedAction
  let store

  beforeEach(() => {
    expectedAction = {
      type: SUBMIT_TEXT,
      payload: [
        {"displayTime": (weights.test || 1000), "word": "test"},
        {"displayTime": (weights.it || 1000), "word": "it"}
      ]
    }

    store = mockStore({ })
  })

	it('should call SubmitTextAction with the correct action', async () => {
    await store.dispatch(SubmitTextAction(null,Clipboard))
    const dispatchedActions = store.getActions()
    expect(store.getActions()[0]).toEqual(expectedAction)
	})

  it('should call SubmitTextFromEditorAction with correct action', async () => {
    await store.dispatch(SubmitTextFromEditorAction(null, testText))
    const dispatchedActions = store.getActions()
    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})

import { SUBMIT_TEXT } from '../../src/actions/types'
import feedReducer from '../../src/reducers/feedReducer'
import weights from '../../src/weights'

describe('Feed reducer', () => {
  let action
  let initial_state

  const example_feed = [
    {displayTime: (weights.test || 1000), word: "test"},
    {displayTime: (weights.it || 1000), word: "it"},
    {displayTime: (weights.test || 1000), word: "test"},
    {displayTime: (weights.it || 1000), word: "it"},
    {displayTime: (weights.test || 1000), word: "test"},
    {displayTime: (weights.it || 1000), word: "it"},
    {displayTime: (weights.good || 1000), word: "good"},
  ]

  beforeEach(() => {
    initial_state = {
      feed: []
    }

    action = {
      type: SUBMIT_TEXT,
      payload: example_feed
    }
  })

  it('takes a feed from a text submission action', () => {
    expect(feedReducer(initial_state, action))
      .toEqual(example_feed)
  })

  it('handles an unrecognised type with the default action', () => {
    expect(feedReducer(initial_state, { type: 'shit' }))
      .toEqual(initial_state)
  })
})

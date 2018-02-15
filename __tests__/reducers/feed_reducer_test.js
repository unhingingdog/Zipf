import { SUBMIT_TEXT } from '../../src/actions/types'
import feedReducer from '../../src/reducers/feedReducer'
import {
  wordFrequencyWeights,
  frequencyDefaultWeight
} from '../../src/weightConfig'

describe('Feed reducer', () => {
  let action
  let initial_state

  const example_feed = [
    {displayTime: (wordFrequencyWeights.test || frequencyDefaultWeight), word: "test"},
    {displayTime: (wordFrequencyWeights.it   || frequencyDefaultWeight), word: "it"},
    {displayTime: (wordFrequencyWeights.test || frequencyDefaultWeight), word: "test"},
    {displayTime: (wordFrequencyWeights.it   || frequencyDefaultWeight), word: "it"},
    {displayTime: (wordFrequencyWeights.test || frequencyDefaultWeight), word: "test"},
    {displayTime: (wordFrequencyWeights.it   || frequencyDefaultWeight), word: "it"},
    {displayTime: (wordFrequencyWeights.good || frequencyDefaultWeight), word: "good"},
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

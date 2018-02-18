import { SUBMIT_TEXT } from '../../src/actions/types'
import feedReducer from '../../src/reducers/feedReducer'
import {
  wordFrequencyWeights,
  frequencyDefaultWeight
} from '../../src/weightConfig'

describe('Feed reducer', () => {
  let action
  let initial_state
  let totalDisplayTime

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
      feed: {
        feed: [],
        totalDisplayTime: 0
      }
    }

    totalDisplayTime = example_feed.reduce((accumulator, feedItem) => {
      return accumulator + feedItem.displayTime
    }, 0)

    action = {
      type: SUBMIT_TEXT,
      payload: example_feed
    }
  })

  it('takes a feed from a text submission action', () => {
    expect(feedReducer(initial_state, action))
      .toEqual({ feed: example_feed, totalDisplayTime: totalDisplayTime })
  })

  it('handles an unrecognised type with the default action', () => {
    expect(feedReducer(initial_state, { type: 'shit' }))
      .toEqual(initial_state)
  })
})

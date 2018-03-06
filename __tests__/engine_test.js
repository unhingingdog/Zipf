import engine from '../src/engine'
import tex from '../src/testtext'
import {
  wordFrequencyWeights,
  frequencyDefaultWeight,
  wordLengthWeights,
  puncuationWeights
} from '../src/weightConfig'
import {
  weighByFrequency,
  weightByLength,
  weightByPuncuation,
  weightTotal
} from '../src/engine'

describe("Text engine", () => {
  beforeEach(() => {
    text = tex
    defaultSpeed = 1
  })

  it('should return feed object', () => {
    engine(text, defaultSpeed).then(feed => expect(feed)
      .toBeInstanceOf(Array))
  })

  it('should return an feed with the correct length', () => {
    engine(text, defaultSpeed).then(feed => expect(feed)
      .toHaveLength(text.split(' ').length))
  })

  it('should return an feed with the correct words', () => {
    engine(text, defaultSpeed).then(feed => expect(
      feed[text.split(' ').length - 5].word).toEqual('striking'))
  })

  describe("Frequency weighting (weighByFrequency)", () => {
    it('should return a feed with the correct weights', () => {
      expect(weighByFrequency('the')).toEqual(wordFrequencyWeights.the)
      expect(weighByFrequency('stellarator')).toEqual(frequencyDefaultWeight)
    })

    it('should ignore capilaisation', () => {
      expect(weighByFrequency('The')).toEqual(wordFrequencyWeights.the)
    })
  })

  describe("Word length weighting (weightByLength)", () => {
    it('correctly weights a word with less than seven characters', () => {
      expect(weightByLength('the')).toEqual(0)
      expect(weightByLength('stellarator'))
        .toEqual(wordLengthWeights.moreThan_7)
    })
  })

  describe("Puncuation weighting (weightByPuncuation)", () => {
    it('correctly weighs the last word of a sentence', () => {
      expect(weightByPuncuation('stellarator.'))
        .toEqual(puncuationWeights.fullStop)
    })
  })

  describe("Total weight (weightTotal)", () => {
    it('correctly returns a total weight for a given word', () => {
      expect(weightTotal('the')).toEqual(wordFrequencyWeights.the)

      expect(weightTotal('stellarator'))
        .toEqual(frequencyDefaultWeight + wordLengthWeights.moreThan_7)

      expect(weightTotal('stellarator.'))
        .toEqual(frequencyDefaultWeight
                 + wordLengthWeights.moreThan_7
                 + puncuationWeights.fullStop
        )
    })

    it('passes a hard coded test for sanity', () => {
      expect(weightTotal('stellarator.')).toEqual(2200)
    })
  })
})

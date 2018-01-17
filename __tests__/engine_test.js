import engine from '../src/engine'
import weights from '../src/weights'
import tex from '../src/testtext'
import {
  weighByFrequency,
  weightByLength,
  weightByPuncuation,
  weightTotal
} from '../src/engine'

describe("Text engine", () => {
  let wordLengthWeights
  let puncuationWeights
  let frequencyDefaultWeight
  let defaultSpeed

  beforeEach(() => {
    text = tex
    wordLengthWeights = { moreThan_7: 200}
    puncuationWeights = { endOfSentence: 1200}
    frequencyDefaultWeight = 1000
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
      expect(weighByFrequency('the')).toEqual(weights.the)
      expect(weighByFrequency('stellarator')).toEqual(frequencyDefaultWeight)
    })

    it('should ignore capilaisation', () => {
      expect(weighByFrequency('The')).toEqual(weights.the)
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
        .toEqual(puncuationWeights.endOfSentence)
    })
  })

  describe("Total weight (weightTotal)", () => {
    it('correctly returns a total weight for a given word', () => {
      expect(weightTotal('the', defaultSpeed)).toEqual(weights.the)

      expect(weightTotal('stellarator', defaultSpeed))
        .toEqual(frequencyDefaultWeight + wordLengthWeights.moreThan_7)

      expect(weightTotal('stellarator.', defaultSpeed))
        .toEqual(frequencyDefaultWeight
                 + wordLengthWeights.moreThan_7
                 + puncuationWeights.endOfSentence
        )
    })

    it('correcty adjusts the weighting by the chosen readingSpeed', () => {
      expect(weightTotal('stellarator.', defaultSpeed * 2))
      .toEqual(frequencyDefaultWeight
               + wordLengthWeights.moreThan_7
               + puncuationWeights.endOfSentence
               * (defaultSpeed * 2)
      )
      //sanity check -- will break with config change
      expect(weightTotal('stellarator.', defaultSpeed * 0.5)).toEqual(1800)
    })
  })
})

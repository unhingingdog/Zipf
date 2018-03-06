import '../jestUtils'

describe('Calculate remaining time and WPM', () => {
  let feed, speed, totalDisplayTime, props, expectedFormattedTime
  let calculateRemainingReadTime, calculateWordsPerMinute

  beforeEach(() => {
    feed = []

    for(let i = 0; i < 300; i++) {
      feed.push({ word: 'test', displayTime: 1000 })
    }

    totalTime = 300000
    place = 0
    speed = 0

    calculateRemainingReadTime = (place, feed, speed) => {
      let remainingTime = 0
      for(let i = place; i < feed.length; i++) {
        remainingTime += (feed[i].displayTime / 100) * (100 - speed)
      }
      let seconds = (remainingTime/1000) % 60
      const minutes = (((remainingTime / 1000 - seconds)) % 3600) / 60
      seconds = seconds.toFixed().toString().length < 2 ?
        '0' + seconds.toFixed().toString() : seconds.toFixed().toString()
      return minutes.toFixed().toString() + ':' + seconds
    }

    calculateWordsPerMinute = (totalTime, numberOfWords, speed) => {
      const timeInMinutes = (totalTime / 60000) * ((100 - speed) / 100)
      return (numberOfWords / timeInMinutes).toFixed().toString() + ' WPM'
    }
  })

  describe('caclulate remaining time', () => {
    it('correctly calculates from the start of the feed with minimum speed', () => {
      speed = 0
      place = 0
      expectedFormattedTime = '5:00'

      expect(calculateRemainingReadTime(place, feed, speed))
        .toEqual(expectedFormattedTime)
    })

    it('correctly calculates from part way through the feed with minimum speed', () => {
      speed = 0
      place = 150
      expectedFormattedTime = '2:30'


      expect(calculateRemainingReadTime(place, feed, speed))
        .toEqual(expectedFormattedTime)
    })

    it('correctly calculates from the start with a speed of 50', () => {
      speed = 50
      place = 0
      expectedFormattedTime = '2:30'


      expect(calculateRemainingReadTime(place, feed, speed))
        .toEqual(expectedFormattedTime)
    })

    it('correctly calculates from midway with a speed of 50', () => {
      speed = 50
      place = 150
      expectedFormattedTime = '1:15'


      expect(calculateRemainingReadTime(place, feed, speed))
        .toEqual(expectedFormattedTime)
    })
  })

  describe('Calculate WPM', () => {
    it('correctly calculates the WPM with minimum speed', () => {
      //note the actual component allows a minimum of 40 - anything below this
      //has no real utility
      const expectedFormattedWPM = '60 WPM'

      expect(calculateWordsPerMinute(totalTime, feed.length, speed))
        .toEqual(expectedFormattedWPM)
    })

    it('correctly calculates the WPM with speed of 50', () => {
      speed = 50
      const expectedFormattedWPM = '120 WPM'

      expect(calculateWordsPerMinute(totalTime, feed.length, speed))
        .toEqual(expectedFormattedWPM)
    })

    it('correctly calculates the WPM with a speed of 80', () => {
      speed = 80
      const expectedFormattedWPM = '300 WPM'

      expect(calculateWordsPerMinute(totalTime, feed.length, speed))
        .toEqual(expectedFormattedWPM)
    })

    it('correctly calculates the WPM with the maxuimum speed', () => {
      speed = 99
      const expectedFormattedWPM = '6000 WPM'

      expect(calculateWordsPerMinute(totalTime, feed.length, speed))
        .toEqual(expectedFormattedWPM)
    })
  })
})

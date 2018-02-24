import Paused from '../src/components/Paused'

import '../jestUtils'


describe('Paused Calculation Methods', () => {
  let feed, speed, totalDisplayTime, props
  let calculateRemainingReadTime, calculateWordsPerMinute

  beforeEach(() => {
    feed = [
      { word: 'test', displayTime: 1000 },
      { word: 'test', displayTime: 600 },
      { word: 'test', displayTime: 1000 },
      { word: 'test', displayTime: 600 },
      { word: 'test', displayTime: 400 },
      { word: 'test', displayTime: 1400 }
    ]
    totalTime = 5000
    totialTimeInMinutesAndSeconds = 
    speed = 40
    place = 2

    props = {
      word: feed[place].word,
      totalTime,
      speed,
      place,
      playing: false,
      feed
    }

    const wrapper = shallow(<Paused {...props} />)
    const instance = wrapper.instance()

    calculateRemainingReadTime = instance.calculateRemainingReadTime
    calculateWordsPerMinute = instance.calculateWordsPerMinute
  })

  it('should correctly calculate the remaining time', () => {
    // expect(calculateRemainingReadTime(place, feed, speed))
    //   .toEqual(3400)
  })

  it('should correctly calculate the WPM', () => {
    // expect(calculateWordsPerMinute(totalTime, feed.length, speed))
    //   .toEqual(3)
  })
})




1000 / 100

speed 80 / 100


100 - 80 20

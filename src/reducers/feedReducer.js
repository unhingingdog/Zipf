import { SUBMIT_TEXT } from '../actions/types'

const default_state = { feed: [], totalDisplayTime: 0 }

const calculateTotalTime = feed => {
  const totalDisplayTime = feed.reduce((accumulator, feedItem) => {
    return accumulator + feedItem.displayTime
  }, 0)

  return totalDisplayTime
}

export default (state = default_state, action) => {
  switch(action.type) {
    case SUBMIT_TEXT:
      return {
        feed: [ ...action.payload ],
        totalDisplayTime: calculateTotalTime(action.payload)
      }
    default:
      return state
  }
}

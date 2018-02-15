import { CHANGE_SPEED } from './types'

export const ChangeSpeedAction = speed => {
  return { type: CHANGE_SPEED, payload: speed }
}

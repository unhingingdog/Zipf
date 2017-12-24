import { TEXT_CHANGE } from './types'

export const TextChangedAction = (text) => {
	return { type: TEXT_CHANGE, payload: text }
}
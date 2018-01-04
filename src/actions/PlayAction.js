import { PLAY, INCREMENT, DECREMENT } from './types'

export const PlayAction = () => {
	return { type: PLAY }
}

export const IncrementAction = () => {
	return { type: INCREMENT }
}

export const DecrementAction = () => {
	return { type: DECREMENT }
}
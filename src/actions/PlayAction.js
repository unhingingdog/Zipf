import { PLAY,
				 INCREMENT,
				 DECREMENT,
				 PAUSE,
				 STOP
			 } from './types'

export const PlayAction = () => {
	return { type: PLAY }
}

export const PauseAction = () => {
	return { type: PAUSE }
}

export const StopAction = () => {
	return { type: STOP }
}

export const IncrementAction = () => {
	return { type: INCREMENT }
}

export const DecrementAction = () => {
	return { type: DECREMENT }
}

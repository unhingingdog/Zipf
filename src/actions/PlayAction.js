import {
	PLAY,
  INCREMENT,
	DECREMENT,
	PAUSE,
	STOP,
	SEEK_PLACE
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

export const SeekPlaceAction = place => {
	return { type: SEEK_PLACE, payload: { place }}
}

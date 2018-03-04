const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER'
const RESET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER'

export const setCurrentPlayer = player => ({
	type: SET_CURRENT_PLAYER,
	player
})

export const resetCurrentPlayer = ()=> ({
	type: RESET_CURRENT_PLAYER
})

export default function(state = '', action) {
	switch (action.type) {
		case SET_CURRENT_PLAYER:
			return action.player
		case RESET_CURRENT_PLAYER:
			return 1
		default:
			return state
	}
}

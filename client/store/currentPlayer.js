const TOGGLE_CURRENT_PLAYER = 'TOGGLE_CURRENT_PLAYER'
const RESET_CURRENT_PLAYER = 'RESET_CURRENT_PLAYER'

export const toggleCurrentPlayer = () => ({
	type: TOGGLE_CURRENT_PLAYER
})

export const resetCurrentPlayer = () => ({
	type: RESET_CURRENT_PLAYER
})

export default function(state = 1, action) {
	switch (action.type) {
		case TOGGLE_CURRENT_PLAYER:
			return state === 1 ? 2 : 1
		case RESET_CURRENT_PLAYER:
			return 1
		default:
			return state
	}
}

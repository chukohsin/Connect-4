const initial = [[], [], [], [], [], []]

const RESET_BOARD = 'RESET_BOARD'

export const resetBoard = () => ({
	type: RESET_BOARD,
	board: initial
})

export default function(state = initial, action) {
	switch (action.type) {
		case RESET_BOARD:
			return action.board
		default:
			return state
	}
}

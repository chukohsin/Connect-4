let initial = [
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0]
]

const SET_BOARD = 'SET_BOARD'

export const setBoard = board => ({
	type: SET_BOARD,
	board
})

export default function(state = initial, action) {
	switch (action.type) {
		case SET_BOARD:
			return action.board
		default:
			return state
	}
}

const SET_GAMEOVER = 'SET_GAMEOVER'

export const setGameover = gameoverBool => ({
	type: SET_GAMEOVER,
	gameoverBool
})

export default function(state = '', action) {
	switch (action.type) {
		case SET_GAMEOVER:
			return action.gameoverBool
		default:
			return state
	}
}

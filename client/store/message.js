const SET_MESSAGE = 'SET_MESSAGE'

export const setMessage = (message) => ({
	type: SET_MESSAGE,
	message
})

export default function(state = '', action) {
	switch (action.type) {
		case SET_MESSAGE:
			return action.message
		default:
			return state
	}
}

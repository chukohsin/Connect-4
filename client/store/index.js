import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import currentPlayer from './currentPlayer.js'
import board from './board.js'
import gameover from './gameover.js'
import message from './message.js'
import player1 from './player1.js'
import player2 from './player2.js'

const reducer = combineReducers({ currentPlayer, board, gameover, message, player1, player2 })
const middleware = composeWithDevTools(applyMiddleware(
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store

export * from './currentPlayer.js'
export * from './board.js'
export * from './gameover.js'
export * from './message.js'

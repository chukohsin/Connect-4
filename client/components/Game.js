import React from 'react'
import {connect} from 'react-redux'
import Row from './Row.js'
import { setBoard, toggleCurrentPlayer, resetCurrentPlayer, setGameover, setMessage } from '../store'
import checkBoard from './boardCheck.js'

const mapStateToProps = state => {
  return {
    player1: state.player1,
    player2: state.player2,
    board: state.board,
    currentPlayer: state.currentPlayer,
    gameover: state.gameover,
    message: state.message
  }
}

const mapDispatchToProps = dispatch => ({
  resetGame() {
    let newBoard = []
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      newBoard.push(row);
    }
    dispatch(setBoard(newBoard))
    dispatch(resetCurrentPlayer())
    dispatch(setGameover(false))
    dispatch(setMessage(''))
  },
  addPiece(col, board, player, gameover) {
    if (gameover) {
      dispatch(setMessage('Game Over! Play it again?'))
    } else {
      for (let i = 5; i >=0; i--) {
        if (!board[i][col]) {
          board[i][col] = player
          break
        }
      }
      dispatch(setBoard(board))
      let status = checkBoard(board)
      if (status === 1) {
        dispatch(setGameover(true))
        dispatch(setMessage('Player 1 Win!'))
      } else if (status === 2) {
        dispatch(setGameover(true))
        dispatch(setMessage('Player 2 Win!'))
      } else if (status === 'Full') {
        dispatch(setGameover(true))
        dispatch(setMessage('Tight! Try it again?'))
      } else {
        dispatch(toggleCurrentPlayer())
      }
    }
  }
})

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
            {
              ['C', 'O', 'N', 'N', 'E', 'C', 'T'].map((el, i) => (
                <td key={i}>
                  <button className="button2" onClick={() => this.props.addPiece(i, this.props.board, this.props.currentPlayer, this.props.gameover)}>{el}</button>
                </td>
              ))
            }
            </tr>
            {
              this.props.board.map((el, i) => <Row key={i} row={el} />)
            }
          </tbody>
        </table>
        <div className="button" onClick={() => {this.props.resetGame()}}>Reset</div>
        <p className="message">{this.props.message}</p>
      </div>
    )
  }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)
export default GameContainer

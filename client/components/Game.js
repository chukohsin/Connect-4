import React from 'react'
import {connect} from 'react-redux'
import Row from './Row.js'
import checkBoard from './boardCheck'
import { setBoard, toggleCurrentPlayer, resetCurrentPlayer, setGameover, setMessage } from '../store'
import Notifications, {notify} from 'react-notify-toast';

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
      dispatch(setMessage('Game Over! New Game?'))
    } else if (board[0][col]) {
      dispatch(setMessage('Try other column!'))
    } else {
      dispatch(setMessage(''))
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
        dispatch(setMessage('Player Green Win :)'))
        notify.show('Player Green Win :)', "custom", 5000, {background: '#82E0AA', text: 'white'})
      } else if (status === 2) {
        dispatch(setGameover(true))
        dispatch(setMessage('Player Orange Win :)'))
        notify.show('Player Orange Win :)', "custom", 5000, {background: '#E67E22', text: 'white'})
      } else if (status === 'Full') {
        dispatch(setGameover(true))
        dispatch(setMessage('Tight! New Game?'))
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
    let currentPlayerClass = 'playButton shake-slow', board1, board2
    if (this.props.gameover) {
      currentPlayerClass = 'playButton'
      board1 = 'hidden'
      board2 = 'hidden'
    } else if (!this.props.gameover && this.props.currentPlayer === 1) {
      currentPlayerClass += ' player1Button'
      board1 = 'visible'
      board2 = 'hidden'
    } else {
      currentPlayerClass += ' player2Button'
      board1 = 'hidden'
      board2 = 'visible'
    }
    return (
      <div>
        <div className="head">
          <div className='main'>
            <Notifications />
          </div>
        </div>
        <div className="bigBox">
          <div className="player1Board" style={{visibility: board1}}>Player Green</div>
          <table>
            <tbody>
              <tr>
              {
                ['C', 'O', 'N', 'N', 'E', 'C', 'T'].map((el, i) => (
                  <td key={i}>
                    <button className={currentPlayerClass} onClick={() => this.props.addPiece(i, this.props.board, this.props.currentPlayer, this.props.gameover)}>{el}</button>
                  </td>
                ))
              }
              </tr>
              {
                this.props.board.map((el, i) => <Row key={i} row={el} />)
              }
            </tbody>
          </table>
          <div className="player2Board" style={{visibility: board2}}>Player Orange</div>
        </div>
        <div className="button" onClick={() => {this.props.resetGame()}}>RESTART</div>
        <p className="message">{this.props.message}</p>
        <div className="footer" >Ko-Hsin Chu<img src='./me.png'/></div>
      </div>
    )
  }
}


const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)
export default GameContainer

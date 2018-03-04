import React from 'react'
import {connect} from 'react-redux'
import Row from './Row.js'
import { resetBoard, setCurrentPlayer, setGameover, setMessage } from '../store'

const mapStateToProps = state => {
  return {
    player1: state.player1,
    player2: state.player2,
    board: state.board,
    currentPlayer: state.currentPlayer,
    gameover: state.gameover
  }
}

const mapDispatchToProps = dispatch => ({
  resetGame() {
    dispatch(resetBoard())
    dispatch(setCurrentPlayer(1))
    dispatch(setGameover(false))
    dispatch(setMessage(''))
  },
  togglePlayer(player) {
    let currentPlayer = player === 1 ? 2 : 1
    dispatch(setCurrentPlayer(currentPlayer))
  }
})

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.player2)
    return (
      <div>
        <table>
          <tbody>
            <tr>
            {
              [0, 1, 2, 3, 4, 5, 6].map((el, i) => <td key={i}><button>click</button></td>)
            }
            </tr>
            {
              this.props.board.map((el, i) => <Row key={i} row={el} />)
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)
export default GameContainer

import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
	currentPlayer: state.currentPlayer
})

const Cell = (props) => {
	let { currentPlayer, value } = props,
		color = 'white'
	if (value === 1) {
		color = 'yellow'
	} else if (value === 2) {
		color = 'red'
	}

	return (
		<td>
			<div className="cell">
				<div className={color} />
			</div>
		</td>
	)
}

const CellContainer = connect(mapStateToProps)(Cell)
export default CellContainer

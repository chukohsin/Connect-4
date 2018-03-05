function checkHorizontal(board) {
	for (let i = 5; i >= 0; i--) {
		for (let j = 0; j < 4; j++) {
			if (board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2] && board[i][j] === board[i][j + 3]) {
				return board[i][j]
			}
		}
	}
}

function checkVertical(board) {
	for (let j = 0; j < 7; j++) {
		for (let i = 5; i > 2; i--) {
			console.log(i)
			if (board[i][j] === board[i - 1][j] && board[i][j] === board[i - 2][j] && board[i][j] === board[i - 3][j]) {
				return board[i][j]
			}
		}
	}
}

function checkDiagonal(board) {
	for (let i = 5; i >= 3; i--) {
      for (let j = 6; j >=3; j--) {
        if (board[i][j] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 2][j - 2] && board[i][j] === board[i - 3][j - 3]) {
            return board[i][j]
        }
      }
    }

	for (let i = 5; i >= 3; i--) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] && board[i][j] === board[i - 1][j + 1] && board[i][j] === board[i - 2][j + 2] && board[i][j] === board[i - 3][j + 3]) {
            return board[i][j]
        }
      }
    }
}

export function checkFull(board) {
	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 7; j++) {
			if (!board[i][j]) return 'Not full'
		}
	}
	return 'Full'
}

export default function checkBoard(board) {
	return checkHorizontal(board) || checkVertical(board) || checkDiagonal(board) || checkFull(board)
}

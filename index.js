var board = {
  0: ["-", "-", "-"],
  1: ["-", "-", "-"],
  2: ["-", "-", "-"],
};

function makeBoard() {
  console.log(`${board[0]}\n${board[1]}\n${board[2]}`);
}

function x(x, y) {
  if (board[y][x] === "-") {
    board[y][x] = "X";
    console.log(`${board[0]}\n${board[1]}\n${board[2]}`);
    if (winner()) {
      console.log("X is the winner!");
    } else {
      console.log(`it's player O's turn`);
    }
  } else {
    console.log("Spot already taken!");
  }
}

function o(x, y) {
  if (board[y][x] === "-") {
    board[y][x] = "O";
    console.log(`${board[0]}\n${board[1]}\n${board[2]}`);
    if (winner()) {
      console.log("O is the winner!");
    } else {
      console.log(`it's player X's turn`);
    }
  } else {
    console.log("Spot already taken!");
  }
}

//logic for determining
function winner() {
  for (var i = 0; i < 3; i++) {
    var one = board[i][0];
    var two = board[i][1];
    var three = board[i][2];
    if (one === "X" && one === two && one === three) {
      return true;
    }
    if (one === "O" && one === two && one === three) {
      return true;
    }
  }
  return false;
}

window.makeBoard;
window.x;
window.o;

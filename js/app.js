/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEls = document.querySelector('#message');

/*---------------------------- Variables (state) ----------------------------*/
let board = ["X","O","O","","","","","",""];
let turn = ["X", "O"];
let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/


/*-------------------------------- Functions --------------------------------*/
function init(board)  {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
};


function render() {
    updateBoard();
    updateMessage();
};

function updateBoard() {
   
    board.forEach((cell, index) => {
   
      const square = squareEls[index];
      
      square.textContent = cell;
    });
}

function updateMessage() {
    if (winner === false && tie === false) {
        return "Whose turn is it?";
    }
    else if (winner === false && tie === true) {
        return "It is a tie";
    }
    else "Congratulations on the win!";
};


/*----------------------------- Event Listeners -----------------------------*/




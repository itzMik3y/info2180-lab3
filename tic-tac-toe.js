
document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the div element
    const board = document.getElementById("board");
    const status=document.getElementById("status")
    const restart=document.querySelector(".btn")
    const elementsArray = Array.from(board.querySelectorAll('*'));
    let lastPlayed=""
    let gameState=[[],[],[]]
    let plays=0
    let row=0
    let col=0
    function checkWinner(board) {
        // Check rows
        for (let i = 0; i < 3; i++) {
          if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0]; // Return the winning player ('X' or 'O')
          }
        }
      
        // Check columns
        for (let j = 0; j < 3; j++) {
          if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            return board[0][j];
          }
        }
      
        // Check diagonals
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
          return board[0][0];
        }
        if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
          return board[0][2];
        }
      
        // If no winner, return null
        return null;
      }

    function select_XO(event,row,column){
        let winner=checkWinner(gameState);
        if(winner!='X'&& winner!='O' && gameState[row][column]==undefined){
            if(lastPlayed=='X'){
                event.target.classList.add("O")
                gameState[row][column]="O"
                event.target.textContent="O"
                lastPlayed="O"
            }
            else if(lastPlayed=='O'){
                event.target.classList.add("X")
                gameState[row][column]="X"
                event.target.textContent="X"
                lastPlayed="X"
               
            }
            else{
                event.target.classList.add("X")
                gameState[row][column]="X"
                event.target.textContent="X"
                lastPlayed="X"
            }
            winner=checkWinner(gameState);
            plays++     

        }
        if(plays>3 && winner!=null && winner!=undefined){
            status.textContent=`Congratulations! ${winner} is the Winner!`
            status.classList.add('you-won')
        }
        if(plays==9){
            status.textContent=`DRAW`
        }
       
        
    }
    restart.addEventListener('click',(e)=>{
        gameState=[[],[],[]]
        status.textContent="Move your mouse over a square and click to play an X or an O."
        status.classList.remove('you-won')
        elementsArray.forEach(function(element, index) {
            element.textContent=' '
        })
    })
    elementsArray.forEach(function(element, index) {
        // Apply individual styles based on the element or index
        const row = Math.floor(index / 3);
        const col = index % 3;
    
        element.addEventListener('click', (event) => select_XO(event, row, col));
    
        element.classList.add("square");      
        element.addEventListener('mouseover', () => {
            element.classList.add('hover');
        });
        
        element.addEventListener('mouseout', () => {
            element.classList.remove('hover');
        });
    
    })
  });
  

document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the div element
    const board = document.getElementById("board");
    const elementsArray = Array.from(board.querySelectorAll('*'));
    let lastPlayed=""
    let gameState=[[],[],[]]
    let row=0
    let col=0
    function select_XO(event,row,column){
        console.log(row,column)
        if(lastPlayed=='X'){
            event.target.classList.add("O")
            event.target.textContent="O"
            lastPlayed="O"
        }
        else if(lastPlayed=='O'){
            event.target.classList.add("X")
            event.target.textContent="X"
            lastPlayed="X"
           
        }
        else{
            event.target.classList.add("X")
            event.target.textContent="X"
            lastPlayed="X"
        }
    }
    elementsArray.forEach(function(element, index) {
        // Apply individual styles based on the element or index
        const row = Math.floor(index / 3);
        const col = index % 3;
    
        element.addEventListener('click', (event) => select_XO(event, row, col));
    
        element.classList.add("square");      
    
    })
  });
  
$ (document) .ready (function() {
    console.log("Ready");
    let table = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    let player = 0;
    const playerSymbols = ['X','O'];
    
    const cellDim = 150;
   let cells = document.querySelectorAll('td');
   for (var i = 0; i < cells.length; i++){
    cells [i].style.height = cellDim + 'px';
    cells [i].style.width = cellDim + 'px';
   }
    let selectedRow = 0;
    let selectedCol = 0;

    function checkForWin(){
        return false;
    }
    function takeTurn(e) {
        if (isFree(selectedRow, selectedCol)) {
            
            table[selectedRow][selectedCol] = playerSymbols[player];
            if (checkForWin()) { 
            } else {
          } else {        
        }
    }

    function isFree(row,col){
        if(table[row] [col] =='') {
        return true;
    }
    return false;
}
    $('table').on('click', function(event){
       var x = event.pageX - $(this).offset().left;
       var y = event.pageY - $(this).offset().top;
       console.log('mouse position - X: ' + x + ', Y:' +y);
       selectedRow = Math.floor(y / cellDim);
       selectedCol = Math.floor(x / cellDim);
       console.log('Selected Cell - row: ' + selectedRow + ', col: ' + selectedCol);

       takeTurn();
    });
});
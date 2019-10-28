import BlackJack from 'blackjack-dealer-logic'

export default () => {
    
    // // DOM variables
    const game = BlackJack.singleDeckGame,
          result = BlackJack.Result,
          statsDisplay = document.getElementById('stats-display'),
          newGameButton = document.getElementById('new-game-button'),
          doubbleButton = document.getElementById('doubble-button'),
          hitButton = document.getElementById('hit-button'),
          stayButton = document.getElementById('stay-button'),
          user = document.getElementById('user'),
          userName = document.getElementById('user-name'),
          userChipCount = document.getElementById('user-chip-count'),
          userWager = document.getElementById('user-wager'),
          dealer = document.getElementById("dealer"),
          bust = document.getElementById('bust'),
          outcome = document.getElementById('outcome'),
          history = document.getElementById('history'),
          resetButton = document.getElementById('reset-button')
         ;
    // // State Variables
    var /*gameState = null,*/
        gameHistory = [],
        userNameInput;
        
        doubbleButton.style.display = 'none';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
        resetButton.style.display = 'none';
        
        
        newGameButton.addEventListener('click', function() {
            
            // if (gameState === null) {
                // gameState = true;
                userNameInput = window.prompt("Enter Your Name");
            //}
            // else {
            //     game = new BlackJack.singleDeckGame;
            //     result = new BlackJack.Result;
            
            userName.innerText = userNameInput;
            doubbleButton.style.display = 'inline';
            hitButton.style.display = 'inline';
            stayButton.style.display = 'inline';
            resetButton.style.display = 'inline';
        });


        
        
        //newGameButton.style.display = 'none';
        // });
}
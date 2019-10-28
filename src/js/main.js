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
          reset = document.getElementById()
          
          ;

    var gameHistory = [];
    var userNameInput = window.prompt("What's your name?")
    
        

    doubbleButton.style.display = 'none';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';

    
    newGameButton.addEventListener('click', function() {
        gameOver = false;
        playerWon = false;
        
        
        newGameButton.style.display = 'none';
        doubbleButton.style.display = 'inline';
        hitButton.style.display = 'inline';
        stayButton.style.display = 'inline';
      });
}
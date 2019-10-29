import BlackJack from 'blackjack-dealer-logic'

export default () => {
    
    // // DOM variables
    const game = BlackJack.singleDeckGame,
          result = BlackJack.Result,
          statsDisplay = document.getElementById('stats-display'),
          newGameButton = document.getElementById('new-game-button'),
          doubleButton = document.getElementById('doubble-button'),
          hitButton = document.getElementById('hit-button'),
          stayButton = document.getElementById('stay-button'),
          userHand = document.getElementById('user-hand'),
          userName = document.getElementById('user-name'),
          userChipCount = document.getElementById('user-chip-count'),
          userWager = document.getElementById('view-user-wager'),
          dealer = document.getElementById("dealer"),
          History = document.getElementById('game-history'),
          resetButton = document.getElementById('reset-button');
    let gameHistory = [],
        userNameInput,
        wager = 0;
        
        // "Double", "Hit", "Stay", and "Reset" Buttions are hidden the beginning 
        doubleButton.style.display = 'none';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
        resetButton.style.display = 'none';
        // Asking User For Name
        userNameInput = window.prompt("Welcome To BlackJack \nEnter Your Name:");
        userName.innerHTML = `Current Player: ${userNameInput}`;

        game.deal();
        // New Game (Current Player) Button
        newGameButton.addEventListener('click', function() {
                        
            history.innerHTML = gameHistory;
            showDeckScreen();
            
            userChipCount.innerHTML = `Your current chip count is: ${game.getUserChips()}`;
            
            wager = window.prompt("What is your wager? (out of 200):");
            game.receiveAnte(wager);
            userWager.innerHTML = `Your wager is: ${wager}`;
            

            dealer.innerHTML = `Dealer is showing: ${game.getDealerCardUp()}`;
            userHand.innerHTML = `Your Current hand: ${game.getUserHandValue()}`;

            doubleButton.addEventListener('click', function(){
                game.doubleUser();
                game.evaluateUser();

                alert(`You doubled your Wager! \nNew Wager: ${game.getAnte()}`)
                game.settleDealerHand();

                userWager.innerHTML = `Your wager is: ${game.getAnte()}`;
                
                // checks to see if the user is bust
                switch(game.outcome()) {
                    case result.LOSS:
                        alert(`Busted!!! You went over 21!\nYou Lost The Game :(`)
                        game.resetAnte();
                        gameHistory.push("lost");
                        clearDeckScreen();
                        break;

                    case result.PUSH:
                        alert(`Its A Draw!!`);
                        game.pushHand();
                        gameHistory.push("push");
                        clearDeckScreen();
                        break;

                    case result.WIN:
                        alert(`Awesome!!! You won!!!`);
                        game.userWin();
                        gameHistory.push("win");
                        clearDeckScreen();
                        break;

                default:
                break;
                }
                game.resetPlayers();
        });
    
            hitButton.addEventListener('click', function(){
                game.hitUser();
                game.evaluateUser();
                userHand.innerHTML = `Your Current hand: ${game.getUserHandValue()}`;
                game.settleDealerHand();

                // checks to see if the user is bust
                switch(game.outcome()) {
                case result.LOSS:
                    alert(`Busted!!! You went over 21!\nYou Lost The Game :(`)
                    game.resetAnte()
                    gameHistory.push("lost");
                    clearDeckScreen();
                    break;
                
                case result.PUSH:
                    alert(`Its A Draw!!`);
                    game.pushHand();
                    gameHistory.push("push");
                    clearDeckScreen();
                    break;
                      
                case result.WIN:
                    alert(`Awesome!!! You won!!!`);
                    game.userWin();
                    gameHistory.push("win");
                    clearDeckScreen();
                    break;
    
                    default:
                    break;
            }
            game.resetPlayers();
        });

        stayButton.onclick = function(){
            game.standUser();
            game.evaluateUser();

            userHand.innerHTML = `Your Current hand: ${game.getUserHandValue()}`;

            game.settleDealerHand();

            dealer.innerHTML = `Dealer is showing: ${game.getDealerHandValue()}`;

            switch (game.outcome()){
                case result.LOSS:
                    alert(`Busted!!! You went over 21!\nYou Lost The Game :(`)
                    game.resetAnte()
                    gameHistory.push("lost");
                    clearDeckScreen();
                    break;

                  case Result.PUSH:
                    alert(`Its A Draw!!`);
                    game.pushHand();
                    gameHistory.push("push");
                    clearDeckScreen();
                    break;
                        
                  case Result.WIN:
                    alert(`Awesome!!! You won!!!`);
                    game.userWin();
                    gameHistory.push("win");
                    clearDeckScreen();
                    break;
    
                    default:
                    break;
                    }
            game.resetPlayers();
        };
        });

        // Resets The Game For New Players
        resetButton.addEventListener('click', function() {
            window.location.reload();
        });

    function clearDeckScreen(){
        game.resetPlayers();
        userWager.style.display = 'none';
        userHand.style.display = 'none';
        dealer.style.display = 'none';
        newGameButton.style.display = 'inline';
        doubleButton.style.display = 'none';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
        statsDisplay.innerHTML = 'block';
        statsDisplay.innerHTML = '\n\n\nStart New Wager or Reset The Game';
    }

    function showDeckScreen() {
        userWager.style.display = 'block';
        userHand.style.display = 'block';
        dealer.style.display = 'block';
        newGameButton.style.display = 'none';
        doubleButton.style.display = 'inline';
        hitButton.style.display = 'inline';
        stayButton.style.display = 'inline';
        resetButton.style.display = 'inline';
        //statsDisplay.innerHTML = 'none';

    }
}
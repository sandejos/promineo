class Players{ // initializes the players class to store the players names
  constructor(){
    this.names = [];

  }
 createPlayers(){ //creates the players 
    for (let i = 0; i < 2; i++) {
      let playerName = prompt(`The name for Player ${[i + 1]}`);
      this.names.push(playerName);

    }
    return this.names;
  }
}


class WarGameMainMenu{ // initializes the War Game menu class
  constructor(){
      this.names = [];
      this.names2 = [];
  }

  StartWarMainMenu(){ // creates the main menu for the war game
    let selection = this.showMainMenu();

    while(selection != 0){
      switch(selection){
        case '1':
          this.startAGameOfWar();
          break;
        default:
          return 0;
      }
      selection = this.showMainMenu();
    }

  }

  showMainMenu(){ // shows main menu
    return prompt(`
    1. Play War
    All Other Buttons Will Terminate the Program`);
  }
  

  startAGameOfWar(){ // starts the game 
  let playerMake = new Players(); // initizalies the players class to allow players to be created 
  let getPlayers = playerMake.createPlayers();
  let playerOne = getPlayers[0];
  let playerTwo = getPlayers[1];

  function concatenate(var1, var2){ // function to concatenate a string of text
    if(typeof var1 != 'string'){
        throw new Error('This must be a string');
    }
    return var1 + var2;
}
  let varOne = "Player One And ";
  let varTwo = 'Player Twos Names Are: '
   console.log(concatenate(varOne, varTwo), playerOne, playerTwo); // logs out the two players playing war

   function getDeck(){  // creates the deck of cards
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13];
    const rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q','K'];

    let deck = [];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
      let card = { Value: values[j], Suit: suits[i], Rank: rank[j] };
      deck.push(card);
        }
      }
      return deck;
    }
    
    let deck = getDeck(); // calls the function that creates the deck 

    function randomizer(){ // Fisher-Yates Shuffle Method to shuffle the deck
    for (let i = deck.length - 1; i > 0; i--) {
      let k = Math.floor(Math.random() * i);
      let temp = deck[i];
      deck[i] = deck[k];
      deck[k] = temp;
    }
    return deck;
  }

    let deckRandom = randomizer();

     function cardDeal(deckRandom) {      // cuts the deck of cards in half and assigns them to playerOneCards and playerTwoCards
     const half = Math.ceil(deckRandom.length / 2);
          let playerOneCards = deckRandom.slice(0, half)
          let playerTwoCards = deckRandom.slice(-half)
      
          return [playerOneCards, playerTwoCards]
  }
  
  let playerHands = cardDeal(deckRandom);
  let playerOneCards = playerHands[0]; // Player 1 Cards
  let playerTwoCards = playerHands[1]; // Player 2 Cards
    // console.log(playerOneCards);
    //console.log(playerTwoCards);
  function gamePlay(playerOneCards, playerTwoCards){ // takes in player cards and converts them to a string and compares the string calue to each other to get a score
          let playerOneScore = 0;                     // the .shift removes cards from the array 
          let playerTwoScore = 0;
        
        for(let i = 0; i < playerOneCards.length ; i++){
          if(JSON.stringify(playerOneCards) > JSON.stringify(playerTwoCards)){
            console.log('Player One Wins the round')
            playerOneScore +=1;
            playerOneCards.shift();
            playerTwoCards.shift();
            console.log(`Player one score: ${playerOneScore} Player Two Score: ${playerTwoScore}`)
          } else if (JSON.stringify(playerTwoCards)> JSON.stringify(playerOneCards)){
            console.log('Player two wins the round');
            playerTwoScore +=1;
            console.log(`Player one score: ${playerOneScore} Player Two Score: ${playerTwoScore}`)
            playerOneCards.shift();
            playerTwoCards.shift();
          } else if (JSON.stringify(playerOneCards) == JSON.stringify(playerTwoCards)) 
          console.log('No Points Given');
          console.log(`Player one score: ${playerOneScore} Player Two Score: ${playerTwoScore}`);
          playerOneCards.shift();
           playerTwoCards.shift();
        }
      if (playerOneScore > playerTwoScore){
      console.log(playerOne,'Wins the Game');
      } else console.log(playerTwo, 'Wins The Game'); 
  }

  let newGame = gamePlay(playerOneCards, playerTwoCards);
  }
}

let menu = new WarGameMainMenu();
menu.StartWarMainMenu();
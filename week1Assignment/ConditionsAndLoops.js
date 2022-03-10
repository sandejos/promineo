class PlayerOne{
  constructor(name, points){
  this.name = name;
  this.points = points;
  }
}
class PlayerTwo{
  constructor(name, points){
    this.name = name;
    this.points = points;
  }
}

class WarGameMainMenu{
  constructor(){
      this.names = [];
      this.names2 = [];
  }

  StartWarMainMenu(){
    let selection = this.showMainMenu();

    while(selection != 0){
      switch(selection){
        case '1':
          this.createPlayerOne();
          break;
        case '2':
          this.createPlayerTwo();
          break;
        case '3':
          this.startAGameOfWar();
          break;
        default:
          return 0;
      }
      selection = this.showMainMenu();
    }

  }

  showMainMenu(){
    return prompt(`
    1. Create Player One
    2. Create Player Two
    3. Play War
    All Other Buttons Will Terminate the Program`);
  }
  
  createPlayerOne(){
    let name = prompt('Please enter a name for Player One: ');
    this.names.push(new PlayerOne(name));
    console.log(name);
  }

  createPlayerTwo(){
    let name = prompt('Please enter a name for Player Two:');
    this.names2.push(new PlayerTwo(name));
    console.log(name);
  }

  startAGameOfWar(){
   
   function getDeck(){ const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q','K'];

    let deck = [];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
      let card = { Value: values[j], Suit: suits[i] };
      deck.push(card);
        }
      }
      return deck;
    }
    
    let deck = getDeck();
    
    function randomizer(){
    for (let i = deck.length - 1; i > 0; i--) {
      let k = Math.floor(Math.random() * i);
      let temp = deck[i];
      deck[i] = deck[k];
      deck[k] = temp;
    }
    return deck;
  }

   let deckrandom = randomizer();

   function dealCards(){
          let hand = [];

          while(hand.length < 52){
            hand.push(deckrandom.pop());
          }
          return hand;
                    
        }
          let hand = dealCards();

          const half = Math.ceil(hand.length / 2);
          let playerOneCards = hand.slice(0, half)
          let playerTwoCards = hand.slice(-half)
        
      
      console.log(playerOneCards);
      console.log(playerTwoCards);
      

      function playGame(playerOneCards,playerTwoCards, PlayerOne, PlayerTwo) {
        let playerOneScore = 0;
        let playerTwoScore = 0;

        for(let i = 0; i < 26; i++){
          if(playerOneCards > playerTwoCards){
            console.log('Player one wins');
            playerOneScore +=1;
          } else if (playerTwoCards > playerOneCards){
            console.log('Player two wins');
            playerTwoScore +=1;
          } else (playerOneCards == playerTwoCards)
          console.log('No Points Given');
        }
      }
      playGame();
  
      
  }
}

let menu = new WarGameMainMenu();
menu.StartWarMainMenu();
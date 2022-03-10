class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

class Deck{
    constructor(){
        this.theCardDeck = [];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q','K'];
    

        
        // let deck = []; Might want to get rid of this later 
    
        for (let suit in suits) {
            for (let rank in ranks) {
              this.thecardDeck.push([
                values[rank],
                ranks[rank] + " of " + suits[suit],
              ]);
            }
          }
    }

    shuffleDeck(){
        for (let i = deck.length - 1; i > 0; i--) {
            let k = Math.floor(Math.random() * i);
            let temp = deck[i];
            deck[i] = deck[k];
            deck[k] = temp;
          }
          return deck;
    }
}

let deck = new Deck();
console.log(deck);
class Player{
    constructor(){
        this.player = [];
        this.playerCards = []; 
    }
}

class WarGame{
    constructor(){
        //let 
    }
}
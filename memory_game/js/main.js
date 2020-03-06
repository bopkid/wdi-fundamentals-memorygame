
let cards = ["queen","queen","king","king"];

let cardsInPlay = [];

function checkForMatch(){
        
    if(cardsInPlay.length === 2){
        if(cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match!");
        }
        else{
            alert('Sorry, try again');
        }
    }
}


function flipCard(cardId){

    let cardOne = cards[0];
    let cardTwo = cards[2];
    let cardThree = cards[1];
    let cardFour = cards[3];

    
    console.log('User flipped ' +cards[cardId]);
    
    cardsInPlay.push(cards[cardId]);

    checkForMatch();
}


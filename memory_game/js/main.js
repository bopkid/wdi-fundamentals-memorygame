
let card = ["queen","queen","king","king"];
let cardOne = card[0];
let cardTwo = card[2];
let cardThree = "king";
let cardFour = "king";

let cardsInPlay = [];



cardsInPlay.push(cardOne);
console.log('User flipped '+cardsOne)
cardsInPlay.push(cardTwo);
console.log('User flipped '+cardsTwo)


if(cardsInPlay.length === 2){
    if(cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    }
    else{
        alert('Sorry, try again');
    }
}

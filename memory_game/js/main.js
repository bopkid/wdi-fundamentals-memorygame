
let cards = [{
    rank:"queen",
    suit:"hearts",
    cardImage:'images/queen-of-hearts.png'
},

{
    rank:"queen",
    suit:"diamonds",
    cardImage:"images/queen-of-diamonds.png"
},

{
    rank:"king",
    suit:"hearts",
    cardImage:'images/king-of-hearts.png'
},

{
    rank:"king",
    suit:"diamonds",
    cardImage:'images/king-of-diamonds.png'
},

];
console.log('9');

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

function flipCard(e){
    let cardId =e.getAttribute("data-id");
    cardsInPlay.push(cards[cardId].rank);
    
    checkForMatch();
    e.setAttribute(cards[cardId].cardImage);
    
}

function createBorad(){
    for(let i= 0; i < cards.length; i++)
    {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', '../images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard(this));
        document.getElementById('game').append(cardElement);

    }
 
  
}


console.log(createBorad());

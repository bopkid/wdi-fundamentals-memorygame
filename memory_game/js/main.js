
let cards = [{
    rank:"queen",
    suit:"hearts",
    cardImage:'../images/queen-of-hearts.png'
},

{
    rank:"queen",
    suit:"diamonds",
    cardImage:"../images/queen-of-diamonds.png"
},

{
    rank:"king",
    suit:"hearts",
    cardImage:'../images/king-of-hearts.png'
},

{
    rank:"king",
    suit:"diamonds",
    cardImage:'../images/king-of-diamonds.png'
},

];
console.log('9');

let cardsInPlay = [];

function checkForMatch(){
        
    if(cardsInPlay.length === 2){
       
        if(cardsInPlay[0].rank === cardsInPlay[1].rank){
            alert("You found a match!");
        }
        else{
            alert('Sorry, try again');
        }
    }
}

function flipCard(e){

    const cardId = e.id;
    e.setAttribute('src',cards[cardId].cardImage);
    checkForMatch();
    cardsInPlay.push(cards[cardId]);

}

function createBorad(){
    
    for(let i= 0; i < cards.length; i++)
    {
        const cardElement = document.createElement('img');
        cardElement.setAttribute('src', '../images/back.png');
        cardElement.setAttribute('id', i);
        document.getElementById('game').append(cardElement);
        cardElement.addEventListener("click",function (){flipCard(cardElement)});
        
    }
    
    
    
  
}


console.log(createBorad());

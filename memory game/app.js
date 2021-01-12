document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'mushroom',
      img: 'images/images1.jpeg',
    },
    {
      name: 'plant',
      img: 'images/images2.jpeg',
    },
    {
      name: 'star',
      img: 'images/images4.png',
    },
    {
      name: 'ant',
      img: 'images/images7.jpeg',
    },
    {
      name: 'mario',
      img: 'images/images8.png',
    },
    {
      name: 'cloud',
      img: 'images/images15.jpeg',
    },
    {
      name: 'mr mushroom',
      img: 'images/images5.png',
    },
    {
      name: 'princess',
      img: 'images/images14.png',
    },
    {
      name: 'mushroom',
      img: 'images/images1.jpeg',
    },
    {
      name: 'plant',
      img: 'images/images2.jpeg',
    },
    {
      name: 'star',
      img: 'images/images4.png',
    },
    {
      name: 'ant',
      img: 'images/images7.jpeg',
    },
    {
      name: 'mario',
      img: 'images/images8.png',
    },
    {
      name: 'cloud',
      img: 'images/images15.jpeg',
    },
    {
      name: 'mr mushroom',
      img: 'images/images5.png',
    },
    {
      name: 'princess',
      img: 'images/images14.png',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  let grid = document.querySelector('.grid');
  var resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create the board
  function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
      var card = document.createElement('img');
      card.setAttribute('src', 'images/blank1.jpg');
      card.setAttribute('data-id', i);
      grid.appendChild(card);
      card.addEventListener('click', flipcard);
    }
  }

  //check for matches
  function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]){
      alert('You found a Match!');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src','images/blank1.jpg');
      cards[optionTwoId].setAttribute('src','images/blank1.jpg');
      alert('Sorry Try Again');
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
      resultDisplay.textContent = 'Congratulation! You Found them all!';
    }
  }
  //flip card function
  function flipcard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();

})

console.log('is this working?')

let cardIndex = 0;
showCards(cardIndex)

//next en prev controls
function plusCards(n) {
    showCards(cardIndex += n);
}

function showCards(n) {
    let i;
    let cards = document.getElementsByClassName('cards')
    if (n > cards.length) { cardIndex = 1 }
    if (n < 1) { cardIndex = cards.length }
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    cards[cardIndex - 1].style.display = 'flex';

}

// https://www.w3schools.com/howto/howto_js_slideshow.asp
function rimuoviCard (){
    let cardPin=document.getElementsByClassName('card');
    console.log(cardPin);
    for (let iterator of cardPin) {
        iterator.classList.toggle('visually-hidden');
    }
}
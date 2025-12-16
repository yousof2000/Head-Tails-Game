let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0
};

function PlayGames(guess) {

    const coin = document.querySelector('.coin');

    document.querySelector('.chose').innerHTML = '';
    document.querySelector('.resolt').innerHTML = '';
    document.querySelector('.finalResolt').innerHTML = 'Flipping...';


    // 1. إعادة تعيين الدوران (مهم جداً للبدء من جديد)
    coin.style.transform = 'rotateY(0deg)';

    let resolt = guessTheMove();
    let finalResolt = '';

    let rotations;

    if (resolt === 'heads') {
        rotations = 3600;
    } else {
        rotations = 3780;
    }

    setTimeout(() => {
        coin.style.transform = `rotateY(${rotations}deg)`;

       
        setTimeout(() => {

            if (resolt === guess) {
                finalResolt = 'You Winner!';
            } else {
                finalResolt = 'You lose!'
            }

            if (finalResolt === 'You Winner!') {
                score.win++
            } else {
                score.lose++

            }

            localStorage.setItem('score', JSON.stringify(score));

            Show(guess, resolt, finalResolt)
        }, 1000); 
    }, 100);

};

function Show(guess, resolt, finalResolt) {

    const choseElement = document.querySelector('.chose');
    const resoltElement = document.querySelector('.resolt');
    const finalResoltElement = document.querySelector('.finalResolt');

    choseElement.innerHTML = `Your choice: ${guess}`;
    resoltElement.innerHTML = `Coin landed on: ${resolt}`;


    finalResoltElement.innerHTML = `${finalResolt} <br> (W: ${score.win}, L: ${score.lose})`
}

function guessTheMove() {

    let random = Math.random();
    let resolt = '';

    if (random < 0.5) {
        resolt = 'heads';
    } else {
        resolt = 'tails';
    }
    return resolt
}

function ResetScore() {
    score.win = 0;
    score.lose = 0;

    localStorage.removeItem('score');


    document.querySelector('.chose').innerHTML = '';
    document.querySelector('.resolt').innerHTML = '';
    document.querySelector('.finalResolt').innerHTML = 'Score Reset. (W: 0, L: 0)';


    document.querySelector('.coin').style.transform = 'rotateY(0deg)';
}

function solve() {

    Array.from(document.getElementsByTagName('img')).forEach((img) => {
        img.addEventListener('click', clickEvent);
    });

    function clickEvent(e) {

        let card = e.target;
        card.src = './images/whiteCard.jpg';
        card.removeEventListener('click', clickEvent);
        let parent = card.parentNode;

        let spans = document.getElementById('result').children;

        if (parent.id === 'player1Div') {
            spans[0].textContent = card.name;
        }
        else if (parent.id === 'player2Div') {
            spans[2].textContent = card.name;
        }

        let card1NumSpan = spans[0];
        let card2NumSpan = spans[2];

        let card1NumString = card1NumSpan.textContent;
        let card2NumString = card2NumSpan.textContent;

        if (card1NumString && card2NumString) {

            let winner;
            let loser;

            if (+card1NumString > +card2NumString) {
                winner = document.querySelector(`#player1Div img[name= '${card1NumString}']`);
                loser = document.querySelector(`#player2Div img[name= '${card2NumString}']`);

            }
            else {
                winner = document.querySelector(`#player2Div img[name= '${card2NumString}']`);
                loser = document.querySelector(`#player1Div img[name= '${card1NumString}']`);
            }

            winner.style.border = '2px solid green';
            loser.style.border = '2px solid DarkRed';

            document.getElementById('history').textContent += `[${card1NumString} vs ${card2NumString}] `;


            function deleteF() {

                card1NumSpan.textContent = '';

                card2NumSpan.textContent = '';

            }

            setTimeout(deleteF(), 2000);

        }


    }
}
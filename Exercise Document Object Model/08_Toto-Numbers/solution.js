function solve() {

    let numbersElement = document.getElementById('myNumbers');

    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', numbers);

    let numbersHtmlCollection = numbersElement.getElementsByTagName('input');

    function numbers() {

        let numbersString = Array.prototype.slice.call(numbersHtmlCollection)[0].value;
        let numbersArray = numbersString.split(' ');

        if (numbersArray.length !== 6) {
            return;
        }


        for (let i = 1; i <= 49; i++) {
            let divElement = document.createElement('div');
            let textContentInDiv = i.toString();
            divElement.innerHTML = textContentInDiv;
            divElement.className = 'numbers';

            if (numbersArray.includes(textContentInDiv)) {

                divElement.style.backgroundColor = "orange";
            }

            document.getElementById('allNumbers').appendChild(divElement);

        }
        button.disabled = true;
        numbersHtmlCollection[0].disabled = true;


    }
}
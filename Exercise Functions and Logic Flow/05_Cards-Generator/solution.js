function solve() {

    let fromElement = document.getElementById('from');
    let toElement = document.getElementById('to');
    let button = document.getElementsByTagName('button')[0];
    let select = document.getElementsByTagName('select')[0];
    let result = document.getElementById('cards');


    button.addEventListener('click', transform);

    function transform() {

        let option = select.options[select.selectedIndex].value;
        let shape = option[option.length - 1];

        if (fromElement.value === 'A') {
            fromElement.value = +1;
        }
        else if (fromElement.value === 'J') {
            fromElement.value = +11;
        }
        else if (fromElement.value === 'Q') {
            fromElement.value = +12;
        }
        else if (fromElement.value === 'K') {
            fromElement.value = +13;
        }

        if (toElement.value === 'A') {
            toElement.value = +1;
        }
        else if (toElement.value === 'J') {
            toElement.value = +11;
        }
        else if (toElement.value === 'Q') {
            toElement.value = +12;
        }
        else if (toElement.value === 'K') {
            toElement.value = +13;
        }


        for (let i = +(fromElement.value); i <= +(toElement.value); i++) {
            let card = document.createElement('div');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            card.className = 'card';
            p1.textContent = shape;

            if (i === 1) {
                p2.textContent = 'A';
            }
            else if (i === 11) {
                p2.textContent = 'J';
            }
            else if (i === 12) {
                p2.textContent = 'Q';
            }
            else if (i === 13) {
                p2.textContent = 'K';
            }
            else {
                p2.textContent = i.toString();
            }

            p3.textContent = shape;

            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);

            result.appendChild(card);

        }
        fromElement.value = '';
        toElement.value = '';
    }


}
function solve() {

    let summaryButton = document.getElementById('summary').children[0];
    let summaryResult =document.getElementById('summary').children[1];
    let textarea = document.getElementById('output');

    summaryButton.addEventListener('click', solution);

    let sections = document.getElementsByTagName('section');

    let price = +0;
    let money = +0;
    let fans = +0;
    for (let section of sections) {

        let zone = section.className;
        let buttons = section.getElementsByTagName('button');
        let buttonsArr = Array.prototype.slice.call(buttons);
        let sector = '';

        buttonsArr.forEach(function (button, index) {
            button.addEventListener('click', () => {

                if (index % 3 === 0) {
                    sector = 'A';

                    if (zone === 'Levski' || zone === 'Litex') {
                        price = 10;
                    }
                    else {
                        price = 25;
                    }
                } else if ((index - 1) % 3 === 0) {
                    sector = 'B';
                    if (zone === 'Levski' || zone === 'Litex') {
                        price = 7;
                    }
                    else {
                        price = 15;
                    }
                } else {
                    sector = 'C';
                    if (zone === 'Levski' || zone === 'Litex') {
                        price = 5;
                    }
                    else {
                        price = 10;
                    }
                }

                if (button.style.backgroundColor === "rgb(255, 0, 0)") {
                    textarea.value += ` Seat ${button.textContent} in zone ${zone} sector ${sector} is unavailable.\n`;
                }
                else {
                    fans++;
                    money += price;
                    button.style.backgroundColor = 'rgb(255,0,0)';
                    textarea.value += ` Seat ${button.textContent} in zone ${zone} sector ${sector} was taken.\n`;
                    console.log(money);
                    console.log(fans);
                }
            });


        });


    }


    function solution() {
        summaryResult.textContent = `${money} leva, ${fans} fans.`

    }
}
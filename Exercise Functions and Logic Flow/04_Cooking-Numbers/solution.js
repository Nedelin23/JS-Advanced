function solve() {

    let numberElement = document.querySelector('#exercise input[type = "number"]');
    let output = document.getElementById('output');

    let result = +0;
    let number = +0;


    let chopButton = document.getElementsByTagName('button')[0];
    let diceButton = document.getElementsByTagName('button')[1];
    let spiceButton = document.getElementsByTagName('button')[2];
    let bakeButton = document.getElementsByTagName('button')[3];
    let filletButton = document.getElementsByTagName('button')[4];




    chopButton.addEventListener('click', chop);

    function chop() {

        number = +(output.textContent) || +numberElement.value;
        result = number / 2;
        output.textContent = result;


    }

    diceButton.addEventListener('click', dice);
    function dice() {
        number = +(output.textContent)|| +numberElement.value;
        result = Math.sqrt(number);
        output.textContent = result;

    }

    spiceButton.addEventListener('click', spice);
    function spice() {
        number = +(output.textContent) || +numberElement.value;
        result = number + 1;
        output.textContent = result;

    }

    bakeButton.addEventListener('click', bake);
    function bake() {
        number = +(output.textContent)|| +numberElement.value;
        result = number * 3;
        output.textContent = result;

    }
    filletButton.addEventListener('click', fillet);
    function fillet() {
        number = +(output.textContent) || +numberElement.value;
        result = number * 0.8;
        output.textContent = result;


    }






}

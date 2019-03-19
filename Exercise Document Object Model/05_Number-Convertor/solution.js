function solve() {

    let number = document.getElementById('input');
    let result = document.getElementById('result');

    let select = document.getElementById('selectMenuTo');
    select.innerHTML = '';

    let binaryOption = document.createElement('option');
    binaryOption.text = 'Binary';
    binaryOption.value = 'binary';
    select.appendChild(binaryOption);

    let hexaDecimalOption = document.createElement('option');
    hexaDecimalOption.text = 'Hexadeicmal';
    hexaDecimalOption.value = 'hexadecimal';
    select.appendChild(hexaDecimalOption);

    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', convert);

    function convert() {
        let selectedOption = select.selectedIndex;
        console.log(selectedOption);
        if(selectedOption === 0){
            result.value = parseInt((number.value), 10).toString(2);

        }

        else if(selectedOption === 1){
            result.value = parseInt((number.value), 10).toString(16);
            result.value = (result.value).toUpperCase();

        }
    }
}
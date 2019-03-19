function getNext() {

    let number = document.getElementById('num').value;
    let arr = [];
    arr.push(+number);

    while (number !== 1) {

        if (number % 2 === 0) {
            number = number / 2;
            arr.push(number);

        }
        else {
            number = (3 * number) + 1;
            arr.push(number);

        }
    }

    let result = document.getElementById('result');
    let resultString = '';

    for (let i = 0; i <= arr.length - 1; i++) {

        resultString += arr[i].toString();
        resultString += ' ';

    }

    result.textContent = resultString;


}
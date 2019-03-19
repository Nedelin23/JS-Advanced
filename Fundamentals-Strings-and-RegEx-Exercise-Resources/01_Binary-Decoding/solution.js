function solve() {

    let string = document.getElementById('str').value;
    let result = document.getElementById('result');

    let charactersToTake = string;

    while (charactersToTake.length > 1) {

        let temp = charactersToTake
            .split("")
            .map(Number)
            .filter((x) => x > 0)
            .reduce((a, b) => a + b)
            .toString();

        charactersToTake = temp;

    }

    let end = string.length - charactersToTake;

    let resultedString = string.slice(charactersToTake, end);

    let arrSegments = resultedString.match(/.{1,8}/g);



    let asciiResult = [];

    for (let j = 0; j < arrSegments.length; j++) {
        let digit = parseInt(Number(arrSegments[j]), 2);
        let digitToString = String.fromCharCode(digit);

        asciiResult.push(digitToString);
    }

    let pattern = /[A-Za-z ]+/g;
    let filtered = asciiResult.join('').match(pattern).join('');
    console.log(filtered);

    result.textContent = filtered.toString();


}
function solve() {

    let input = document.getElementById('input');
    let button = document.getElementsByTagName('button')[0];
    let ouputField = document.getElementById('output');

    button.addEventListener('click', () => {
        let numRegex = /([0-9]+)/gm;
        let match = numRegex.exec(input.value);
        let number = match[0];
        let beginning = number.length;
        let inputArr = input.value.split('');

        let string = inputArr.splice(beginning, number).join('');
        let charSplit = string.slice(-1);

        let splited = string.split(charSplit);

        let regexPart = new RegExp(`[${splited[0]}]`, 'gm');
        console.log(regexPart);
        let body = splited[1];
        let replaced = body.replace(regexPart, '');
        let result = replaced.split('#').join(' ');

        ouputField.textContent = result;


    });


}
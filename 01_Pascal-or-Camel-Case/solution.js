function solve() {

    let firstString = document.getElementById('str1').value;
    let currentCase = document.getElementById('str2').value;
    let resultElement = document.getElementById('result');

    let resultText = firstString
        .toLowerCase()
        .split(' ')
        .filter(x => x !== '')
        .map(e => e.charAt(0)
            .toUpperCase()
            + e.slice(1)).join('');

    if(currentCase === 'Camel Case'){
        resultText = resultText.charAt(0).toLowerCase() + resultText.slice(1)

    }

    else if(currentCase !== 'Camel Case' && currentCase !== 'Pascal Case' ){
        resultText = 'Error!';
    }
    resultElement.textContent = resultText;
}
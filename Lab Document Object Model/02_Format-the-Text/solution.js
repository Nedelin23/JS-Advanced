function solve() {
    let text = document.getElementById('input').textContent;
    //console.log(text);

    let sentenceArr = text.split('.');
    //console.log(sentenceArr);

    let outputContainer = document.getElementById('output');

    let paragraph = document.createElement('p');
    for (let i = 0; i < sentenceArr.length - 1; i++) {
        if (i % 3 === 0) {
            outputContainer.appendChild(paragraph);
            paragraph = document.createElement('p');
        }
        paragraph.innerHTML += sentenceArr[i] + ".";
    }

    outputContainer.appendChild(paragraph);
}
function solve() {

    let divNodes = document.getElementById('exercise').children;
    let divNodesArr = Array.prototype.slice.call(divNodes);

    for (let divNode of divNodesArr) {
        let aNode = divNode.querySelector('a');
        let spanNode = divNode.querySelector('span');

        aNode.addEventListener('click', function f() {
            let spanText = spanNode.innerHTML; //maybe textContent
            const regex = /[0-9]+/gm;

            let regexMatch = regex.exec(spanText);
            let value = regexMatch[0];

            let newSpanText = spanText.replace(regex, ++value);

            spanNode.textContent = newSpanText;
        });
    }
}
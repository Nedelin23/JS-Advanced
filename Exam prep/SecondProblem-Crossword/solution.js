function solve() {
    let filterButton = document.getElementsByTagName('button')[0];
    let sortButton = document.getElementsByTagName('button')[1];
    let rotateButton = document.getElementsByTagName('button')[2];
    let getButton = document.getElementsByTagName('button')[3];

    let outputParagraph = document.getElementById('output').children[0];

    //FILTER
    filterButton.addEventListener('click', () => {

        let input = document.getElementById('input');
        let secondaryCommand = document.getElementById('filterSecondaryCmd').value;
        let filterPosition = +document.getElementById('filterPosition').value;
        let result = '';

        if (secondaryCommand === 'uppercase') {
            let string = '';
            for (let i = 0; i < input.value.length; i++) {
                if (input.value[i] === input.value[i].toUpperCase()
                    && input.value[i] !== input.value[i].toLowerCase()) {
                    string += input.value[i];
                }
            }
            result = string.charAt(filterPosition - 1);
            outputParagraph.textContent += result;
        }
        else if (secondaryCommand === 'lowercase') {
            let string = '';
            for (let i = 0; i < input.value.length; i++) {
                if (input.value[i] === input.value[i].toLowerCase()
                    && input.value[i] !== input.value[i].toUpperCase()) {
                    string += input.value[i];
                }
            }
            result = string.charAt(filterPosition - 1);
            outputParagraph.textContent += result;
        }
        else if (secondaryCommand === 'nums') {

            let string = '';
            for (let i = 0; i < input.value.length; i++) {

                if ('0123456789'.includes(input.value[i])) {
                    string += input.value[i];

                }
            }
            result = string.charAt(filterPosition - 1);
            outputParagraph.textContent += result;

        }
        input.value = '';

    });

    //SORT
    sortButton.addEventListener('click', () => {

        let input = document.getElementById('input');

        let sortSecondaryCmd = document.getElementById('sortSecondaryCmd').value;
        let sortPosition = document.getElementById('sortPosition').value;

        if (sortSecondaryCmd === 'A') {

            let arr = (input.value).split('');
            let sorted = arr.sort();
            let result = sorted.join('');

            result = result.charAt(sortPosition - 1);
            outputParagraph.textContent += result;
            input.value = '';

        }
        else if (sortSecondaryCmd === 'Z') {
            let arr = (input.value).split('');
            let sorted = arr.sort();
            sorted.reverse();
            let result = sorted.join('');

            result = result.charAt(sortPosition - 1);
            outputParagraph.textContent += result;
            input.value = '';
        }
    });

    //ROTATE
    rotateButton.addEventListener('click', () => {

        let input = document.getElementById('input');
        let rotateSecondaryCmd = document.getElementById('rotateSecondaryCmd').value;
        let rotatePosition = document.getElementById('rotatePosition').value;
        let result = '';
        let arr = (input.value).split('');
        for (let i = 0; i < rotateSecondaryCmd; i++) {
            let last = arr.pop();
            arr.unshift(last);
            result = arr.join('');

        }
        result = result.charAt(rotatePosition - 1);
        outputParagraph.textContent += result;
        input.value = '';
    });

    //GET
    getButton.addEventListener('click', () => {
        let input = document.getElementById('input');
        let getPosition = document.getElementById('getPosition').value;
        let result = '';
        result = (input.value).charAt(getPosition - 1);
        outputParagraph.textContent += result;
        input.value = '';
    });

}
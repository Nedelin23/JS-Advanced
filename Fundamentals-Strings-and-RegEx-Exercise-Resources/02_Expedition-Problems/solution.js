function solve() {

    let str = document.getElementById('str').value;
    let text = document.getElementById('text').value;
    let result = document.getElementById('result');

    let regex= /(north|east)[\s\S]*?([0-9]{2})[\s\S]*?,[\s\S]*?([0-9]{6})/gmi;


    let m;
    let stringNorthCoordinates = '';
    let stringEastCoordinates = '';

    while ((m = regex.exec(text)) !== null) {
        if(m[1].toLowerCase() === 'north'){
            stringNorthCoordinates = `${m[2]}.${m[3]} N`;
        }
        else if(m[1].toLowerCase() === 'east'){
            stringEastCoordinates = `${m[2]}.${m[3]} E`;
        }


    }

    let messageRegex = new RegExp(`${str}([^${str}]+)${str}`, "g");

    let message = 'Message: ' + messageRegex.exec(text)[1];

    appendToParrent(stringNorthCoordinates);
    appendToParrent(stringEastCoordinates);
    appendToParrent(message);


    function appendToParrent(text) {
        let p = document.createElement('p');
        p.textContent = text;
        result.appendChild(p);

    }

}
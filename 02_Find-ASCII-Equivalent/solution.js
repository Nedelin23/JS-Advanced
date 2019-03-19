function solve() {

    let str = document.getElementById('str').value;
    let result = document.getElementById('result');

    let elementsArr = str.split(' ').filter(x => x!== '');
    let output = '';


    for (let i = 0; i < elementsArr.length; i++){
        if(Number(elementsArr[i])){

            output += String.fromCharCode(+elementsArr[i]);

        }
        let arrChars = [];
        else{
            for (let wordIndex = 0; wordIndex < elementsArr[i].length; wordIndex++){

                let word = elementsArr[wordIndex]

            }

        }
    }


}
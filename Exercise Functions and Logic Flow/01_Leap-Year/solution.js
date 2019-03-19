function leapYear() {

    let numberElementHtmlCollection = document.getElementsByTagName('input');
    let numberElement = Array.prototype.slice.call(numberElementHtmlCollection);

    let yearElement = document.getElementById('year');
    let yearResult = yearElement.getElementsByTagName('h2')[0];
    let yearDiv = yearElement.getElementsByTagName('div')[0];


    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', leapYear);

    function leapYear() {

        if((numberElement[0].value) % 400 === 0
            || (numberElement[0].value) % 100 !== 0
            && (numberElement[0].value) % 4 === 0){

            yearResult.textContent = 'Leap Year';
            yearDiv.textContent = numberElement[0].value;
            numberElement[0].value = '';

        }
        else{
            yearResult.textContent = 'Not Leap Year';
            yearDiv.textContent = numberElement[0].value;
            numberElement[0].value = '';
        }

    }



}
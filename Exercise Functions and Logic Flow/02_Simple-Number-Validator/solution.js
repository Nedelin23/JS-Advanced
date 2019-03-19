function validate() {

    let numberElement = document.getElementsByTagName('input')[0];

    let button = document.getElementsByTagName('button')[0];

    let response = document.getElementById('response');

    button.addEventListener('click', validator);

    function validator() {

        let sum = Number(0);


        let weightArr = [2, 4, 8, 5, 10, 9, 7, 3, 6];

        for (let i = 0; i < 9; i++) {
            let temp1 = +weightArr[i];
            let temp2 = +numberElement.value[i];

            sum += temp1 * temp2;

        }

        let reminder = sum % 11;

        if(reminder === 10){
            reminder = +0;
        }

        if (reminder === +(numberElement.value[9])) {

            response.textContent = 'This number is Valid!';
        }
        else{
            response.textContent = 'This number is NOT Valid!';
        }



    }
}
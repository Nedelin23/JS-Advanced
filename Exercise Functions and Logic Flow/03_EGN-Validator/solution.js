function validate() {

    let yearElement = document.getElementById('year');
    let monthElement = document.getElementById('month');
    let dateElement = document.getElementById('date');
    let regionElement = document.getElementById('region');
    let egnElement = document.getElementById('egn');
    let maleRadioButton = document.getElementById('male');
    let femaleRadioButton = document.getElementById('female');

    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', generator);

    let egn = '';

    function generator() {
        let isValid = true;
        if(yearElement.value === ''
            || monthElement.value === ''
            || dateElement.value === ''
            || regionElement.value === ''
            || regionElement.value < 43
            || regionElement.value > 999
            || yearElement.value < 1900
            || yearElement.value > 2100
            && maleRadioButton.checked === false
            && femaleRadioButton.checked === false){

            isValid = false;
        }


        let firstDigit = yearElement.value[2];
        let secondDigit = yearElement.value[3];
        egn += firstDigit;
        egn += secondDigit;

        let monthObj = {
            January: '01',
            February: '02',
            March: '03',
            April: '04',
            May: '05',
            June: '06',
            July: '07',
            August: '08',
            September: '09',
            October: '10',
            November: '11',
            December: '12'
        };

        let thirdAndFourthDigit = monthObj[monthElement.value];
        egn += thirdAndFourthDigit;


        if (dateElement.value < 10) {
            egn += '0';
        }
        egn += dateElement.value;


        let threeDigits = '';

        if (regionElement.value < 100) {

            threeDigits = '0' + regionElement.value;
        }
        else {
            threeDigits = regionElement.value;
        }


        if (+(threeDigits[threeDigits.length - 1]) % 2 === 0) {
            egn += threeDigits[0] + threeDigits[1] + '2';
        }
        else {

            egn += threeDigits[0] + threeDigits[1] + '1';
        }

        let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let weightSum = +0;

        for (let j = 0; j < 9; j++) {

            if(egn[j] !== 0){
                let temp1 = weightPosition[j];
                let temp2 = egn[j];

                weightSum += temp1 * temp2;
            }


        }
        let checkNum = weightSum % 11;

        if (checkNum === 10) {
            checkNum = 0;
        }
        let lastDigit = checkNum;
        egn += lastDigit;

        if(isValid){
            egnElement.textContent = `Your EGN is: ${egn}`;

            yearElement.value = '';
            monthElement.value = '';
            dateElement.value = '';
            regionElement.value = '';
            egnElement.value = '';
            maleRadioButton.checked = false;
            femaleRadioButton.checked = false;
        }



    }

}
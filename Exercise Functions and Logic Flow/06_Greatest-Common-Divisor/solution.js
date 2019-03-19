function greatestCD() {

    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');

    let result = document.getElementById('result');
    let commonDivisor = +0;


    let maxNum = Math.max(+num1.value, +num2.value);
    let minNum = Math.min(+num1.value, +num2.value);

    if (maxNum % minNum === 0) {

        commonDivisor = minNum;
        result.textContent = commonDivisor.toString();
        return;

    }
    else {

        for (let i = maxNum; i > 0; i--) {

            if (maxNum % i === 0 && minNum % i === 0) {
                commonDivisor = i;
                result.textContent = commonDivisor.toString();
                return;
            }
        }
    }


}
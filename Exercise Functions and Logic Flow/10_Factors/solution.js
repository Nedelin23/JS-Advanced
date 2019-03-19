function solve() {
   
    let num = document.getElementById('num').value;
    let resultString = [];


    for (let i = 1; i <= num; i ++){

        if(num % i === 0){
            resultString.push(i);

        }
    }

    let result = document.getElementById('result');
    result.textContent = resultString.join(' ');
    console.log( resultString.join(' '));
    

}
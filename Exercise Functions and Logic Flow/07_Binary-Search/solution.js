function binarySearch() {

    let arr = document.getElementById('arr').value.split(', ');
    let num = document.getElementById('num').value;
    let result = document.getElementById('result');

    let index;

    if(arr.includes(num)){
        index = arr.indexOf(num);
        result.textContent = `Found ${num} at index ${index}`

    }
    else{
        result.textContent = `${num} is not in the array`

    }


}
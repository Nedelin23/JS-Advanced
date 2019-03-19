function solve() {

    let infoHtmlCollection = document.getElementsByTagName('tr');
    let infoBody = Array.prototype.slice.call(infoHtmlCollection);

    let searchField = document.getElementById('searchField');
    let button = document.getElementById('searchBtn');


    button.addEventListener('click', second);

    function second() {
        if (!searchField.value.trim()) {
            searchField.value = '';
            return;
        }

        if (currentArr.length > 0) {
            for (let element of currentArr) {
                element.className = '';
            }
        }
        search();
    }


    let currentArr = [];


    function search() {

        for (let i = 2; i < infoBody.length; i++) {

            let studentInfo = Array.prototype.slice.call(infoBody[i].getElementsByTagName('td'));

            let studentNameElement = studentInfo[0];
            let studentName = studentNameElement.textContent.toLowerCase();

            let studentEmailElement = studentInfo[1];
            let studentEmail = studentEmailElement.textContent.toLowerCase();

            let studentCourseElement = studentInfo[2];
            let studentCourse = studentCourseElement.textContent.toLowerCase();

            let value = (searchField.value).toLowerCase();

            if (studentName.includes(value)
                || studentEmail.includes(value)
                || studentCourse.includes(value)) {

                currentArr.push(studentNameElement);
                currentArr.push(studentEmailElement);
                currentArr.push(studentCourseElement);

                studentNameElement.className = 'select';
                studentEmailElement.className = 'select';
                studentCourseElement.className = 'select';

            }

        }
        searchField.value = '';


    }
}
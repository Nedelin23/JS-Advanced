function solve() {
    let sectionsHtmlCollection = document.getElementsByTagName('section');
    let sections = Array.prototype.slice.call(sectionsHtmlCollection);


    let rightAnswers = 0;


    let sectionIndex = 0;
    let thisSection = sections[sectionIndex];

    let sectionButton = sections[0].getElementsByTagName('button')[0];
    sectionButton.addEventListener('click', function () {
        let sectionRadioButtons = thisSection.getElementsByTagName('input');

        let anyButtonChecked = false;
        for (let radioButton of sectionRadioButtons) {
            if (radioButton.checked) {

                anyButtonChecked = true;
            }
        }

        if (anyButtonChecked) {

            if (sectionRadioButtons[1].checked) {
                rightAnswers++;

            }

            sectionIndex++;
            showNextSection(sectionIndex)
        }
    });

    function showNextSection(sectionIndex) {
        thisSection = sections[sectionIndex];
        thisSection.style.display = 'block';


        let sectionButton = thisSection.getElementsByTagName('button')[0];

        sectionButton.addEventListener('click', function () {
            let sectionRadioButtons = thisSection.getElementsByTagName('input');

            let anyButtonChecked = false;
            for (let radioButton of sectionRadioButtons) {
                if (radioButton.checked) {
                    anyButtonChecked = true;
                }
            }

            if (anyButtonChecked) {

                if (sectionRadioButtons[2].checked && sectionRadioButtons[2].value === 'Pesho'
                    || sectionRadioButtons[3].checked && sectionRadioButtons[3].value === 'Nakov') {

                    rightAnswers++;

                }
                if (sectionIndex === sections.length - 1) {
                    let result = document.createElement('section');

                    if (rightAnswers === 3) {
                        result.textContent = 'You are recognized as top SoftUni fan!';
                    }
                    else {
                        result.textContent = `You have ${rightAnswers} right answers.`;
                    }

                    document.getElementById('result').appendChild(result);
                    return;
                }
                sectionIndex++;
                showNextSection(sectionIndex)
            }
        });
    }
}
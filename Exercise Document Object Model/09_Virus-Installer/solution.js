function solve() {

    let buttonNext = document.getElementsByTagName('button')[0];
    let buttonCancel =document.getElementsByTagName('button')[1];


    buttonNext.addEventListener('click', firstStep);
    buttonCancel.addEventListener('click',finish);

    function finish() {

        let divExercise = document.getElementById('exercise');
        let section = divExercise.getElementsByTagName('section')[0];
        section.style.display = 'none';

    }

    function firstStep() {
        document.getElementById('content').style.backgroundImage = 'none';
        document.getElementById('firstStep').style.display = 'block';

        buttonCancel.addEventListener('click',finish);
        buttonNext.addEventListener('click', secondStep);


        function secondStep() {

            let radioButtonAgree = document.getElementsByName('license')[0];
            buttonCancel.addEventListener('click',finish);

            if(radioButtonAgree.checked === true){
                document.getElementById('firstStep').style.display = 'none';
                document.getElementById('secondStep').style.display = 'block';
                buttonNext.style.visibility = 'hidden';

                setTimeout(buttonAppear, 3000);
                function buttonAppear() {
                    buttonNext.style.visibility = 'visible';
                    buttonCancel.addEventListener('click',finish);

                    buttonNext.addEventListener('click', thirdStep);
                    function thirdStep() {
                        document.getElementById('secondStep').style.display = 'none';
                        document.getElementById('thirdStep').style.display = 'block';

                        buttonNext.style.display ='none';
                        buttonCancel.textContent = 'Finish';

                        buttonCancel.addEventListener('click', finish);



                    }



                }

            }

        }




    }
}
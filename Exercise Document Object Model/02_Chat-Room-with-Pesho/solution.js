function solve() {

   let button1 = document.getElementsByName("myBtn");
   button1[0].addEventListener('click', myButton);


    function myButton() {
        let myChatBox = document.getElementById('myChatBox');
        let chatChronology = document.getElementById('chatChronology');

        let divElement =document.createElement('div');


        let spanElement = document.createElement("span");
        divElement.style.textAlign = 'left';
        spanElement.textContent = "Me";


        divElement.appendChild(spanElement);

        let paragraph = document.createElement('p');
        paragraph.textContent = myChatBox.value;

        divElement.appendChild(paragraph);
        myChatBox.value = '';


        chatChronology.appendChild(divElement);


    }
    let button2 = document.getElementsByName("peshoBtn");
    button2[0].addEventListener('click', peshoButton);

    function peshoButton() {
        let peshoChatBox = document.getElementById('peshoChatBox');
        let chatChronology = document.getElementById('chatChronology');

        let divElement =document.createElement('div');


        let spanElement = document.createElement("span");
        divElement.style.textAlign = 'right';
        spanElement.textContent = "Pesho";

        divElement.appendChild(spanElement);

        let paragraph = document.createElement('p');
        paragraph.textContent = peshoChatBox.value;
        divElement.appendChild(paragraph);
        peshoChatBox.value = '';

        chatChronology.appendChild(divElement);

    }
}
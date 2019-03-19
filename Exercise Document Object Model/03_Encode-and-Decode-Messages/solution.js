function solve() {

    let buttonsArr = Array.from(document.getElementsByTagName('button'));

    buttonsArr[0].addEventListener('click', Encode);
    buttonsArr[1].addEventListener('click', Decode);

    let messageBoxesElements = Array.from(document.getElementsByTagName('textarea'));

    let messageElement = messageBoxesElements[0];
    let lastMessageElement = messageBoxesElements[1];

    let messagesArr = [];

    function Encode() {
        let messageString = messageElement.value;
        let newMessage = '';
        let newChar;

        for (let i = 0; i < messageString.length; i++) {
            let char = Number(messageString[i].charCodeAt(0));
            char++;

            newChar = String.fromCharCode(Number(char));
            newMessage += newChar;
        }
        messagesArr.push(messageString);

        messageElement.value = '';
        lastMessageElement.textContent = newMessage;
    }

    function Decode() {
        let lastMessageString = messagesArr[messagesArr.length - 1];

        lastMessageElement.textContent = lastMessageString;
    }
}




 function register() {
   let username = document.getElementById('username').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;

   let passwordRegex = /(.+)@(.+).(com|bg)/gm;



   if((username !== '' && password !== '' && email.match(passwordRegex)) || true){

       let title = document.createElement('h1');
       title.textContent = 'Successful Registration!';

       let usernameMessage = document.createTextNode(`Username: ${username}`);


       let emailMessage = document.createTextNode(`Email: ${email}`);

       let passwordAsterisk = '';

       for (let i = 1; i <= password.length; i++){
           passwordAsterisk += '*';
       }

       let passwordMessage = document.createTextNode(`Password: ${passwordAsterisk}`);

       let resultElement = document.getElementById('result');
       resultElement.appendChild(title);
       resultElement.appendChild(usernameMessage);
       resultElement.appendChild(document.createElement('br'));
       resultElement.appendChild(emailMessage);
       resultElement.appendChild(document.createElement('br'));
       resultElement.appendChild(passwordMessage);
       
       setTimeout(function () {
           resultElement.textContent = '';
       }, 50);
   }

 }

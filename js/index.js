let email = 'admin@gmail.com';
let password = '1234';


let emailUser = prompt('Introduce tu Email: ');
let passwordUser = prompt('Introduce tu Password: ');

console.log(window);

if(email == emailUser && password == passwordUser){
    window.location = './index.html';
}
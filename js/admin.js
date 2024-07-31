

let email = 'admin@gmail.com';
let password = '1234';

alert ('Hola, necesitamos que confirmes tu mail!');

let emailUser = prompt('Introduce tu Email: ');
let passwordUser = prompt('Introduce tu Password: ');

console.log(window);

if(email !== emailUser || password !== passwordUser){
    alert ('El mail/password no coinciden');
    window.location.href = '../index.html';   
}

if(email == emailUser && password == passwordUser){
alert ('Bienvenido a ESPACIO AROMA');
}


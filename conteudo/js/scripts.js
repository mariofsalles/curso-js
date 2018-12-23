// Aula 01
// alert("Mensagem enviada pelo Alert");
// console.log("Mensagem envida pelo console");

// Aula 02

// Aula 03
// var latitude = 40.87663;
// var longitude = -8.08373;
// console.log(latitude);
// console.log(longitude);

// Aula 04 - Strings
// var nome = "João"; // podem ser usadas aspas duplas
// var sobrenome = 'Gomes'; // ou aspas simples
// var cpf = '111.111.111-11';
// var telefone = "998887655";
// var ddd = '21';
// var email = 'joao@gmail.com';
// var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";
// console.log('Nome Completo: '+nome+' '+sobrenome);
// console.log('Telefone: ' + '('+ddd +')'+telefone);
// console.log('Primeira letra do nome: ' + nome[0]);
// console.log('Última letra do nome: ' + nome[3]);
// console.log('Numero de caracteres do telefone: '+ telefone.length);

// Aula 05
var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

var media = (num1 + num2) / 2;
console.log('A média é: ' + media);

console.log(Math.pow(2,4));

var arredonda = Math.round(2.7); // Arredondamento.
var arredonda_cima = Math.ceil(4.3) // Arredondamento para cima.
var arredonda_baixo = Math.floor(4.6) // Arredondamento para baixo.
var raiz = Math.sqrt(36) // Raiz quadrada.

console.log('Arredoonda 2.7: ' + arredonda + 
            '\nArredoonda cima 4.3: '+ arredonda_cima + 
            '\nArredoonda baixo 4.6: '+ arredonda_baixo + 
            '\nRaiz 36: '+raiz);
  
var increment = 20;
increment += 5; 
console.log(increment); 

increment = 10;
increment++;
console.log(increment);

var ddd = 21;
var telefone = 998887655;
var ddd_string = ddd.toString();
var tel_string = telefone.toString();
var telefone_completo = '('+ddd_string +')' + tel_string;
console.log('Telefone Completo: ' + telefone_completo);

var idade = '17';
idade = parseInt(idade);
console.log('A idade é: ' + idade);
idade++
console.log('A idade incrementada: ' + idade);



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
// var num1 = 20;
// var num2 = 3;

// var soma = num1 + num2;
// var subtracao = num1 - num2;
// var divisao = num1 / num2;
// var multiplicacao = num1 * num2;

// var media = (num1 + num2) / 2;
// console.log('A média é: ' + media);

// console.log(Math.pow(2,4));

// var arredonda = Math.round(2.7); // Arredondamento.
// var arredonda_cima = Math.ceil(4.3) // Arredondamento para cima.
// var arredonda_baixo = Math.floor(4.6) // Arredondamento para baixo.
// var raiz = Math.sqrt(36) // Raiz quadrada.

// console.log('Arredoonda 2.7: ' + arredonda + 
//             '\nArredoonda cima 4.3: '+ arredonda_cima + 
//             '\nArredoonda baixo 4.6: '+ arredonda_baixo + 
//             '\nRaiz 36: '+raiz);
  
// var increment = 20;
// increment += 5; 
// console.log(increment); 

// increment = 10;
// increment++;
// console.log(increment);

// var ddd = 21;
// var telefone = 998887655;
// var ddd_string = ddd.toString();
// var tel_string = telefone.toString();
// var telefone_completo = '('+ddd_string +')' + tel_string;
// console.log('Telefone Completo: ' + telefone_completo);

// var idade = '17';
// idade = parseInt(idade);
// console.log('A idade é: ' + idade);
// idade++
// console.log('A idade incrementada: ' + idade);

// Aula 06
/* 
var idade = 65;
var teste = idade < 60;
console.log(teste);

var idade = 45;
var teste = idade == 45;
console.log(teste);

var idade = '45';
var teste = idade === 45;
console.log(teste);

var idade = '45';
var teste = idade !== 45;
console.log(teste); 
*/

// var v_type = true;
// var v_numero = 4.55;
// var idade = 21;
// var v_boolean = idade > 18;

// console.log(typeof v_type);
// console.log(typeof idade);
// console.log(typeof v_numero); 
// console.log(typeof v_boolean);

// Aula 07
// var undf; 
// var nl = null;
// console.log(undf); 
// console.log(nl); 
// console.log(nl === undf); 
// console.log(typeof undf); 
// console.log(typeof nl); 

// // Aula 10
// var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;
// console.log(conteudo_caixa);
// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;

// document.getElementById("caixa_azul").innerHTML = '<h1>'+conteudo_caixa+'</h1>';
// document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa Amarela' + '</h1>';

// Aula 11
//Define-se a função
function soma_numeros() {
  var x = 5;
  var y = 2;
  var soma = x + y;
  console.log(soma);
}
//invoca-se a função
soma_numeros();

// função dinâmica e com argumentos
function soma_args(num1, num2) {
    var soma = num1 + num2;
    return soma; //usa-se o return porque a aplicabilidade torna-se melhor, podendo ser invocada em qq elemento html
}
// invoca-se a função com argumentos:
// podendo ser armazenado na saida do console ou numa variavel que 
console.log(soma_args(10, 25));

console.log("-----------------------------------")

function valor_imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
// agora podemos guardar o valor retornado pela função numa variável e usá-la como quisermos.
var meu_peso = document.getElementById("peso").innerHTML;
var minha_altura = document.getElementById("altura").innerHTML;
document.getElementById("imc").innerHTML = valor_imc(meu_peso, minha_altura);
var meu_imc = document.getElementById("imc").innerHTML
console.log(meu_imc);
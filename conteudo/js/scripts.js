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

// console.log('Arredonda 2.7: ' + arredonda + 
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
// Define-se a função
// function soma_numeros() {
//   var x = 5;
//   var y = 2;
//   var soma = x + y;
//   console.log(soma);
// }
// //invoca-se a função
// soma_numeros();
// função dinâmica e com argumentos
// function soma_args(num1, num2) {
//     var soma = num1 + num2;
//     return soma; //usa-se o return porque a aplicabilidade torna-se melhor, podendo ser invocada em qq elemento html
// }
// invoca-se a função com argumentos:
// podendo ser armazenado na saida do console ou numa variavel que 
// console.log(soma_args(10, 25));
// console.log("-----------------------------------")
// function valor_imc(peso, altura) {
//   var imc = peso / (altura * altura);
//   return imc;
// }
// agora podemos guardar o valor retornado pela função numa variável e usá-la como quisermos.
// var meu_peso = document.getElementById("peso").innerHTML;
// var minha_altura = document.getElementById("altura").innerHTML;
// document.getElementById("imc").innerHTML = valor_imc(meu_peso, minha_altura);
// var meu_imc = document.getElementById("imc").innerHTML
// console.log(meu_imc);

// Aula 12
// var alunos = ["João", "Maria", "José"];
// var num_primos = [2, 3, 5, 7, 11, 13];
// console.log(alunos.length);
// console.log(num_primos[2]);
// console.log(num_primos[10]);
// console.log('------------------------------')
// Arrays multidimensionais
// var grupos = [
//   ["João", "Maria"],
//   ["Pedro", "Joana", "André", "Júlio"],
//   ["Carolina", "Helena", "Marcelo"]
// ];
// console.log(grupos[1][1]);
// grupos[1][1] = "Marcela"; // troca o elemento por outro
// console.log(grupos[1][1]);
// console.log(grupos);
// console.log('------------------------------')
// var cursos = ["HTML", "Python", "PHP"];
// cursos.push("Javascript"); // insere no final do array
// console.log(cursos); 
// cursos.unshift("Bootstrap"); // insere no inicio do array
// console.log(cursos);  
// cursos.pop(); // remove no fim do array
// console.log(cursos); 
// cursos.shift(); // remove no inicio do array
// console.log(cursos); 
// console.log('------------------------------')
// console.log(cursos.slice(0,2)); // o segundo parametro no slice não é contado, neste caso retorna-se os elementos 0, 1 e 2.
// console.log('Convenção para numeros negativos');
// console.log(cursos.slice(0,-1));
// console.log(cursos.slice(-2,)); // neste caso irá pegar no penultimo(indicado pelo indice -2) até o ultimo.

// Aula 13
// var funcionario = {
//   'nome': 'Pedro Souza Gomes',
//   'ano_nasc': 1972,
//   'cpf': '111.111.111.11',
//   'cargo': 'Analista de Sistemas'
// };

// console.log(funcionario['nome']);
// console.log(funcionario.cpf);

// console.log('------------------------------')

// var cursos = [
//   {
//     'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//     'avaliacoes': 680,
//     'alunos': 2300,
//     'categorias': ['programacao', 'tecnologia']
//   },

//   {
//     'titulo': 'Aprenda PHP e faça sites dinâmicos',
//     'avaliacoes': 180,
//     'alunos': 350,
//     'categorias': ['desenvolvimento web', 'programacao']
//   },

//   {
//     'titulo': 'Excel do Zero ao Avançado',
//     'avaliacoes': 420,
//     'alunos': 1800,
//     'categorias': ['produtividade', 'gestão']
//   }

// ];

// console.log(cursos[1].categorias[0]);
// cursos[2].categorias[1] = 'administração de empresas';
// console.log(cursos);

// Aula 14
// var aluno = {
//   'nome': 'Maria',
//   'sobrenome': 'Pereira',
//   'ano_nasc': 1992,
//   'ano_atual': 2018,
//   'nome_completo': function () {
//     var nomeCompleto = this.nome + ' ' + this.sobrenome;
//     return nomeCompleto;
//   },
//   'idade': function () {
//     var calculaIdade = this.ano_atual - this.ano_nasc;
//     return calculaIdade;
//   }
// };
// console.log(aluno.nome_completo());
// console.log(aluno.idade());
// console.log('--------------------------')
// console.log(console);
// console.log(document.getElementById("tudo_obj").innerHTML);
// console.log('--------------------------')

// Aula 16
// document.getElementById("click-me").onclick = function () {
//   alert('Voce clicou no botão.');
// }

// document.getElementById("hover-me").onmouseover = function () {
//   alert('Voce passou com o cursor no botão.');
// }

// document.getElementById("leave-me").onmouseout = function () {
//   alert('Voce saiu com o cursor do botão.');
// }

// document.onkeydown = function () {
//   alert('Você pressionou uma tecla.' + event.keyCode); // Um evento nos permite usar o objeto event!
// }

// Outra maneira de se fazer com que a função seja executada, porem a função deve ser invocada no codigo HTML
// diretamente no botão usando o atributo onclick que deverá possuir o nome da função
// mas é legal que se separe o que é javascript de HTML
// function buttonClicked () {
//   alert('Você clicou no botão.');
// }

// Aula 17
// document.getElementById("botao_cor").onclick = function () {
// usado a notação entre colchetes ao invés do ponto e inserido entre aspas devido
// o hífen para o caso da propriedade background-color
//   this.style['background-color'] = "purple"; 
//   this.style.transform = "translateX(100px)";
// }

// Aula 18
// Observar que o getElementsByClassName retorna 
// um array enquanto que o getElementById um unico elemento
// var exemplo = document.getElementsByClassName("exemplo");
// exemplo[0].innerHTML = 'Teste 1';
// console.log(exemplo);
// console.log('-----------------------------');
// var exemplo = document.getElementsByTagName("p");
// console.log(exemplo);

//Aula 19
// for (var i = 0; i < 5; i++) {
//   console.log(i)
// }
// console.log('----------------')
// var alunos = ['Jose', 'Maria', 'Marcos', 'Serafim', 'Clara'];
// console.log(alunos)
// console.log('----------------')
// for (var count = 0; count < alunos.length; count++) {
// console.log(alunos[count]);
// }
// console.log('----------------')
// var carro = {
//   'Ano': 2018,
//   'Modelo': 'Fox',
//   'Cilindradas': '1.8',
//   'Combustível': 'Gasolina'
// }
// for (var prop in carro){
//   console.log(prop + ':' + carro[prop]);
// }
// console.log('----------------')
// var elementos = document.getElementsByClassName('exemplo');
// console.log(elementos);

// for (var cont = 0; cont < elementos.length; cont++){
//   elementos[cont].style.color = 'red';
//   elementos[cont].style['font-weight'] = 'bold';
//   }

// Aula 20
// var count = 0;
// while (count < 5){
//   console.log(count);
//   count++
// }
// console.log('--------------')
// var count2 = 10;
// Irá executar o codigo pelo menos uma vez antes de testar o while
// do {
//   console.log(count2);
//   count2++;
// }
// while (count2 < 5);

// Aula 21
// var idade = 18;
// if (idade < 18){
//   console.log('Menor de idade');
// }else if (idade == 18){
//   console.log('Tem 18 anos')
// } else {
//   console.log('Maior de idade');
// }
var nota = 8;
var faltas = 4;
// if (nota >=7 && faltas <=4) { 
//   console.log('Aluno aprovado')
// } else {
//   console.log('Aluno reprovado')
// }
// if (nota < 7 || faltas > 4) {
//   console.log('Aluno aprovado')
// } else {
//   console.log('Aluno reprovado')
// }
var nome = 'Ivan';
if (nome) {
  console.log('Nome: ' + nome);
} else{
  console.log('Nome não informado');
}

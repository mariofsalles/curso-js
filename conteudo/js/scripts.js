// $(document).ready(function () { 
// ou:
$(function () {
  

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
// var nota = 8;
// var faltas = 4;
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
// var nome = 'Ivan';
// if (nome) {
//   console.log('Nome: ' + nome);
// } else{
//   console.log('Nome não informado');
// }

// Aula 22

// var socio = false;
// var idade = 25;
// if (socio == true || idade >= 65){
//   console.log ('O ingresso é gratuito');
// } else {
//   if (idade < 18){
//   console.log('Preço a pagar R$6,00');
//   } else {
//   console.log('Preço a pagar R$12,00');
//   }
// }
// console.log('--------------------------');
// var funcionarios = [
//   {
//     'nome': 'Carlos Henrique da Silva',
//     'idade': 45,
//     'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
//   },
//   {
//     'nome': 'Maria Helena Pereira',
//     'idade': 32,
//     'filhos': undefined//['João Pedro Pereira de Souza']
//   },

//   {
//     'nome': 'José Feliciano Maia',
//     'idade': 39,
//     'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
//   }
// ];

// var list_element = document.getElementById('filhos');
// list_element.innerHTML = "";
// for (var count0 = 0; count0< funcionarios.length; count0++) {
//   if (funcionarios[count0].filhos) {
//     var lista_filhos = funcionarios[count0].filhos;
//     for (var count1 = 0; count1 < lista_filhos.length; count1++) {
//       list_element.innerHTML += '<li>'+lista_filhos[count1]+ ' - filho de: '+funcionarios[count0].nome+'</li>';
//     }
//   }
// }

//Aula 24
// window.onmousemove = function(e) {
// if (e.pageY < 5 ){
//   alert('Não perca os descontos exclusivos promocionais');
// };
// };

//Aula 25
// window.localStorage.setItem('nome','Joao'); //cria uma dupla chave valor, no caso nome: Joao
// console.log(localStorage['nome']); // Irá imprimir o valor armazenado na chave
// localStorage.removeItem('nome');
// console.log('---------------')
// console.log(localStorage['nome']);

// document.getElementById('enviar-nome').onclick = function () {
//   var nome = document.getElementById('nome-usuario').value;
//   localStorage.setItem('nome', nome);
//   //esconde o formulario
//   document.getElementById('name-field').style.display = 'none';
//   //atualiza a mensagem de boas vindas
//   document.getElementById('welcome-text').innerHTML = 'Olá '+ localStorage.nome +', tudo bem?';
//   document.getElementById('not-me').innerHTML = 'Não é ' + localStorage.nome;
//   document.getElementById('welcome-area').style.display = 'initial';
// };

// if (localStorage.nome) {
//   //esconde o formulario
//   document.getElementById('name-field').style.display = 'none';
//   //atualiza a mensagem de boas vindas
//   document.getElementById('welcome-text').innerHTML = 'Olá ' + localStorage.nome + ', tudo bem?';
//   document.getElementById('not-me').innerHTML = 'Não é ' + localStorage.nome;
//   document.getElementById('welcome-area').style.display = 'initial';
// }

// document.getElementById('not-me').onclick = function () {
//   //remove a chave nome do localStorage
//   localStorage.removeItem('nome');
//   //esconde a mensagem de boas vindas
//   document.getElementById('welcome-area').style.display = 'none';
//   //Reexibe o input text e botao
//   document.getElementById('name-field').style.display = 'initial';
// }

//Aula 26
// as datas podem possuir argumento
// var data_hoje = new Date(2016,0,10, 17,45,10); //cria hora especicica
// var data_hoje2 = new Date("2020-03-18"); //com string
// var data_hoje3 = new Date(); //com string

// console.log(data_hoje);
// console.log(data_hoje2);
// console.log(data_hoje3.getDate() + '/' + (data_hoje3.getMonth() + 1) + '/' + data_hoje3.getFullYear());
// console.log('-------------');
// var data_nascimento = '1980-03-01';
// var ano_nascimento = new Date(data_nascimento).getFullYear();
// var ano_atual = new Date().getFullYear();
// var idade = ano_atual - ano_nascimento;
// console.log(idade);
// console.log('-------------');
// // Epoch: 01 de Janeiro de 1970, 00:00:00 do fuso horário UTC
// var data = new Date();
// console.log('Passaram do Epoch até a data atual: '+data.getTime()+ 'ms');
// console.log('-------------');
// var data_atualizada = data / 31536000000;

// 'dias_entrega'
// var data_envio = new Date('2018-03-20')
// var data_entrega = new Date('2018-04-06')
// var tempo_entrega = (data_entrega - data_envio) / 86400000;
// document.getElementById('dias_entrega').innerHTML = tempo_entrega;

// Aula 27
// setTimeout
// console.log('Mensagem 1');
// window.setTimeout(function() {
//   console.log ('Mensagem2');
// },3000);


// document.getElementById('mostrar-loader').onclick = function () {
//   document.getElementById('spinner-loader').style.display = 'initial';
//   window.setTimeout(function () {
//     document.getElementById("spinner-loader").style.display = 'none';
//   }, 5000);
// };

// var count = 0;
// var counter = window.setInterval(function () {
//   console.log(count);
//   count++;
//   if (count >= 10) {
//     window.clearInterval(counter); // maneira de parar o contador
//   }
// }, 1000);

//getHours()
//getMinutes()
//getSeconds()

// window.setInterval( function () {

//   var hora_atual = new Date();

//   var horas = hora_atual.getHours();
//   var minutos = hora_atual.getMinutes();
//   var segundos = hora_atual.getSeconds();

//   function formatTime(time){
//     if (time >= 0 && time <= 9){
//       var formatted_time = time.toString();
//       formatted_time = '0'+formatted_time;
//     } else {
//       var formatted_time = time.toString();
//     }
//     return formatted_time;
//   }
  
//   document.getElementById('relogio').innerHTML = formatTime(horas) + ':' + formatTime(minutos) + ':' + formatTime(segundos);
  
// }, 1000);

//Aula 28
// function valor_pedagio (categoria) {
//  switch(categoria){
//     case '1':
//       return 11.22;
//       break

//     case '2':
//       return 16.88;
//       break

//     case '3':
//       return 22.45;
//       break
    
//     case '4':
//       return 33.65;
//       break

//     default:
//       return 'categoria não encontrada';
//   }
// }

// var categoria_veiculo = '3';
// console.log('Valor a pagar: '+ valor_pedagio(categoria_veiculo));

//Aula 29
// var x = 0;
// while (x < 10) {
//   console.log(x);
//   x++;
//   if (x == 5) {
//     break;
//   }
// }
// console.log('---------------------');
// var lista = [1,5,9,11,12,14,33,45,56,78,99,100,138,156,190];
// for (var num = 0; num < lista.length; num++){
//   if (lista[num]==33){
//     console.log('Valor encontrado');
//     break;
//   }
//   console.log('Tentativa: '+num);
// }
// console.log('---------------------');
// var num = 0;
// while (num < 20){
//   if (num == 7){
//     num++;
//     continue
//   }
//   console.log(num);
//   num++
// }
//Aula 30

 // selectbox: assemelha-se a um array;
// document.getElementById('mostrar_opcao').onclick = function () {
//   var campo_select = document.getElementById('options');
//   var indice_selecionado = campo_select.options.selectedIndex;
//   var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//   document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;
  
//   var valor = document.getElementById('options').value;
//   document.getElementById('opcao_selecionada2').innerHTML = valor;
// };



// radio buttons: inputs do tipo radio, seleciona-se por meio de loop
// document.getElementById("mostrar_radio").onclick = function () {
//   var radio = document.getElementsByName('genero');
//   var radio_selected;
//   for (var count = 0; count < radio.length; count++){
//     if (radio[count].checked){
//       radio_selected = radio[count].value;
//       break;
//     }
//   }
//   document.getElementById('radio_selecionado').innerHTML=radio_selected;
// }

//checkbox
// document.getElementById("mostrar_check").onclick = function () {
//   document.getElementById('check_selecionado').innerHTML = ''; //para que antes de mais nada, check_selecionado, esteja vazia
//   var check = document.getElementsByName('interesse');
//   for (var count = 0; count < check.length; count++){
//     if (check[count].checked) {
//         document.getElementById('check_selecionado').innerHTML += '<li>'+check[count].value +'</li>';
//     }
//   }
// };

// Date
// input id = 'data_evento'
// button id = 'mostrar_data' 
// document.getElementById('mostrar_data').onclick = function () {
//   var data_select = document.getElementById('data_evento').value;
//   var data_completa = new Date(data_select);
//   document.getElementById('data_selecionada').innerHTML = data_completa;
// }

//Aula 31
// evento onchange: ao se inserir valor num input text esse valor atualiza automaticamente 
// um campo especifico da pagina

// para o caso de select box o comportamento está vinculado a um elemento pai,
//  portanto pode-se usar os indices (entes) dos mesmos como opção
// document.getElementById('escolaridade').onchange = function () {
//   var campo_select = document.getElementById('escolaridade');
//   var indice_selecionado = campo_select.options.selectedIndex;
//   var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//   document.getElementById('escolaridade_selecionada').innerHTML = valor_selecionado;
// };

// no checkbox os elementos estão separados em inputs diferentes, dessa forma deve-se trata-los como um vetor
// e realizar uma varredura por meio de um for
// var check = document.getElementsByName("lanche");
// for (var contador = 0; contador < check.length; contador++) {
  // necessário criar um evento onchange para cada item selecionado no checkbox
//   check[contador].onchange = function () {
//     document.getElementById("check_selecionado").innerHTML = "";
//     for (var contador2 = 0; contador2 < check.length; contador2++) {
//       if (check[contador2].checked) {
//         document.getElementById("check_selecionado").innerHTML += '<li>' + check[contador2].value + '</li>';
//       }
//     }
//   }
// }

// ------JQuery---------

//Aula 34
// JavaScript puro  ou Vanilla JS

// em JS puro
// document.getElementById('exemplo').innerHTML = 'Olá';
// em JQuery
// $('#exemplo').html('Olá'); // segue a mesma terminologia do css: .(classe), #(id), etc.

// $('#esconder').click(function(){
// $('.exemplo').css('display', 'none'); //(propriedade, valor) - opcao1
// $('.exemplo').hide(); //(propriedade, valor) - opcao2
// });

// Aula 35
// var conteudo_html = $('#paragrafo-html').html(); // JQuery é um bib do JS, permitindo mesclagem entre as sintaxes
// console.log(conteudo_html);
// console.log('----------------------')
// var conteudo_html = $('#paragrafo-html').text(); // JQuery é um bib do JS, permitindo mesclagem entre as sintaxes
// console.log(conteudo_html);
// console.log('----------------------')
// $('#paragrafo-html').html('Mudar conteúdo do parágrafo');
// conteudo_html = $('#paragrafo-html').html(); // mostrou na pagina
// console.log(conteudo_html); // mostrou no console
// console.log('----------------------')
// var url_link = $('#paragrafo-link').attr('href');
// console.log(url_link);
// console.log('----------------------')
// $('#paragrafo-link').attr('href', 'http://www.udemy.com'); // muda o atributo do href para o endereço que está no 2o campo
// var url_link = $('#paragrafo-link').attr('href'); // pega o href que esta no elemento de id: paragrafo-link
// console.log(url_link);
// console.log('----------------------')
// $('#mudar_imagem').click(function () {
//   $('#imagem_js').attr('src', 'https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png');
//   $('#mudar_imagem').hide()
// });
// console.log('----------------------')
// $('#paragrafo-empty').html('');
// -->Equivalencias:
// $('#paragrafo-empty').empty();
// $('#pragrafo-empty').remove();

// Aula 36
// var lista = ["HTML", "CSS", "Javascript", "jQuery", "PHP"];
// $.each(lista, function (index, value) {
//   console.log('O elemento de indice ['+index+'] possui valor: '+value)
//    });
// console.log('--------------');
// var pessoa = {
//   'nome': 'João Pedro',
//   'DN': '20/01/1990',
//   'CPF': '111.111.111-11'
// };
// $.each(pessoa, function (chave, valor) {
//   console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
// });

// console.log('-------------');
// var interesses = $("#interesses li"); // observar que possuir a mesma sintaxe do CSS
// $.each(interesses, function (chave1, valor1) {
//   console.log($(valor1).text());
// });

// Aula 37
// var conteudo_input = $('#campo_nome').val();
// console.log(conteudo_input);

// $("#options").change(function () {
//   var novo_selecionado = $('#options').find(":selected").text();
//   console.log('--------------------------------');
//   console.log(novo_selecionado);
// });

// $("input[name='genero']").change(function () {
//   var radio_select = $("input[name='genero']:checked").parent('span').text();
//   console.log('--------------------------------');
//   console.log(radio_select);
// });

// $("input[name='interesse']").change(function () {
//   var checkboxes_selecionados = $("input[name='interesse']:checked");
//   var textos = [];
//   $.each(checkboxes_selecionados, function (index, value) {
//     textos.push($(value).parent("span").text());
//   });
//   console.log('--------------------------------');
//   console.log(textos);
// });

// Aula 38
//  addClass(), removeClass(), toggleClass()

// $('#adicionar_classe').click(function () { 
//   $('#paragrafo-classes').addClass('styling');
//   });

// $('#remover_classe').click(function () {
//   $('#paragrafo-classes').removeClass('styling');
// });

// $('#alternar_classe').click(function () {
// $('#paragrafo-classes').toggleClass('styling');  
// });

// Aula 39
// $('#nome').keyup(function () { 
//   var conteudo = $('#nome').val();
//   if (conteudo) {
//     $('#confirmar').css('display', 'initial');
//   } else {
//     $('#confirmar').css('display', 'none');
//   }
// });

// Aula 40
//id=
//id='texto-escondido'
  // $('#botao-esconder').click(function () { 
  //   $(this).hide(600, function () {
  //     $('#texto-escondido').show(600);
  //   });
  // });


  // $('#toggle-tab').click(function () {
  //   $('#tab-content').slideToggle(); // neste caso o deslizamento é de 400ms, pode-se defeinir 
    //como string slow(600ms) ou fast(200ms)
//     $('#toggle-tab').toggleClass('flip'); // criada uma classe flip que gira 180 graus a seta de visualização
  
// });

// Aula 41
// dispensa callback
// não é possivel animar cores
// propriedade css com hífen deve ser escrita no padrão camel case
// $('#animar').click(function () { 
//   $('#quadrado').animate({
//     width: '+=20px',
//     height: '+=20px'
//   }, 1000);
//     $('#quadrado').animate({
//     height: '+=20px'
//   }, 1000);
// });

// Aula 42
  // $("#animar").click(function () {
  //   $("#quadrado")
  //     .animate({
  //       width: '+=20px'
  //     }, 500)
  //     .animate({
  //       height: '+=20px'
  //     }, 500, function () {
  //       $("#quadrado").css('background-color', 'green') // colocado sobre uma função callback pois o color não respeita metodo animate
  //     });
  // });  

  // Aula 43
  function pegar_usuario(callback) {
    window.setTimeout(function () {
      var u = {
        'nome': 'João'
      };
      callback(u)
    }, 2000);
  }
  // observar que a função possui a mesma estrutura de sintaxe do JQuery, em outras palavras o JQuery
  // é uma biblioteca de funçoes callback
  pegar_usuario(function (user) {
    console.log('Olá ' + user.nome + ', como vai?');
  })








});
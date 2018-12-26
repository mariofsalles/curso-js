// 1)
document.getElementById("converter").onclick = function () {
  var t_celsius = parseFloat(document.getElementById("temp_celsius").value);
  var t_farenheit = (9 * (t_celsius / 5) + 32).toFixed(2);
  document.getElementById("temp_fahr").innerHTML = "<strong>" + t_farenheit + "</strong>";
}
// --------------------------------------
// 2)
document.getElementById("anos_copa").innerHTML = "";
for(var ano = 1930; ano<= 2018; ano += 4) {
  document.getElementById("anos_copa").innerHTML += '<li>' + ano + '</li>';
}
//----------------------------------
// 3)

document.getElementById('calcular').onclick = function () {
  var n1 = parseFloat(document.getElementById('nota1').value);
  var n2 = parseFloat(document.getElementById('nota2').value);
  var faltas = parseFloat(document.getElementById('n_faltas').value);
  var media = (n1+n2)/2;
  var presenca = (20-faltas)/20;
  var situacao;

  if (media >= 6.5 && presenca >= 0.70) {
    situacao = 'Aprovado';
  } else if (media < 6.5 && presenca < 0.7) {
    situacao = 'Reprovado por falta e média';
  } else if (media < 6.5){
    situacao = 'Reprovado por média';
  } else if (presenca < 0.7){
    situacao = 'Reprovado por presença';
  }
  document.getElementById('result').innerHTML = situacao;
}
// ----------------------------------------
// 4)
var vendas_cursos = [
  {
    'aluno': 'Emmanuel Gomes',
    'data': '10/06/2018',
    'valor': 34.99,
    'reembolso': null
  },
  {
    'aluno': 'Carla Dias',
    'data': '10/06/2018',
    'valor': 29.99,
    'reembolso': null
  },
  {
    'aluno': 'Rafael Marques',
    'data': '11/06/2018',
    'valor': 39.99,
    'reembolso': '13/06/2018'
  },
  {
    'aluno': 'Maria Isabel Pereira',
    'data': '11/06/2018',
    'valor': 29.99,
    'reembolso': null
  },
  {
    'aluno': 'Andre Luis Silva',
    'data': '12/06/2018',
    'valor': 34.99,
    'reembolso': null
  }
];

var total_vendas = 0;
document.getElementById('vendas_cursos').innerHTML = '';
for (var count = 0; count < vendas_cursos.length; count++){
  if (vendas_cursos[count].reembolso == null) {
    total_vendas += vendas_cursos[count].valor;
    var linhaHTML = '';
    linhaHTML += '<tr>';
    linhaHTML +=    '<td>'+vendas_cursos[count].aluno+'</td>';
    linhaHTML +=    '<td>'+vendas_cursos[count].data +'</td>';
    linhaHTML +=    '<td>'+vendas_cursos[count].valor+'</td>';
    linhaHTML += '</tr>';
    document.getElementById('vendas_cursos').innerHTML += linhaHTML;
  }
}
document.getElementById('total_vendas').innerHTML = total_vendas;
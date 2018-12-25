// 1
var num1 = parseFloat(document.getElementById("num_1").innerHTML);
var num2 = parseFloat(document.getElementById("num_2").innerHTML);
var soma = num1 + num2;
document.getElementById("resultado").innerHTML = "<strong>" + soma + "</strong>";
// -------------------------

// 2
function celsiusToFarenheit(t_celsius){
  var t_farenheit = (9 * (t_celsius / 5) + 32).toFixed(2);
  return t_farenheit;
}
var t_celsius = parseFloat(document.getElementById("caixa_azul").innerHTML);
document.getElementById("caixa_amarela").innerHTML = "<strong>" + celsiusToFarenheit(t_celsius) + "</strong>";
// -------------------------

// 3
var grupos = [
  ["João", "Maria"],
  ["Pedro", "Joana", "André", "Júlio"],
  ["Carolina", "Helena", "Marcelo"]
];
var novos_grupos = grupos.slice(-2,);
console.log(novos_grupos);
var novo_grupo = ["Marina", "Felipe", "Carla"];
novos_grupos.push(novo_grupo);
console.log(novos_grupos);

//------------------------------

// 4
var curso = {
  'titulo': "Aprenda programação em Python",
  'categoria': ['programação', 'tecnologia', 'python'],
  'n_aval_5_estrelas': 420,
  'n_aval_4_estrelas': 80,
  'n_aval_3_estrelas': 33,
  'n_aval_2_estrelas': 20,
  'n_aval_1_estrela': 4,
  'total_aval': function () {
        var total = this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
        return total;
        },
   'media_aval': function () {
     var media = (this.n_aval_1_estrela + 2*this.n_aval_2_estrelas + 3*this.n_aval_3_estrelas +
       4*this.n_aval_4_estrelas + 5*this.n_aval_5_estrelas)/this.total_aval();
     return media;
   }
}
var categoria_curso = curso.categoria[0];
document.getElementById("categoria_principal").innerHTML = categoria_curso;

var total_aval = curso.total_aval();
var media_aval = curso.media_aval().toFixed(2);

document.getElementById("total_aval").innerHTML = total_aval;
document.getElementById("media_aval").innerHTML = media_aval;

// 5

var pessoa = {
  'nome':'José',
  'sobrenome':'Silva',
  'email':'zesilva@gmail.com'
}

function criarTabela (pessoa){
var tabelaHTML = '<div class="tableBox">';
    tabelaHTML += '<table>';
    tabelaHTML +=   '<tr>';
    tabelaHTML +=     '<th>Nome Completo </th>';
    tabelaHTML +=     '<th>Nome Email </th>';
    tabelaHTML +=   '<tr>';
    tabelaHTML +=   '<tr>';
    tabelaHTML +=     '<th>'+ pessoa.nome +' '+ pessoa.sobrenome +'</th>';
    tabelaHTML +=     '<th>'+ pessoa.email +'</th>';
    tabelaHTML +=   '<tr>';
    tabelaHTML +=  '<table>';
    tabelaHTML += '</div>';
    return tabelaHTML;
}

var tabela = criarTabela(pessoa);
document.getElementById("tabela").innerHTML = tabela;




// ------------
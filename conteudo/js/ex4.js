// exercício 1

// o envento abaixo só é executado quando alguma alteração vier a ocorrer na página
document.getElementById('estados').onchange = function () {
  localStorage.setItem('estado', document.getElementById('estados').value);
}
if (localStorage.estado){
  document.getElementById('estados').value = localStorage.estado;
}

// exercício 2

function addLeftZero(numero){
if (numero < 10){
  return '0'+numero.toString();
  } else {
    return numero.toString();
  }
}

function formatDate(timestamp){
  var dia = addLeftZero(new Date(timestamp).getDay());
  var mes = addLeftZero(new Date(timestamp).getMonth() + 1);
  var ano = addLeftZero(new Date(timestamp).getFullYear());
  return dia+'/'+mes+'/'+ano;
}

document.getElementById('confirmar_pedido').onclick = function () {
  var opcao_envio = document.getElementById('envios').value
  if (opcao_envio == 'escolha'){
    alert('Insira um opção!')
    document.getElementById('data_pedido').innerHTML ='';
    document.getElementById('data_entrega').innerHTML ='';
  } else {
    if (opcao_envio == 'normal'){
      var dias_entrega = 18;
    } else if (opcao_envio = 'express'){
      var dias_entrega = 12;
    }
    var data_envio = new Date().getTime();
    var data_entrega = data_envio + dias_entrega*86400000;
    
    document.getElementById('data_pedido').innerHTML = formatDate(data_envio);
    document.getElementById('data_entrega').innerHTML = formatDate(data_entrega);
  }
}

// exercicio 4

var carros = [
  {
    'placa': 'AAA-0198',
    'categoria': '1',
  },
  {
    'placa': 'HBP-2837',
    'categoria': '2',
  },
  {
    'placa': 'PLQ-0928',
    'categoria': '4',
  },
  {
    'placa': 'KQE-2093',
    'categoria': '5',
  },
  {
    'placa': 'AMR-9087',
    'categoria': '5',
  },
  {
    'placa': 'BQE-8111',
    'categoria': '3',
  },
  {
    'placa': 'GXL-9001',
    'categoria': '2',
  },
  {
    'placa': 'KPM-7740',
    'categoria': '1',
  }
];

function valorPagar (veiculo) {
  switch(veiculo.categoria) {
    case '1':
    return 11.22;
    break;

    case '2':
    return 22.45;
    break;
    
    case '3':
    return 16.88;
    break;

    case '4':
    return 33.65;
    break;

    default:
    //console.log('veiculo de placa '+veiculo.placa+' não fez pagamento por erro de categoria ('+ veiculo.categoria+')');
    return 0;
    break;
  }
};

var total_arrecadado = 0;
for (var count = 0; count < carros.length; count++){
  total_arrecadado += valorPagar(carros[count]);
}

document.getElementById('faturamento_total').innerHTML = total_arrecadado.toFixed(2);

// exercicio 3

var iniciado = false, hora_inicio, hora_atual, init_cronometro, tempo_passado, horas, minutos, segundos, milisegundos;
document.getElementById('comecar_parar').onclick = function () {
  if (!iniciado){
    iniciado = true;
    document.getElementById('comecar_parar').innerHTML = 'Parar';
    //começar cronometro
    if (!hora_inicio) {
      hora_inicio = new Date().getTime();
    } else {
      hora_inicio = new Date().getTime() - tempo_passado;
    }

    init_cronometro = window.setInterval(function () {

      hora_atual = new Date().getTime();
      tempo_passado = hora_atual - hora_inicio;

      horas = Math.floor(tempo_passado/3600000);
      resto= tempo_passado - (horas*3600000);
      
      minutos = Math.floor(resto/60000);
      resto -= (minutos*60000);

      segundos = Math.floor(resto/1000);
      resto -= (segundos*1000);

      milisegundos = resto;

      document.getElementById('cronometro').innerHTML = addLeftZero(horas)+':'+addLeftZero(minutos)+':'+addLeftZero(segundos)+' '+addLeftZero(milisegundos)

    }, 10);
      } else {
    window.clearInterval(init_cronometro);
    iniciado = false;
    document.getElementById('comecar_parar').innerHTML = 'Começar';
  }
}

document.getElementById('zerar').onclick = function () {
  tempo_passado = 0;
  hora_inicio = new Date().getTime();
  document.getElementById('cronometro').innerHTML = '00:00:00 000';
}

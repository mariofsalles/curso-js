// Menu Mobile
document.getElementById('hamburguer-icon').onclick = function () {
  document.getElementById('sliding-header-menu-outer').style.right = '0px';
}
document.getElementById('sliding-header-menu-close-button').onclick = function () {
  document.getElementById('sliding-header-menu-outer').style.right = '-320px';
}



// About us Tab
// accordion w3school possui varios tipos

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";
var about_tags = document.getElementsByClassName('single-tab');

for(var count = 0; count<about_tags.length; count++){
  about_tags[count].onclick = function () {
    for (var count1 = 0; count1 < about_tags.length; count1++) {
      about_tags[count1].style['background-color'] = unselected_color;
      about_tags[count1].style['font-weight'] = 'normal';
    }
    this.style['background-color'] = selected_color;
    this.style['font-weight'] = 'bold';
    
    var selected_tab = this.innerHTML
    document.getElementById('box-text').innerHTML = aboutUs[selected_tab];
  }
}


// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },
  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },
  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
];

// -- id's --
// btn serviço posterior: service-next
// btn serviço anterior: service-previous
// tiutulo: service-title
// descrição do serviço: service-text

var servico_atual = 0;
document.getElementById('service-previous').onclick = function () {
  if (servico_atual == 0){
    var servico_anterior = our_services.length - 1;
  } else {
    var servico_anterior = servico_atual -1;
  }
  document.getElementById('service-title').innerHTML = our_services[servico_anterior].title;
  document.getElementById('service-text').innerHTML = our_services[servico_anterior].text;
  servico_atual = servico_anterior;
}

document.getElementById('service-next').onclick = function () {
  if (servico_atual == our_services.length - 1) {
    var servico_posterior = 0;
  } else {
    var servico_posterior = servico_atual + 1;
  }
  document.getElementById('service-title').innerHTML = our_services[servico_posterior].title;
  document.getElementById('service-text').innerHTML = our_services[servico_posterior].text;
  servico_atual = servico_posterior;
}

// Data Footer
//current_year
var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();
document.getElementById('current_year').innerHTML = ano_atual;
console.log(ano_atual);
// inserindo o mapa
// embed google maps JS
// Maps API key: AIzaSyBKBUJK0-19hNcJk3UnxOvjyq_VhOSdS_w


// Objeto para pegar os preços e as fotos das camisetas

var camisetas = {
    'branca': {
        
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 5.12,
                'foto': 'v-white.jpg' 
            },
            'com_estampa': {
                'preco_unit': 8.95,
                'foto': 'v-white-personalized.jpg' 
            }
        },
        
        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 4.99,
                'foto': 'normal-white.jpg' 
            },
            'com_estampa': {
                'preco_unit': 8.77,
                'foto': 'normal-white-personalized.jpg' 
            }
        }
    },
    
    'colorida': {
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 6.04,
                'foto': 'v-color.jpg' 
            },
            'com_estampa': {
                'preco_unit': 9.47,
                'foto': 'v-color-personalized.png' 
            }
        },
        
        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 5.35,
                'foto': 'normal-color.jpg' 
            },
            'com_estampa': {
                'preco_unit': 9.28,
                'foto': 'normal-color-personalized.jpg' 
            }
        }
    }
}


// parâmetros da pesquisa

var parametros_pesquisa = {
    "quantidade": 10,
    "cor": "colorida", //
    "gola": "gola_v", //
    "qualidade": "q150", 
    "estampa": "com_estampa", //
    "embalagem": "bulk"
}


// Regras adicionais para o orçamento:

// 1. Verificar se há em localStorage os parâmetros do último orçamento e se houver, carregar a página com eles.

// 2. A camisa de qualidade alta (190g/m2) deve acrescer o preço unitário em 12%.

// 3. A embalagem unitária tem um custo de 0.15 por unidade

// 4. Após cálculo do preço, há que se aplicar um desconto por quantidade, sendo: 
    // faixa 1: acima de 1.000 - Desconto de 15%
    // faixa 2: acima de 500 - Desconto de 10%
    // faixa 3: acima de 100 - Desconto de 5%



// Resolução do desafio:

$(function () {

    function atualizar_orcamento(parametros) {
        $('.refresh-loader').show();

        var quantidade = parametros.quantidade;
        var preco_unit = camisetas[parametros.cor][parametros.gola][parametros.estampa].preco_unit;
        var foto = 'img/'+camisetas[parametros.cor][parametros.gola][parametros.estampa].foto;
        
        var valor_total = quantidade * preco_unit;

        if (parametros.qualidade == 'q190') {
            valor_total *= 1.12;
        }

        if (parametros.embalagem == 'unitaria') {
            valor_total += quantidade*0.15;
        }

        if (quantidade >= 1000){
            valor_total *= 0.85;
        } else if (quantidade >= 500){
        valor_total *= 0.90;
        } else if (quantidade >= 100) {
        valor_total *= 0.95;
        }

        
        window.setTimeout( function(){

            var id_gola = '#' + parametros.gola;
            var id_estampa = 'option[value=' + parametros.estampa + ']';
            var id_qualidade = '#' + parametros.qualidade;
            var id_cor = '#' + parametros.cor;
            var id_embalagem = 'option[value=' + parametros.embalagem + ']';

            $('#result_gola').html( $(id_gola).html());
            $('#result_estampa').html( $(id_estampa).html());
            $('#result_qualidade').html($(id_qualidade).html());
            $('#result_cor').html($(id_cor).html());
            $('#result_embalagem').html($(id_embalagem).html());
            $('#result_quantidade').html(parametros.quantidade);
            $('#valor-total').html(valor_total.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
            $('#foto-produto').attr('src', foto);
            $('.refresh-loader').hide();

        }, 600)
    }

    function atualizar_campos(parametros) {
        // mesmo tipo (botões): cor, gola e qualidade do tecido.
        $('#cor').children().removeClass('selected');
        var id_cor = '#'+parametros.cor;
        $(id_cor).addClass('selected');

        $('#gola').children().removeClass('selected');
        var id_gola = '#' + parametros.gola;
        $(id_gola).addClass('selected');

        $('#qualidade').children().removeClass('selected');
        var id_qualidade = '#' + parametros.qualidade;
        $(id_qualidade).addClass('selected');

        // mesmo tipo (inputs):estampa, embalagem, quantidade
        $('#estampa').val(parametros.estampa);
        $('#embalagem').val(parametros.embalagem);
        $('#quantidade').val(parametros.quantidade);
    }
    
    function atualizar_localStorage(parametros) {
        window.localStorage.setItem('quantidade', parametros.quantidade);
        window.localStorage.setItem('cor', parametros.cor);
        window.localStorage.setItem('gola', parametros.gola);
        window.localStorage.setItem('qualidade', parametros.qualidade);
        window.localStorage.setItem('estampa', parametros.estampa);
        window.localStorage.setItem('embalagem', parametros.embalagem);
    }
    //irá controlar os filtros a partir de uma alteração que vir a ocorrer na classe 
    //otptionfilter que possui um filho div, em outras palavras a alteração na div
    $('.option-filter div').click(function () { 
        // primeiro removo a classe de todos
        $(this).parent().children('div').removeClass('selected');
        // seguindamente adiciono a classe no que eu clico, selecino
        $(this).addClass('selected');
        // seleciono o id para uma categoria de uma div pai
        var categoria = $(this).parent().attr('id');
        // uso como argumento dos parametro_pesquisa 
        parametros_pesquisa[categoria] = $(this).attr('id');
        // atualizo o localstorage e o orçamento utilizando esse filtro
        atualizar_localStorage(parametros_pesquisa);
        atualizar_orcamento(parametros_pesquisa);
    });

    $('select').change(function () { 
        var parametro_select = $(this).attr('id');
        parametros_pesquisa[parametro_select] = $(this).val();
        atualizar_localStorage(parametros_pesquisa);
        atualizar_orcamento(parametros_pesquisa);
    });

    $('#quantidade').change(function () { 
        var  parametro_input= $(this).attr('id');
        parametros_pesquisa[parametro_input] = $(this).val();
        atualizar_localStorage(parametros_pesquisa);
        atualizar_orcamento(parametros_pesquisa);
    });

    // ---- Acontece ao se carregar a pagina
    // verificando se no localstorage há alguma coisa guardada:

    if (window.localStorage['quantidade']){
        parametros_pesquisa.quantidade = parseInt(localStorage['quantidade']);
    }
    if (window.localStorage['cor']) {
        parametros_pesquisa.cor = localStorage['cor'];
    }
    if (window.localStorage['gola']) {
        parametros_pesquisa.gola = localStorage['gola'];
    }
    if (window.localStorage['qualidade']) {
        parametros_pesquisa.qualidade = localStorage['qualidade'];
    }
    if (window.localStorage['estampa']) {
        parametros_pesquisa.estampa = localStorage['estampa'];
    }
    if (window.localStorage['embalagem']) {
        parametros_pesquisa.embalagem = localStorage['embalagem'];
    }
    
    //atualizar variavel parametros de pesquisa
    atualizar_campos(parametros_pesquisa);
    atualizar_orcamento(parametros_pesquisa);
});














// Sugestão de etapas da resolução

    // 1. Crie uma função para calcular o preço baseado nos parâmetros da variável "parametros_pesquisa" e solte o 
    // valor no console para testar se está certo.

    // 2. Faça os eventos click e change para os filtros.
    
        // a. Faça o evento click para os filtros do tipo botão (.option-filter). Sempre que houver um click, 
        // remova a classe "selected" dos botões do grupo e depois aplique-a apenas ao que foi clicado para
        // que ele fique azul.

        // b. Faça o evento change para os filtros do tipo <select> e para o <input> de quantidade.

        // c. Sempre que um dos eventos acima ocorrer, atualize a variável "parametros_pesquisa" e rode a função para 
        // calcular o preço

    
    // 3. Altere a função do cálculo do preço. Em vez de soltar os valores no console, atualize as informações
    // nos elementos "result_", atualize o preço no elemento "valor-total" e mude o atributo "src" do elemento 
    // "foto-produto" para alterar a imagem mostrada (todas as imagens estão na pasta img).

    // 4. Adicione a funcionalidade de hide e show do spinner (elemento "refresh-loader") à função de cálculo de preço. 
    // Como não estamos consultando dados externos, o cálculo acaba sendo rápido demais, portanto use um setTimeout 
    // para deixar ele aparecer por pelo menos 2 segundos.

    // 5. Crie a funcionalidade do localStorage e ao carregar a página, consulte o localStorage, 
    // atualize a variável "parametros_pesquisa" e rode a função de cálculo de preço
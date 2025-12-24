const motos = [
    {
        id: 1,
        nome: 'kawasaki',
        preco: '250.000',
        ano: '2023',
        km: '0 km',
        descricao: '0km nova',
        foto: ['images/moto1.jpg']
    },
    {
        id: 2,
        nome: 'kawasakihah',
        preco: '1.250.000',
        ano: '2025',
        km: '1 km',
        descricao: '0km nova',
        foto: ['images/moto2.jpg']
    },
    {
        id: 3,
        nome: 'kawasaki1wa',
        preco: '150.000',
        ano: '2020',
        km: '12 km',
        descricao: '0km nova',
        foto: ['images/moto3.jpg']
    },
    {
        id: 4,
        nome: 'kawasakasd1i',
        preco: '250.000',
        ano: '2018',
        km: '1300 km',
        descricao: '0km nova',
        foto: ['images/moto4.jpg']
    },
    {
        id: 5,
        nome: 'kawasakXXZai',
        preco: '250.000',
        ano: '2012',
        km: '25 km',
        descricao: '0km nova',
        foto: ['images/moto5.jpg']
    },
    {
        id: 6,
        nome: 'kawasakXXZaadadaadassdgasgashasgjsdhgjaskhgasjkghsajghsajlghsjghsjlghlsjdkghkgjhgjklghlji',
        preco: '250.000',
        ano: '2017',
        km: '25000 km',
        descricao: '0km nova',
        foto: ['images/moto6.jpg']
    },
    {
        id: 7,
        nome: 'kawasakXXasdZai',
        preco: '250.000',
        ano: '2009',
        km: '100000 km',
        descricao: '0km nova',
        foto: ['images/moto7.jpg']
    },
    {
        id: 8,
        nome: 'kawasaksdfasdasdasi',
        preco: '250.000',
        ano: '2011',
        km: '374000 km',
        descricao: '0km nova',
        foto: ['images/moto8.jpg']
    }
]

document.addEventListener("DOMContentLoaded", function (event) {
    criaElementosMoto(filtroSelecionado = 'maisRelevantes');
});

let motoSelecionada = null;

const tituloMotos = document.getElementById('tituloMotos');
const gridMotos = document.getElementById('gridMotos');

function criaElementosMoto(filtroSelecionado) {
    let motosOrdenadas = [...motos]; //array com as motos ordenadas de acordo com o usuário para não alterar a sequência original, cria uma cópia do motos, se usasse só motos ele alteraria o array original também

    // Aplica a ordenação baseada no filtro
    if (filtroSelecionado === 'maiorPreco') {
        motosOrdenadas.sort((a, b) => {
            const precoA = parseFloat(a.preco.replace('R$', '').replace('.', ''));
            const precoB = parseFloat(b.preco.replace('R$', '').replace('.', ''));
            return precoB - precoA;  // Decrescente (maior primeiro)
        });
    } else if (filtroSelecionado === 'menorPreco') {
        motosOrdenadas.sort((a, b) => {
            const precoA = parseFloat(a.preco.replace('R$', '').replace('.', ''));
            const precoB = parseFloat(b.preco.replace('R$', '').replace('.', ''));
            return precoA - precoB;  // Crescente (menor primeiro)
        });
    } else if (filtroSelecionado === 'maisNovo') {
        motosOrdenadas.sort((a, b) => parseInt(b.ano) - parseInt(a.ano));  // Decrescente (mais novo primeiro)
    } else if (filtroSelecionado === 'menorKm') {
        motosOrdenadas.sort((a, b) => {
            const kmA = parseInt(a.km.replace(' km', ''));
            const kmB = parseInt(b.km.replace(' km', ''));
            return kmA - kmB;  // Crescente (menor km primeiro)
        });
    } else if (filtroSelecionado === 'maisRelevantes') {
        // Mantém a ordem original (por ID)
        motosOrdenadas = motos;
    }

    gridMotos.innerHTML = ''; //limpa pra não ficar duplicado ao selecionar um filtro

    motosOrdenadas.forEach(moto => {
        const motoItem = document.createElement('div');
        motoItem.className = 'grid-fotosMoto-moto';
        motoItem.setAttribute('data-id', moto.id);
        motoItem.innerHTML = `
            <img src="${moto.foto}" alt="${moto.nome}">
            <div class = "grid-fotosMoto-moto-body">
                <div class = "grid-fotosMoto-moto-bodyInterno">
                    <h2 class="nome-moto">${moto.nome}</h2>
                    <div class="informacoesPequenasMoto">
                        <div>
                            <svg class="svg-iconesItemMoto" width="18" height="18" viewBox="0 0 18 18"><path d="M3.33333 13.1667H12.6667V8.50008H3.33333V13.1667ZM3.33333 5.83341H3.51867C3.75 6.23008 4.176 6.50008 4.66667 6.50008H5.33333C5.824 6.50008 6.25 6.23008 6.48133 5.83341H9.51867C9.75 6.23008 10.176 6.50008 10.6667 6.50008H11.3333C11.824 6.50008 12.25 6.23008 12.4813 5.83341H12.6667V7.16675H3.33333V5.83341ZM4.66667 4.50008H5.33333L5.33133 5.16675H4.66667V4.50008ZM10.6667 4.50008H11.3333L11.3313 5.16675H10.6667V4.50008ZM13.3333 4.50008H12.6667C12.6667 3.76475 12.0687 3.16675 11.3333 3.16675H10.6667C9.93133 3.16675 9.33333 3.76475 9.33333 4.50008H6.66667C6.66667 3.76475 6.06867 3.16675 5.33333 3.16675H4.66667C3.93133 3.16675 3.33333 3.76475 3.33333 4.50008H2.66667C2.298 4.50008 2 4.79875 2 5.16675V13.8334C2 14.2014 2.298 14.5001 2.66667 14.5001H13.3333C13.702 14.5001 14 14.2014 14 13.8334V5.16675C14 4.79875 13.702 4.50008 13.3333 4.50008Z"></path></svg>
                            <p class = "informacoesPequenasMoto-text">${moto.ano}</p>
                        </div>
                        <div>
                            <svg class="svg-iconesItemMoto" width="18" height="18" viewBox="0 0 18 18"><path d="M8.00016 11.1666C8.17083 11.1666 8.3415 11.1013 8.4715 10.9713L11.1382 8.30459C11.3988 8.04392 11.3988 7.62259 11.1382 7.36192C10.8775 7.10125 10.4562 7.10125 10.1955 7.36192L7.52883 10.0286C7.26816 10.2893 7.26816 10.7106 7.52883 10.9713C7.65883 11.1013 7.8295 11.1666 8.00016 11.1666ZM8.00016 5.16659C10.9408 5.16659 13.3335 7.55925 13.3335 10.4999C13.3335 10.9533 13.2768 11.3999 13.1648 11.8333H2.8355C2.7235 11.4006 2.66683 10.9533 2.66683 10.4999C2.66683 7.55925 5.0595 5.16659 8.00016 5.16659ZM14.2875 12.7219C14.5395 12.0093 14.6668 11.2619 14.6668 10.4999C14.6668 6.82392 11.6762 3.83325 8.00016 3.83325C4.32416 3.83325 1.3335 6.82392 1.3335 10.4999C1.3335 11.2626 1.4615 12.0106 1.7135 12.7226C1.71683 12.7333 1.72416 12.7406 1.72883 12.7506C1.7335 12.7619 1.74016 12.7706 1.7455 12.7819C1.7755 12.8459 1.8135 12.9026 1.86016 12.9513C1.87216 12.9646 1.8855 12.9759 1.89883 12.9886C1.94616 13.0319 1.99816 13.0666 2.0555 13.0946C2.0715 13.1026 2.08683 13.1113 2.1035 13.1179C2.1795 13.1473 2.25883 13.1673 2.34216 13.1673C2.34416 13.1673 2.34616 13.1666 2.3475 13.1666H13.6588C13.6648 13.1666 13.6702 13.1633 13.6762 13.1633C13.7308 13.1619 13.7808 13.1459 13.8328 13.1313C13.8655 13.1226 13.8995 13.1199 13.9302 13.1059C13.9715 13.0873 14.0055 13.0573 14.0428 13.0299C14.0748 13.0066 14.1108 12.9879 14.1382 12.9593C14.1648 12.9313 14.1808 12.8953 14.2035 12.8626C14.2302 12.8226 14.2595 12.7853 14.2768 12.7393C14.2795 12.7333 14.2848 12.7286 14.2875 12.7219Z"></path></svg>
                            <p class = "informacoesPequenasMoto-text">${moto.km}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p class = "preco-moto">R$ ${moto.preco}</p>
                    <div class="bottomMoto">
                        <button class = "button-verDetalhes" onclick="abrirPopUpDetalhes(${moto.id})">Ver Detalhes</button>
                        <button class = "button-verDetalhes-whatsappButton" onclick="enviarParaWhatsApp(${moto.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 25.876 26" class="text-white"><path id="iconmonstr-whatsapp-11" data-name="iconmonstr-whatsapp-1 (1)" d="M.057,26l1.828-6.677a12.883,12.883,0,1,1,5,4.885L.057,26ZM7.2,21.876a10.683,10.683,0,1,0-2.972-2.889L3.15,22.939,7.2,21.876ZM19.54,15.956c-.08-.134-.295-.214-.618-.376s-1.9-.94-2.2-1.048-.509-.161-.725.161-.832,1.048-1.019,1.262-.376.242-.7.08a8.786,8.786,0,0,1-2.589-1.6A9.691,9.691,0,0,1,9.9,12.208c-.187-.322-.019-.5.141-.656.145-.144.322-.376.483-.564a2.112,2.112,0,0,0,.325-.536.592.592,0,0,0-.027-.564c-.081-.16-.725-1.745-.992-2.39-.262-.627-.528-.543-.725-.553l-.618-.011a1.179,1.179,0,0,0-.858.4A3.612,3.612,0,0,0,6.5,10.022a6.265,6.265,0,0,0,1.314,3.33,14.353,14.353,0,0,0,5.5,4.861,18.627,18.627,0,0,0,1.835.678,4.425,4.425,0,0,0,2.028.128,3.316,3.316,0,0,0,2.173-1.531,2.682,2.682,0,0,0,.187-1.532Z" transform="translate(-0.057)" fill="currentColor"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        gridMotos.appendChild(motoItem);
    })
    tituloMotos.textContent = (motosOrdenadas.length + ' ANÚNCIOS')
}

//funcao para abrir e fechar dropdown de ordenação das motos
function abreFechaOrdenarMotos() {
    const lista = document.getElementById('listaDropDown');
    lista.classList.toggle('show');
}

//funcao pra abir popup

const body = document.body;
const popUpDetalhes = document.querySelector('.popup-MaisDetalhes');
const overlaypopUp = document.querySelector('.popup-MaisDetalhes-overlay')
function abrirPopUpDetalhes(id) {
    //busca a moto pelo ID
    const moto = motos.find(m => m.id === id);

    if (motoSelecionada) {
        motoSelecionada.classList.remove('selecionada');
    }

    motoSelecionada = document.querySelector(`[data-id="${id}"]`);
    if (motoSelecionada) {
        motoSelecionada.classList.add('selecionada');
    }

    //preenche os elementos do popup com os dados da moto
    document.getElementById('maisDetalhes-titulo').textContent = moto.nome;
    document.getElementById('maisDetalhes-imagem').src = moto.foto;
    document.getElementById('maisDetalhes-imagem').alt = `Imagem de ${moto.nome}`;
    document.getElementById('maisDetalhes-descricao').textContent = moto.descricao;
    document.getElementById('maisDetalhes-preco').textContent = moto.preco;
    document.getElementById('maisDetalhes-ano-km').textContent = `${moto.ano} - ${moto.km}`;

    // Define o ID da moto no botão WhatsApp do popup
    const whatsappButton = document.querySelector('.button-whatsapp-popup');
    whatsappButton.dataset.motoId = id;

    motoSelecionada.classList.add('selecionada');

    //deiaa o popup visível e para o scroll do body (depois de preencher pra ficar dinamico)
    popUpDetalhes.classList.add('show');
    overlaypopUp.classList.add('show')
    body.classList.add('no-scroll');
}

function fecharPopUpDetalhes() {
    popUpDetalhes.classList.remove('show');
    overlaypopUp.classList.remove('show')
    body.classList.remove('no-scroll');

    if (motoSelecionada) {
        motoSelecionada.classList.remove('selecionada');
        motoSelecionada = null;  // Limpa a referência
    }
}

function enviarParaWhatsApp(id) {
    // Busca a moto pelo ID
    const moto = motos.find(m => m.id === id);

    // Cria a mensagem formatada
    const mensagem = `Olá! Tenho interesse na moto: ${moto.nome}. Podemos conversar mais sobre?`;

    // Codifica a mensagem para URL e abre o WhatsApp
    const url = `https://wa.me/19989797841/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
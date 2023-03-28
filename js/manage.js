const content = document.querySelector('#root');

document.addEventListener("click", e => {
    const el = e.target;

    handleEvent(el);
});

function handleEvent(el){
    if(el.classList.contains('cadastrar')) cadastrarView(el);
    if(el.classList.contains('visualizar')) visualizarView(el);
    if(el.classList.contains('cadastrar-proprietario')) cadastrarProprietario(el);
    if(el.classList.contains('cadastrar-veiculo')) cadastrarVeiculo(el);
    if(el.classList.contains('visualizar-proprietario')) visualizarProprietario(el);
    if(el.classList.contains('visualizar-veiculo')) visualizarVeiculo(el);
}


// Views
async function cadastrarView(el){
    const href = 'http://localhost/view/cadastro.html';

    try{
        const response = await request({
            method: 'GET',
            url: href,
        });
        
        carregaResultado(response);
    }catch(e) {console.log(e)};
}

async function visualizarView(el){
    const href = 'http://localhost/view/visualizar.html';

    try{
        const response = await request({
            method: 'GET',
            url: href,
        });
        
        carregaResultado(response);
    }catch(e) {console.log(e)};
}

async function cadastrarProprietario(el){
    const href = 'http://localhost/view/cadastro-proprietario.html';

    try{
        const response = await request({
            method: 'GET',
            url: href,
        });
        
        carregaResultado(response);
    }catch(e) {console.log(e)};
}

async function cadastrarVeiculo(el){
    const href = 'http://localhost/view/cadastro-veiculo.html';

    try{
        const response = await request({
            method: 'GET',
            url: href,
        });
        
        carregaResultado(response);
    }catch(e) {console.log(e)};
}

async function visualizarProprietario(el){
    const href = 'http://localhost/view/visualizar-proprietario.html';
    const queryFile = 'http://localhost/config/visualizar-proprietarios.php';

    const tableContent = document.querySelector('table-content');

    try{
        const response = await request({
            method: 'GET',
            url: href,
        });
        
        carregaResultado(response);
    }catch(e) {console.log(e)};

    try{
        const response = await request({
            method: 'GET',
            url: queryFile,
        });
    }catch(e) {console.log(e)};
}

async function visualizarVeiculo(el){
    //const href = 'http://localhost/view/veiculo.html';

    try{
        const response = await request({
            method: 'GET',
            url: href,
        });
        
        carregaResultado(response);
    }catch(e) {console.log(e)};
}

// view render
function carregaResultado(response){
    content.innerHTML = response;
}

// request
const request = obj => {
    // xml http request -> usualmente chamado de xhr
    // o método open recebe 3 parametros
    // o primeiro é o método http que usaremos para fazer o request
    // o segundo é a url
    // o terceiro é se é async ou sync (async - trye, sync - false)
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);

        // se fosse método Post, precisaria ser enviado os dados como parametros
        if(obj.method === 'POST'){
            xhr.send(obj.body);
        }
        else{
            xhr.send();
        }   

        // vamos colocar um listener para quando for carregado o xhr, ou seja, a response
        xhr.addEventListener('load', () => {
            // se o status (código da resposta) estiver entre 200 e 300, significa que a requi
            // sição foi aceita com sucesso e retornada a reposta pelo servidor
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText,
                });
            }
        });
    });
};

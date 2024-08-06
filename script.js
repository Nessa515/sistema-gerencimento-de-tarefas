let inputTarefa = document.querySelector("#nomeTarefa");
let inputData = document.querySelector("#data");
let conteudoTabela = document.querySelector("#conteudoTabela");
let btnAddLivro = document.querySelector("#btnAddLivro");
let mensagem = document.querySelector("#mensagem");

let listaTarefas = [];


function getTarefas(){
    listaTarefas.JSON.parse(localStorage.getItem
        ("listaTarefas")) || []
}

function setTarefas(){
    localStorage.setItem("listaTarefas", JSON.stringify
        (listaTarefas))
}

function addTarefa(nomeTarefa, data){
    let tarefa = {
        tarefa: nomeTarefa,
        data: data
    }

    listaTarefas.push(tarefa)
    setTarefas()
    mostrarMensagem("Tarefa adicionada")
}

btnAddLivro.addEventListener('click', function(e){
    e.preventDefault()
    addTarefa(inputTarefa.value, inputData.value);
    console.table(listaTarefas);
    limparFormulario()
    renderizarTabela()
})

function limparFormulario(){
    inputTarefa.value = ""
    inputData.value = ""
    inputTarefa.focus()
}

function renderizarTabela(){
    conteudoTabela.innerHTML = `
    <table class="tabela">
        <tr>
            <th>Tarefa</th>
            <th>Data de conclusão</th>
            <th>Editar</th>
            <th>Excluir</th>
        </tr>
        ${listaTarefas.map(tarefa =>
            `<tr>
                <td>${tarefa.nomeTarefa}</td>
                <td>${tarefa.data}</td>
                <td></td>
                <td></td>
            <tr/>
            `
        ).join('')}
    </table>
    `
}

function mostrarMensagem(texto){
    mensagem.style.display = 'block'
    mensagem.innerHTML = texto

    setTimeout(function(){
        mensagem.style.display = 'none'
        mensagem.innerHTML = ''
    }, 3000)
}
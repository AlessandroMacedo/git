// Pega os elementos do HTML pelo id
const campoTarefa = document.getElementById("campoTarefa");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

// Função que adiciona uma tarefa na lista
function adicionarTarefa() {
  const texto = campoTarefa.value;

  if (texto === "") return; // não adiciona tarefa vazia

  const item = document.createElement("li");
  item.textContent = texto;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";
  botaoRemover.onclick = function () {
    item.remove();
  };

  item.appendChild(botaoRemover);
  listaTarefas.appendChild(item);

  campoTarefa.value = ""; // limpa o campo
}

// Quando clicar no botão, chama a função
botaoAdicionar.addEventListener("click", adicionarTarefa);

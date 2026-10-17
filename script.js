console.log("script carregou!");

const campoNome = document.getElementById("nome");
const campoAviso = document.getElementById("aviso");
const botaoEnvio = document.getElementById("envio");
const listaRecados = document.getElementById("lista-recados");

function criarRecado(nome, texto, hora) {
  const recado = document.createElement("div");
  recado.classList.add("recado");

  const autor = document.createElement("strong");
  autor.textContent = nome;

  const data = document.createElement("span");
  data.classList.add("data");
  data.textContent = hora;

  const conteudo = document.createElement("p");
  conteudo.classList.add("recado-texto");
  conteudo.textContent = texto;

  recado.append(autor, document.createElement("br"), data, conteudo);

  return recado;
}

botaoEnvio.addEventListener("click", function () {
  const nome = campoNome.value.trim();
  const texto = campoAviso.value.trim();

  if (nome === "" || texto === "") {
    alert("Preencha seu nome e o aviso!");
    return;
  }

  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const novoRecado = criarRecado(nome, texto, "Hoje às " + hora);

  listaRecados.prepend(novoRecado);

  campoNome.value = "";
  campoAviso.value = "";
});
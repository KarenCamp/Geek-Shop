import { criaNovoProduto } from "./listaProdutos-controller.js";
import { productService } from "../service/product-service.js";

let searchBar = document.querySelector("[data-search-bar]");
let itensEncontrados = document.querySelector("[data-div-busca]")
let jaListado = [];
let logado;
let ulBusca = document.createElement("ul");

window.addEventListener("load", function(){
    logado = sessionStorage.getItem("displayEdition") === "flex" 
})

function limpaBusca() {
    ulBusca.innerHTML = "";
    itensEncontrados.style.display = "none";
    jaListado = [];
    if(logado){
        sessionStorage.setItem("displayEdition", "flex")
     }
  }

searchBar.addEventListener("input", function() {
    productService.listaProdutos()
        .then(data => {
            data.forEach(elemento => {
                var expressao = new RegExp(searchBar.value, "i");
                if (searchBar.value.length >= 1 && expressao.test(elemento.nome)) {
                        if (jaListado.indexOf(elemento.id) == -1) {
                            jaListado.push(elemento.id)
                            itensEncontrados.style.display = "flex";
                            sessionStorage.setItem("displayEdition", "none");
                            ulBusca.classList.add("cabecalho__itensPesquisa");
                            ulBusca.style.margin = "35px auto";
                            itensEncontrados.appendChild(ulBusca);
                            ulBusca.appendChild(criaNovoProduto(elemento.id, elemento.nome, elemento.preco, elemento.descricao));
                        }
                }
    })})
                if (searchBar.value.length == 0) {
                      limpaBusca();
                }
})

window.addEventListener("click", function(){
      limpaBusca();
      searchBar.value = ""
})

  

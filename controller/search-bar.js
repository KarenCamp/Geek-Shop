import { criaNovoProduto } from "./listaProdutos-controller.js";
import { productService } from "../service/product-service.js";

let searchBar = document.querySelector("[data-search-bar]");
let itensEncontrados = document.querySelector("[data-div-busca]")
let jaListado = [];
let logado;
let ulBusca = [];
for (let c = 0; c <= 18; c++){
    ulBusca.push(document.createElement("ul"))
} 

window.addEventListener("load", function(){
    logado = sessionStorage.getItem("displayEdition") === "flex" 
})

function limpaBusca() {
    for (let i = 0; i < 19; i++) {
    ulBusca[i].innerHTML = "";
    ulBusca[i].style.display = "none"
    }
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
                
                if (searchBar.value.length == 1 && expressao.test(elemento.nome)) {
                    jaListado.push(elemento.id) 
                    itensEncontrados.style.display = "flex";
                    sessionStorage.setItem("displayEdition", "none");
                }  

                function refinarFiltro (posicaoLetra, preUl, thisUl, posUl) {
                    
                    if (searchBar.value.length == posicaoLetra && expressao.test(elemento.nome) && jaListado.indexOf(elemento.id) > -1) {
                        preUl.innerHTML = "";
                        preUl.style.display = "none";
                        thisUl.classList.add("cabecalho__itensPesquisa");
                        thisUl.style.margin = "35px auto";
                        thisUl.style.display = "flex"
                        itensEncontrados.appendChild(thisUl);
                        thisUl.appendChild(criaNovoProduto(elemento.id, elemento.nome, elemento.preco, elemento.descricao));
                        posUl.innerHTML = ""
                        posUl.style.display = "none"
                    }

                    else if (searchBar.value.length == posicaoLetra && !expressao.test(elemento.nome) && jaListado.indexOf(elemento.id) > -1) {
                                itensEncontrados.appendChild(thisUl);
                                let qtdResult = thisUl.childElementCount
                            if (qtdResult == 0) {
                                    preUl.innerHTML = "";
                                    preUl.style.display = "none";
                                    thisUl.innerHTML = "";
                                    thisUl.style.display = "none"
                                    posUl.innerHTML = ""
                                    posUl.style.display = "none"
                            }
                    }
                    
                }

                refinarFiltro(searchBar.value.length, ulBusca[searchBar.value.length-1], ulBusca[searchBar.value.length], ulBusca[searchBar.value.length+1]);
            
    })})
                if (searchBar.value.length == 0) {
                      limpaBusca();
                }
})

window.addEventListener("click", function(){
      limpaBusca();
      searchBar.value = ""
})
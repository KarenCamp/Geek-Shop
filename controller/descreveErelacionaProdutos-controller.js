import { productService } from '../service/product-service.js'
import { criaNovoProduto } from '../controller/listaProdutos-controller.js'

const txtDescricao = document.querySelector("[data-text]");
const priceDescricao = document.querySelector("[data-price]");
const titleDescricao = document.querySelector("[data-title]");
const imgDescricao = document.querySelector("[data-img-descricao]");
const getURL = new URL(window.location)
const id = getURL.searchParams.get('id')
const ulSimilares = document.querySelector('[data-sessao-similares]');


//DESCREVE O PRODUTO SELECIONADO E CONTROLA A RELAÇÃO DE PRODUTOS SIMILARES
productService.listaProdutos()
.then(data => {
        data.forEach(elemento => {
                if (elemento.id == id) {
                        titleDescricao.innerHTML = elemento.nome;
                        priceDescricao.innerHTML = elemento.preco;
                        txtDescricao.innerHTML = elemento.descricao;
                        imgDescricao.innerHTML = `<img src="../assets/imgs/all-products/${elemento.id}.png" alt="${elemento.descricao}"class="produtoDescricaoDetalhada__img">`
                }
                if (id <= 6 && elemento.id <= 6 && elemento.id != id){
                        ulSimilares.appendChild(criaNovoProduto(elemento.id, elemento.nome, elemento.preco, elemento.descricao));
                }
                else if (id > 6 && elemento.id > 6 && id <= 12 && elemento.id <= 12 && elemento.id != id){
                        ulSimilares.appendChild(criaNovoProduto(elemento.id, elemento.nome, elemento.preco, elemento.descricao));
                }
                else if (id > 12 && elemento.id > 12 && id <= 18 && elemento.id <= 18 && elemento.id != id){
                        ulSimilares.appendChild(criaNovoProduto(elemento.id, elemento.nome, elemento.preco, elemento.descricao));
                }
                else if (id > 18 && elemento.id > 18 && elemento.id != id){
                        ulSimilares.appendChild(criaNovoProduto(elemento.id, elemento.nome, elemento.preco, elemento.descricao));
                }
})})
            
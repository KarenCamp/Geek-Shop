import { productService } from '../service/product-service.js'


//DEFINIÇÃO DE TEMPLATE DO PRODUTO
    export const criaNovoProduto = (id, name, price, description) =>  {
    let display = sessionStorage.getItem("displayEdition")
    const liNovoProduto = document.createElement('li');
          liNovoProduto.classList.add("secaoDeProdutos__itens");
          liNovoProduto.dataset.id = id
    const liChildren = `
            <img src="../assets/imgs/all-products/${id}.png" width="174" height="172" alt="${description}">
            <div class="secaoDeProdutos__containerEdicao" style="display:${display}">
            <img src="../assets/imgs/delete.png" alt="ícone-deletar" class="secaoDeProdutos__iconesEdicao secaoDeProdutos__iconesEdicao--excluir">
            <a href="../pages/edicao-produto.html?id=${id}"><img src="../assets/imgs/edit.png" alt="ícone-editar" class="secaoDeProdutos__iconesEdicao secaoDeProdutos__iconesEdicao--editar"></a>
            </div>
            <h3 class="secaoDeProdutos__nomeDoItem">${name}</h3>
            <p class="secaoDeProdutos__precoDoItem">${price}</p>
            <a class="secaoDeProdutos__linkParaOProduto" href="../pages/produto-descricao.html?id=${id}" data-link-produto>Ver produto</a>
          `
           liNovoProduto.innerHTML = liChildren;
        return liNovoProduto
    }

export const ulWars = document.querySelector("[data-sessao-wars]");
export const ulConsoles = document.querySelector("[data-sessao-consoles]");
export const ulDiversos = document.querySelector("[data-sessao-diversos]");
export const lisExtras = document.querySelector("[data-sessao-extra]");
const ulTodos = document.querySelectorAll("[data-sessao]");

//FUNÇÃO PARA DELETAR UM PRODUTO
for(let c = 0; c < ulTodos.length; c++) {
ulTodos[c].addEventListener('click', (evento) => {
    let ehIconeDeDeletar = evento.target.className === 'secaoDeProdutos__iconesEdicao secaoDeProdutos__iconesEdicao--excluir'
    if (ehIconeDeDeletar) {
        const itemProduto = evento.target.closest('[data-id]')
        var id = itemProduto.dataset.id
        productService.removeProduto(id)
            .then(() => {
                itemProduto.remove()
            })
      }
})}

//LISTAGEM DE PRODUTOS ATUALIZADOS
productService.listaProdutos()
.then(data => {
        data.forEach(elemento => {
        if(elemento.id <= 6) {
            ulWars.appendChild(criaNovoProduto(elemento.id, elemento.nome, elemento.preco, elemento.descricao));
        }
        else if(elemento.id > 6 && elemento.id <= 12) {
            ulConsoles.appendChild(criaNovoProduto(elemento.id, elemento.nome, elemento.preco, elemento.descricao));
        }
        else if(elemento.id > 12 && elemento.id <= 18) {
            ulDiversos.appendChild(criaNovoProduto(elemento.id, elemento.nome, elemento.preco, elemento.descricao));
        }
        else if(elemento.id > 18) {
            lisExtras.appendChild(criaNovoProduto(elemento.id, elemento.nome, elemento.preco, elemento.descricao));
        }
})})


            

            

            
    





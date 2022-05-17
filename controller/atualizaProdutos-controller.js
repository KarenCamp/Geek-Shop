import { productService } from '../service/product-service.js'

const pegaURL = new URL(window.location)
const id = pegaURL.searchParams.get('id')

const nameEdited = document.querySelector('[data-input-name-newProduct-edit]');
const priceEdited = document.querySelector('[data-input-price-newProduct-edit]');
const descriptionEdited = document.querySelector('[data-txtarea-newProduct-edit]');

window.addEventListener("load", function(){
  alert('ATENÇÃO! A área de adição de imagem do layout deste formulário apenas faz referência ao template pré-definido pelo Figma, a inserção não está funcional, sua finalidade é atender com fidelidade ao template, estamos atribuindo a imagem do produto de outra forma, utilizando como referência o id do produto em questão. Navegue até a pasta de imagens de todos os produtos e gerencie-os sincronizando seus ids com os índices das respectivas imagens. O id de um produto pode ser encontrado no final do link de uma página de edição do mesmo e no final do link da página de visualização do produto, no caso de um novo cadastro confira o id do último produto adicionado em "Todos os produtos" através de alguma destas duas formas citadas.')
  productService.listaProdutos()
  .then(data => {
        data.forEach(elemento => {
        if (elemento.id == id) {
            nameEdited.value = elemento.nome
            priceEdited.value = elemento.preco
            descriptionEdited.value = elemento.descricao 
        }
   })})
})

productService.detalhaProduto(id)
.then( dados => { 
  nameEdited.value = dados.nome
  priceEdited.value = dados.preco
  descriptionEdited.value = dados.descricao
})

export const formNewProduct = document.querySelector('[data-form-newProduct-edit]')

formNewProduct.addEventListener('submit', (evento) => {
  evento.preventDefault()

productService.atualizaProduto(id, nameEdited.value, priceEdited.value, descriptionEdited.value)
  .then(()=> {
    window.location.href = '../pages/todos-os-produtos.html'
  }) 
})




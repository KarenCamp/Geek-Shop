import { productService } from '../service/product-service.js'

window.addEventListener("load", function(){
alert('ATENÇÃO! A área de adição de imagem do layout deste formulário apenas faz referência ao template pré-definido pelo Figma, a inserção não está funcional, sua finalidade é atender com fidelidade ao template, estamos atribuindo a imagem do produto de outra forma, utilizando como referência o id do produto em questão. Navegue até a pasta de imagens de todos os produtos e gerencie-os sincronizando seus ids com os índices das respectivas imagens. O id de um produto pode ser encontrado no final do link de uma página de edição do mesmo e no final do link da página de visualização do produto, no caso de um novo cadastro confira o id do último produto adicionado em "Todos os produtos" através de alguma destas duas formas citadas.')
})

const formNewProduct = document.querySelector("[data-form-newProduct]");
const id = undefined;
const name = document.querySelector('[data-input-name-newProduct]');
const price = document.querySelector('[data-input-price-newProduct]');
const description = document.querySelector('[data-txtarea-newProduct]');

formNewProduct.addEventListener('submit', (evento)=> { 
  evento.preventDefault()
  name.value;
  price.value;
  description.value;

  productService.criaProduto(id, name.value, price.value, description.value)
  .then(()=> {
    window.location.href = '../pages/todos-os-produtos.html'
  })
})


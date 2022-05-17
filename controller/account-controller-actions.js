export let btnLogado = document.querySelector("[data-btn-logado]");
export let btnFazerLogin = document.querySelector("[data-btn-login]")
const btnAddProduct = document.querySelector(".secaoDeProdutos__botao--adicionar");

//MODO EDITION ON
window.addEventListener("load",function(){
    let estaLogado = sessionStorage.getItem("displayEdition") == "flex";
    if (estaLogado){
        btnFazerLogin.style.display = "none"
        btnLogado.style.display = "flex"
        btnAddProduct.style.display = "flex";
    }else {
        btnFazerLogin.style.display = "flex"
        btnLogado.style.display = "none"
        btnAddProduct.style.display = "none";
    }
})

//MENU ADM - EVENTOS
let intervalo;
btnLogado.addEventListener("mousedown", function(event){
   if(event.buttons == 1){
      intervalo = setInterval(seClicadoESegurado, 400);
   }
});

btnLogado.addEventListener("mouseup", function(){
   clearInterval(intervalo);
});

function seClicadoESegurado(){
    window.location.href = '../pages/novo-produto.html'
}
        
btnLogado.addEventListener("dblclick", function(){
        sessionStorage.setItem("displayEdition", "none");
        window.location.href = '../pages/index.html'
})
        


       

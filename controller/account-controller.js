import { btnFazerLogin, btnLogado } from '../controller/account-controller-actions.js'

const formLogin = document.querySelector("[data-form-login]");
const mailLogin = document.querySelector("[data-mail]").value;
const passwordLogin = document.querySelector("[data-password]").value;


formLogin.addEventListener("submit", function(event) {
    event.preventDefault();
        if (mailLogin === "edition-mode-on@teste.com") {
            alert("Autenticado para o Modo Edição.");
            sessionStorage.setItem("displayEdition", "flex");
            btnFazerLogin.style.display = "none"
            btnLogado.style.display = "flex" 
            alert('SEJA BEM VINDO! CLIQUE NO BOTÃO "MENU ADM" E SEGURE PARA IR DIRETAMENTE À PÁGINA DE ADIÇÃO DE UM PRODUTO. SE QUISER FAZER LOGOUT, DÊ DUPLO CLIQUE NO MESMO BOTÃO.')
        } 
        else {
              alert("Não autenticado para o Modo Edição.");
              sessionStorage.setItem("displayEdition", "none");
              btnFazerLogin.style.display = "flex"
              btnLogado.style.display = "none"
             } 
        }) 
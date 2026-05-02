console.log("O script.js está funcionando!");

const icon = document.getElementById("iconBox");
const closeBtn = document.getElementById("closeBtn");

// let articleFunctionsBox = document.querySelectorAll(".article-functions-box");
/* Gerenciar Produto */
const iconGerProd = document.getElementById("iconGerProd"); // ícone na área de trabalho
const gerProd = document.getElementById("gerProd"); // article do gerenciar produto

// buttons
const insertProdBtn = document.getElementById("insertProd");
const updateProdBtn = document.getElementById("updateProd");
const deleteProdBtn = document.getElementById("deleteProd");
const selectProdBtn = document.getElementById("selectProd");

// forms
const formCadProduto = document.getElementById("formCadProduto"); // form do cadastro de produto
const formAtuaProduto = document.getElementById("formAtuaProduto"); // form da atualização de produto
const formRemoveProduto = document.getElementById("formRemoveProduto"); // form da atualização de produto
const formConsulProduto = document.getElementById("formConsulProduto"); // form da atualização de produto

/* */

let isAberto = false;

// function iconClickGerProd() {
//     iconGerProd.addEventListener("click", function () {
//         if (isAberto == false) {
//             gerProd.classList.add("aparecer");
//             isAberto = true;
//         } else {
//             gerProd.classList.remove("desapareceu");
//             isAberto = false;
//         }
//     });
// }

document.addEventListener("DOMContentLoaded", function () {
    // iconClickGerProd();
    insertProdBtn.classList.add("btn-acionado");
    formCadProduto.classList.add("aparecer");

    formAtuaProduto.classList.add("desaparecer");
    formRemoveProduto.classList.add("desaparecer");
    formConsulProduto.classList.add("desaparecer");

    iconGerProd.addEventListener("click", function () {
        if (isAberto == false) {
            gerProd.classList.add("aparecer");
            isAberto = true;
        } else {
            gerProd.classList.remove("aparecer");
            isAberto = false;
        }
    });

    closeBtn.addEventListener("click", function () {
        gerProd.classList.remove("aparecer");
        isAberto = false;
    });
});

insertProdBtn.addEventListener("click", function () {
    console.log("mudou para cadastrar");

    formAtuaProduto.classList.add("desaparecer");
    formAtuaProduto.classList.remove("aparecer");

    formRemoveProduto.classList.add("desaparecer");
    formRemoveProduto.classList.remove("aparecer");

    formConsulProduto.classList.add("desaparecer");
    formConsulProduto.classList.remove("aparecer");

    formCadProduto.classList.remove("desaparecer");
    formCadProduto.classList.add("aparecer");

    insertProdBtn.classList.add("btn-acionado");
    updateProdBtn.classList.remove("btn-acionado");
    deleteProdBtn.classList.remove("btn-acionado");
    selectProdBtn.classList.remove("btn-acionado");
});

updateProdBtn.addEventListener("click", function () {
    console.log("mudou para atualizar");
    
    formCadProduto.classList.add("desaparecer");
    formCadProduto.classList.remove("aparecer");

    formRemoveProduto.classList.add("desaparecer");
    formRemoveProduto.classList.remove("aparecer");

    formConsulProduto.classList.add("desaparecer");
    formConsulProduto.classList.remove("aparecer");
    
    formAtuaProduto.classList.remove("desaparecer");
    formAtuaProduto.classList.add("aparecer");

    insertProdBtn.classList.remove("btn-acionado");
    updateProdBtn.classList.add("btn-acionado");
    deleteProdBtn.classList.remove("btn-acionado");
    selectProdBtn.classList.remove("btn-acionado");
});

deleteProdBtn.addEventListener("click", function () {
    console.log("mudou para remover");
    
    formCadProduto.classList.add("desaparecer");
    formCadProduto.classList.remove("aparecer");

    formConsulProduto.classList.add("desaparecer");
    formConsulProduto.classList.remove("aparecer");

    formAtuaProduto.classList.add("desaparecer");
    formAtuaProduto.classList.remove("aparecer");
    
    formRemoveProduto.classList.remove("desaparecer");
    formRemoveProduto.classList.add("aparecer");
    
    insertProdBtn.classList.remove("btn-acionado");
    updateProdBtn.classList.remove("btn-acionado");
    deleteProdBtn.classList.add("btn-acionado");
    selectProdBtn.classList.remove("btn-acionado");
});

selectProdBtn.addEventListener("click", function () {
    console.log("mudou para consultar");
    
    formCadProduto.classList.add("desaparecer");
    formCadProduto.classList.remove("aparecer");

    formRemoveProduto.classList.add("desaparecer");
    formRemoveProduto.classList.remove("aparecer");

    formAtuaProduto.classList.add("desaparecer");
    formAtuaProduto.classList.remove("aparecer");
    
    formConsulProduto.classList.remove("desaparecer");
    formConsulProduto.classList.add("aparecer");
    
    insertProdBtn.classList.remove("btn-acionado");
    updateProdBtn.classList.remove("btn-acionado");
    deleteProdBtn.classList.remove("btn-acionado");
    selectProdBtn.classList.add("btn-acionado");
});
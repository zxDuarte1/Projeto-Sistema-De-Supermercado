console.log("O script.js está funcionando!");

// const closeBtn = document.getElementById("closeBtn");
let iconBtns = document.querySelectorAll(".icon");
// let iconBox = document.querySelectorAll(".icon-box");
const closeBtn = document.querySelectorAll(".close-btn");

let isAberto = false;

let articleFunctionsBox = document.querySelectorAll(".article-functions-box");

function clickIcon() {
    let realCompraIsAberto = false;
    let gerProdIsAberto = false;
    let gerFuncIsAberto = false;
    let gerClienteIsAberto = false;
    let emitirRelatIsAberto = false;

    iconRealCompra.addEventListener("click", function () {
        if (gerProdIsAberto == true || gerFuncIsAberto == true || gerClienteIsAberto == true || emitirRelatIsAberto == true || isAberto == false) {
            gerProd.classList.remove("aparecer");
            gerProd.classList.add("desaparecer");

            gerFunc.classList.remove("aparecer");
            gerFunc.classList.add("desaparecer");

            gerClie.classList.remove("aparecer");
            gerClie.classList.add("desaparecer");

            emitRelat.classList.remove("aparecer");
            emitRelat.classList.add("desaparecer");

            realizarCompra.classList.add("aparecer");
            isAberto = true;
            realCompraIsAberto = true;

            iconBtns.forEach(iconBtn => {
                iconBtn.classList.add("btn-clicked");
            });
        } else {
            realizarCompra.classList.remove("aparecer");
            isAberto = false;
            realCompraIsAberto = false;

            iconBtns.forEach(iconBtn => {
                iconBtn.classList.remove("btn-clicked");
            });
        }
    });

    iconGerProd.addEventListener("click", function () {
        if (realCompraIsAberto == true || gerFuncIsAberto == true || gerClienteIsAberto == true || emitirRelatIsAberto == true || isAberto == false) {
            realizarCompra.classList.remove("aparecer");
            realizarCompra.classList.add("desaparecer");

            gerFunc.classList.remove("aparecer");
            gerFunc.classList.add("desaparecer");

            gerClie.classList.remove("aparecer");
            gerClie.classList.add("desaparecer");

            emitRelat.classList.remove("aparecer");
            emitRelat.classList.add("desaparecer");

            gerProd.classList.add("aparecer");
            isAberto = true;
            gerProdIsAberto = true;

            iconBtns.forEach(iconBtn => {
                iconBtn.classList.add("btn-clicked");
            });
        } else {
            gerProd.classList.remove("aparecer");
            isAberto = false;
            gerProdIsAberto = false;

            iconBtns.forEach(iconBtn => {
                iconBtn.classList.remove("btn-clicked");
            });

            // insertProdBtn.classList.add("btn-acionado");
            // formCadProduto.classList.add("aparecer");

            // updateProdBtn.classList.add("desaparecer");
            // formAtuaProduto.classList.add("desaparecer");

            // deleteProdBtn.classList.add("desaparecer");
            // formRemoveProduto.classList.add("desaparecer");

            // selectProdBtn.classList.add("desaparecer");
            // formConsulProduto.classList.add("desaparecer");
        }
    });

    iconGerFunc.addEventListener("click", function () {
        if (realCompraIsAberto == true || gerProdIsAberto == true || gerClienteIsAberto == true || emitirRelatIsAberto == true || isAberto == false) {
            realizarCompra.classList.remove("aparecer");
            realizarCompra.classList.add("desaparecer");

            gerProd.classList.remove("aparecer");
            gerProd.classList.add("desaparecer");

            gerClie.classList.remove("aparecer");
            gerClie.classList.add("desaparecer");

            emitRelat.classList.remove("aparecer");
            emitRelat.classList.add("desaparecer");

            gerFunc.classList.add("aparecer");
            isAberto = true;
            gerFuncIsAberto = true;

            iconBtns.forEach(iconBtn => {
                iconBtn.classList.add("btn-clicked");
            });
        } else {
            gerFunc.classList.remove("aparecer");
            isAberto = false;
            gerFuncIsAberto = false;

            iconBtns.forEach(iconBtn => {
                iconBtn.classList.remove("btn-clicked");
            });
        }
    });

    iconGerClientes.addEventListener("click", function () {
        if (realCompraIsAberto == true || gerProdIsAberto == true || gerFuncIsAberto == true || emitirRelatIsAberto == true || isAberto == false) {
            realizarCompra.classList.remove("aparecer");
            realizarCompra.classList.add("desaparecer");

            gerProd.classList.remove("aparecer");
            gerProd.classList.add("desaparecer");

            gerFunc.classList.remove("aparecer");
            gerFunc.classList.add("desaparecer");

            emitRelat.classList.remove("aparecer");
            emitRelat.classList.add("desaparecer");

            gerClie.classList.add("aparecer");
            isAberto = true;
            gerClieIsAberto = true;

            iconBtns.forEach(iconBtn => {
                iconBtn.classList.add("btn-clicked");
            });
        } else {
            gerClie.classList.remove("aparecer");
            isAberto = false;
            gerClieIsAberto = false;

            iconBtns.forEach(iconBtn => {
                iconBtn.classList.remove("btn-clicked");
            });
        }
    });

    iconEmitirRelat.addEventListener("click", function () {
        if (realCompraIsAberto == true || gerProdIsAberto == true || gerFuncIsAberto == true || gerClienteIsAberto == true || isAberto == false) {
            realizarCompra.classList.remove("aparecer");
            realizarCompra.classList.add("desaparecer");

            gerProd.classList.remove("aparecer");
            gerProd.classList.add("desaparecer");

            gerFunc.classList.remove("aparecer");
            gerFunc.classList.add("desaparecer");

            gerClie.classList.remove("aparecer");
            gerClie.classList.add("desaparecer");

            emitRelat.classList.add("aparecer");
            isAberto = true;
            emitirRelatIsAberto = true;

            iconBtns.forEach(iconBtn => {
                iconBtn.classList.add("btn-clicked");
            });
        } else {
            emitRelat.classList.remove("aparecer");
            isAberto = false;
            emitirRelatIsAberto = false;

            iconBtns.forEach(iconBtn => {
                iconBtn.classList.remove("btn-clicked");
            });
        }
    });

    // if (isAberto == false) {
    //     gerProd.classList.add("aparecer");

    //     gerFunc.classList.add("aparecer");

    //     isAberto = true;
    // } else {
    //     gerProd.classList.remove("aparecer");

    //     gerFunc.classList.remove("aparecer");

    //     isAberto = false;
    // }
}

function closeContainer() {
    closeBtn.forEach(btn => {
        // btn.classList.remove("aparecer");

        articleFunctionsBox.forEach(article => {
            article.classList.remove("aparecer");

            isAberto = false;
        });
    });
}






/* 1 - Realizar Compra */
const iconRealCompra = document.getElementById("iconRealCompra"); // ícone na área de trabalho
const realizarCompra = document.getElementById("realizarCompraArt"); // article do realizar compra

// buttons
const selectProdCompraBtn = document.getElementById("selectProdCompra");
const insertProdCompraBtn = document.getElementById("insertProdCompra");
const deleteProdCompraBtn = document.getElementById("deleteProdCompra");
const selectProdVencidosBtn = document.getElementById("selectProdVencidos");

const emitirNotaFiscalBtn = document.getElementById("emitirNotaFiscal");

// forms
const formConsulProdutoLista = document.getElementById("formConsulProdutoLista"); // form de consulta de produtos na lista
const formInsertProdutoLista = document.getElementById("formInsertProdutoLista"); // form de inserção de produtos na lista
const formRemoveProdutoLista = document.getElementById("formDeleteProdutoLista"); // form de remoção de produtos na lista
const formConsulProdutoVencidosLista = document.getElementById("formConsulProdutoVencidosLista"); // form de consulta de produtos vencidos na lista

const formEmitirNotaFiscal = document.getElementById("formEmitirNotaFiscal"); // form de emitir nota fiscal
/* */

function realizarCompraFunc() {
    selectProdCompraBtn.classList.add("btn-acionado");
    formConsulProdutoLista.classList.add("aparecer");

    formInsertProdutoLista.classList.add("desaparecer");
    formRemoveProdutoLista.classList.add("desaparecer");
    formConsulProdutoVencidosLista.classList.add("desaparecer");

    formEmitirNotaFiscal.classList.add("desaparecer");

    selectProdCompraBtn.addEventListener("click", function () {
        formInsertProdutoLista.classList.add("desaparecer");
        formInsertProdutoLista.classList.remove("aparecer");

        formRemoveProdutoLista.classList.add("desaparecer");
        formRemoveProdutoLista.classList.remove("aparecer");

        formConsulProdutoVencidosLista.classList.add("desaparecer");
        formConsulProdutoVencidosLista.classList.remove("aparecer");

        formEmitirNotaFiscal.classList.add("desaparecer");
        formEmitirNotaFiscal.classList.remove("aparecer");

        formConsulProdutoLista.classList.remove("desaparecer");
        formConsulProdutoLista.classList.add("aparecer");

        selectProdCompraBtn.classList.add("btn-acionado");
        insertProdCompraBtn.classList.remove("btn-acionado");
        deleteProdCompraBtn.classList.remove("btn-acionado");
        selectProdVencidosBtn.classList.remove("btn-acionado");
        emitirNotaFiscalBtn.classList.remove("btn-acionado");
    });

    insertProdCompraBtn.addEventListener("click", function () {
        formConsulProdutoLista.classList.add("desaparecer");
        formConsulProdutoLista.classList.remove("aparecer");

        formRemoveProdutoLista.classList.add("desaparecer");
        formRemoveProdutoLista.classList.remove("aparecer");

        formConsulProdutoVencidosLista.classList.add("desaparecer");
        formConsulProdutoVencidosLista.classList.remove("aparecer");

        formEmitirNotaFiscal.classList.add("desaparecer");
        formEmitirNotaFiscal.classList.remove("aparecer");

        formInsertProdutoLista.classList.remove("desaparecer");
        formInsertProdutoLista.classList.add("aparecer");

        selectProdCompraBtn.classList.remove("btn-acionado");
        insertProdCompraBtn.classList.add("btn-acionado");
        deleteProdCompraBtn.classList.remove("btn-acionado");
        selectProdVencidosBtn.classList.remove("btn-acionado");
        emitirNotaFiscalBtn.classList.remove("btn-acionado");
    });

    deleteProdCompraBtn.addEventListener("click", function () {
        formConsulProdutoLista.classList.add("desaparecer");
        formConsulProdutoLista.classList.remove("aparecer");

        formInsertProdutoLista.classList.add("desaparecer");
        formInsertProdutoLista.classList.remove("aparecer");

        formConsulProdutoVencidosLista.classList.add("desaparecer");
        formConsulProdutoVencidosLista.classList.remove("aparecer");

        formEmitirNotaFiscal.classList.add("desaparecer");
        formEmitirNotaFiscal.classList.remove("aparecer");

        formRemoveProdutoLista.classList.remove("desaparecer");
        formRemoveProdutoLista.classList.add("aparecer");

        selectProdCompraBtn.classList.remove("btn-acionado");
        insertProdCompraBtn.classList.remove("btn-acionado");
        deleteProdCompraBtn.classList.add("btn-acionado");
        selectProdVencidosBtn.classList.remove("btn-acionado");
        emitirNotaFiscalBtn.classList.remove("btn-acionado");

        const credGerente = document.getElementById("credGerente");
        const areaGerente = document.getElementById("areaGerente");
        const removerProdutoLista = document.getElementById("removerProdutoLista");

        removerProdutoLista.addEventListener("click", function () {
            if (credGerente.value !== "") {
                // console.log(credGerente.value);
                areaGerente.classList.add("cod-gerente-validado");
            } else {
                areaGerente.classList.remove("cod-gerente-validado");
            }
        });
    });

    selectProdVencidosBtn.addEventListener("click", function () {
        formConsulProdutoLista.classList.add("desaparecer");
        formConsulProdutoLista.classList.remove("aparecer");

        formRemoveProdutoLista.classList.add("desaparecer");
        formRemoveProdutoLista.classList.remove("aparecer");

        formInsertProdutoLista.classList.add("desaparecer");
        formInsertProdutoLista.classList.remove("aparecer");

        formEmitirNotaFiscal.classList.add("desaparecer");
        formEmitirNotaFiscal.classList.remove("aparecer");

        formConsulProdutoVencidosLista.classList.remove("desaparecer");
        formConsulProdutoVencidosLista.classList.add("aparecer");

        selectProdCompraBtn.classList.remove("btn-acionado");
        insertProdCompraBtn.classList.remove("btn-acionado");
        deleteProdCompraBtn.classList.remove("btn-acionado");
        selectProdVencidosBtn.classList.add("btn-acionado");
        emitirNotaFiscalBtn.classList.remove("btn-acionado");

        const codProdutoVencido = document.getElementById("codProdutoVencido");
        const result = document.getElementById("result");
        const consultarProdutoVencidoLista = document.getElementById("consultarProdutoVencidoLista");

        consultarProdutoVencidoLista.addEventListener("click", function () {
            if (codProdutoVencido.value !== "") {
                // result.classList.add("");
                result.style.display = "block";
            } else {
                result.style.display = "none";
                // result.classList.remove("");
            }
        });
    });




    emitirNotaFiscalBtn.addEventListener("click", function () {
        formConsulProdutoLista.classList.add("desaparecer");
        formConsulProdutoLista.classList.remove("aparecer");

        formRemoveProdutoLista.classList.add("desaparecer");
        formRemoveProdutoLista.classList.remove("aparecer");

        formConsulProdutoVencidosLista.classList.add("desaparecer");
        formConsulProdutoVencidosLista.classList.remove("aparecer");

        formInsertProdutoLista.classList.add("desaparecer");
        formInsertProdutoLista.classList.remove("aparecer");

        formEmitirNotaFiscal.classList.remove("desaparecer");
        formEmitirNotaFiscal.classList.add("aparecer");

        selectProdCompraBtn.classList.remove("btn-acionado");
        insertProdCompraBtn.classList.remove("btn-acionado");
        deleteProdCompraBtn.classList.remove("btn-acionado");
        selectProdVencidosBtn.classList.remove("btn-acionado");
        emitirNotaFiscalBtn.classList.add("btn-acionado");
    });

}




/* 2 - Gerenciar Produto */
const iconGerProd = document.getElementById("iconGerProd"); // ícone na área de trabalho
const gerProd = document.getElementById("gerProd"); // article do gerenciar produto

// buttons
const insertProdBtn = document.getElementById("insertProd");
const updateProdBtn = document.getElementById("updateProd");
const deleteProdBtn = document.getElementById("deleteProd");
const selectProdBtn = document.getElementById("selectProd");
const baixaEstoqueBtn = document.getElementById("baixaEstoque");

// forms
const formCadProduto = document.getElementById("formCadProduto"); // form do cadastro de produto
const formAtuaProduto = document.getElementById("formAtuaProduto"); // form da atualização de produto
const formRemoveProduto = document.getElementById("formRemoveProduto"); // form da atualização de produto
const formConsulProduto = document.getElementById("formConsulProduto"); // form da atualização de produto
const formExecutarBaixaEmProduto = document.getElementById("formExecutarBaixaEmProduto"); // form de executar baixa em estoque manualmente
/* */

function crudGerProd() {
    insertProdBtn.classList.add("btn-acionado");
    formCadProduto.classList.add("aparecer");

    formAtuaProduto.classList.add("desaparecer");
    formRemoveProduto.classList.add("desaparecer");
    formConsulProduto.classList.add("desaparecer");
    formExecutarBaixaEmProduto.classList.add("desaparecer");

    insertProdBtn.addEventListener("click", function () {
        formAtuaProduto.classList.add("desaparecer");
        formAtuaProduto.classList.remove("aparecer");

        formRemoveProduto.classList.add("desaparecer");
        formRemoveProduto.classList.remove("aparecer");

        formConsulProduto.classList.add("desaparecer");
        formConsulProduto.classList.remove("aparecer");

        formExecutarBaixaEmProduto.classList.add("desaparecer");
        formExecutarBaixaEmProduto.classList.remove("aparecer");

        formCadProduto.classList.remove("desaparecer");
        formCadProduto.classList.add("aparecer");

        insertProdBtn.classList.add("btn-acionado");
        updateProdBtn.classList.remove("btn-acionado");
        deleteProdBtn.classList.remove("btn-acionado");
        selectProdBtn.classList.remove("btn-acionado");
        baixaEstoqueBtn.classList.remove("btn-acionado");
    });

    updateProdBtn.addEventListener("click", function () {
        formCadProduto.classList.add("desaparecer");
        formCadProduto.classList.remove("aparecer");

        formRemoveProduto.classList.add("desaparecer");
        formRemoveProduto.classList.remove("aparecer");

        formConsulProduto.classList.add("desaparecer");
        formConsulProduto.classList.remove("aparecer");

        formExecutarBaixaEmProduto.classList.add("desaparecer");
        formExecutarBaixaEmProduto.classList.remove("aparecer");

        formAtuaProduto.classList.remove("desaparecer");
        formAtuaProduto.classList.add("aparecer");

        insertProdBtn.classList.remove("btn-acionado");
        updateProdBtn.classList.add("btn-acionado");
        deleteProdBtn.classList.remove("btn-acionado");
        selectProdBtn.classList.remove("btn-acionado");
        baixaEstoqueBtn.classList.remove("btn-acionado");
    });

    deleteProdBtn.addEventListener("click", function () {
        formCadProduto.classList.add("desaparecer");
        formCadProduto.classList.remove("aparecer");

        formConsulProduto.classList.add("desaparecer");
        formConsulProduto.classList.remove("aparecer");

        formAtuaProduto.classList.add("desaparecer");
        formAtuaProduto.classList.remove("aparecer");

        formExecutarBaixaEmProduto.classList.add("desaparecer");
        formExecutarBaixaEmProduto.classList.remove("aparecer");

        formRemoveProduto.classList.remove("desaparecer");
        formRemoveProduto.classList.add("aparecer");

        insertProdBtn.classList.remove("btn-acionado");
        updateProdBtn.classList.remove("btn-acionado");
        deleteProdBtn.classList.add("btn-acionado");
        selectProdBtn.classList.remove("btn-acionado");
        baixaEstoqueBtn.classList.remove("btn-acionado");
    });

    selectProdBtn.addEventListener("click", function () {
        formCadProduto.classList.add("desaparecer");
        formCadProduto.classList.remove("aparecer");

        formRemoveProduto.classList.add("desaparecer");
        formRemoveProduto.classList.remove("aparecer");

        formAtuaProduto.classList.add("desaparecer");
        formAtuaProduto.classList.remove("aparecer");

        formExecutarBaixaEmProduto.classList.add("desaparecer");
        formExecutarBaixaEmProduto.classList.remove("aparecer");

        formConsulProduto.classList.remove("desaparecer");
        formConsulProduto.classList.add("aparecer");

        insertProdBtn.classList.remove("btn-acionado");
        updateProdBtn.classList.remove("btn-acionado");
        deleteProdBtn.classList.remove("btn-acionado");
        selectProdBtn.classList.add("btn-acionado");
        baixaEstoqueBtn.classList.remove("btn-acionado");
    });

    baixaEstoqueBtn.addEventListener("click", function () {
        formCadProduto.classList.add("desaparecer");
        formCadProduto.classList.remove("aparecer");

        formRemoveProduto.classList.add("desaparecer");
        formRemoveProduto.classList.remove("aparecer");

        formAtuaProduto.classList.add("desaparecer");
        formAtuaProduto.classList.remove("aparecer");

        formConsulProduto.classList.add("desaparecer");
        formConsulProduto.classList.remove("aparecer");

        formExecutarBaixaEmProduto.classList.remove("desaparecer");
        formExecutarBaixaEmProduto.classList.add("aparecer");

        insertProdBtn.classList.remove("btn-acionado");
        updateProdBtn.classList.remove("btn-acionado");
        deleteProdBtn.classList.remove("btn-acionado");
        selectProdBtn.classList.remove("btn-acionado");
        baixaEstoqueBtn.classList.add("btn-acionado");
    });
}


/* 3 - Gerenciar Funcionário */
const iconGerFunc = document.getElementById("iconGerFunc"); // ícone na área de trabalho
const gerFunc = document.getElementById("gerFunc"); // article do gerenciar funcionários

// buttons
const insertFuncBtn = document.getElementById("insertFunc");
const updateFuncBtn = document.getElementById("updateFunc");
const deleteFuncBtn = document.getElementById("deleteFunc");
const selectFuncBtn = document.getElementById("selectFunc");

// forms
const formCadFuncionario = document.getElementById("formCadFuncionario"); // form do cadastro de Funcionario
const formAtuaFuncionario = document.getElementById("formAtuaFuncionario"); // form da atualização de Funcionario
const formRemoveFuncionario = document.getElementById("formRemoveFuncionario"); // form da atualização de Funcionario
const formConsulFuncionario = document.getElementById("formConsulFuncionario"); // form da atualização de Funcionario
/* */

function crudGerFunc() {
    insertFuncBtn.classList.add("btn-acionado");
    formCadFuncionario.classList.add("aparecer");

    formAtuaFuncionario.classList.add("desaparecer");
    formRemoveFuncionario.classList.add("desaparecer");
    formConsulFuncionario.classList.add("desaparecer");

    insertFuncBtn.addEventListener("click", function () {
        formAtuaFuncionario.classList.add("desaparecer");
        formAtuaFuncionario.classList.remove("aparecer");

        formRemoveFuncionario.classList.add("desaparecer");
        formRemoveFuncionario.classList.remove("aparecer");

        formConsulFuncionario.classList.add("desaparecer");
        formConsulFuncionario.classList.remove("aparecer");

        formCadFuncionario.classList.remove("desaparecer");
        formCadFuncionario.classList.add("aparecer");

        insertFuncBtn.classList.add("btn-acionado");
        updateFuncBtn.classList.remove("btn-acionado");
        deleteFuncBtn.classList.remove("btn-acionado");
        selectFuncBtn.classList.remove("btn-acionado");
    });

    updateFuncBtn.addEventListener("click", function () {
        formCadFuncionario.classList.add("desaparecer");
        formCadFuncionario.classList.remove("aparecer");

        formRemoveFuncionario.classList.add("desaparecer");
        formRemoveFuncionario.classList.remove("aparecer");

        formConsulFuncionario.classList.add("desaparecer");
        formConsulFuncionario.classList.remove("aparecer");

        formAtuaFuncionario.classList.remove("desaparecer");
        formAtuaFuncionario.classList.add("aparecer");

        insertFuncBtn.classList.remove("btn-acionado");
        updateFuncBtn.classList.add("btn-acionado");
        deleteFuncBtn.classList.remove("btn-acionado");
        selectFuncBtn.classList.remove("btn-acionado");
    });

    deleteFuncBtn.addEventListener("click", function () {
        formCadFuncionario.classList.add("desaparecer");
        formCadFuncionario.classList.remove("aparecer");

        formConsulFuncionario.classList.add("desaparecer");
        formConsulFuncionario.classList.remove("aparecer");

        formAtuaFuncionario.classList.add("desaparecer");
        formAtuaFuncionario.classList.remove("aparecer");

        formRemoveFuncionario.classList.remove("desaparecer");
        formRemoveFuncionario.classList.add("aparecer");

        insertFuncBtn.classList.remove("btn-acionado");
        updateFuncBtn.classList.remove("btn-acionado");
        deleteFuncBtn.classList.add("btn-acionado");
        selectFuncBtn.classList.remove("btn-acionado");
    });

    selectFuncBtn.addEventListener("click", function () {
        formCadFuncionario.classList.add("desaparecer");
        formCadFuncionario.classList.remove("aparecer");

        formRemoveFuncionario.classList.add("desaparecer");
        formRemoveFuncionario.classList.remove("aparecer");

        formAtuaFuncionario.classList.add("desaparecer");
        formAtuaFuncionario.classList.remove("aparecer");

        formConsulFuncionario.classList.remove("desaparecer");
        formConsulFuncionario.classList.add("aparecer");

        insertFuncBtn.classList.remove("btn-acionado");
        updateFuncBtn.classList.remove("btn-acionado");
        deleteFuncBtn.classList.remove("btn-acionado");
        selectFuncBtn.classList.add("btn-acionado");
    });
}


/* 4 - Gerenciar Clientes */
const iconGerClientes = document.getElementById("iconGerClientes"); // ícone na área de trabalho
const gerClie = document.getElementById("gerClie"); // article do gerenciar clientes

// buttons
const insertClieBtn = document.getElementById("insertClie");
const updateClieBtn = document.getElementById("updateClie");
const deleteClieBtn = document.getElementById("deleteClie");
const selectClieBtn = document.getElementById("selectClie");

// forms
const formCadCliente = document.getElementById("formCadCliente"); // form do cadastro de Cliente
const formAtuaCliente = document.getElementById("formAtuaCliente"); // form da atualização de Cliente
const formRemoveCliente = document.getElementById("formRemoveCliente"); // form da atualização de Cliente
const formConsulCliente = document.getElementById("formConsulCliente"); // form da atualização de Cliente
/* */

function crudGerClie() {
    insertClieBtn.classList.add("btn-acionado");
    formCadCliente.classList.add("aparecer");

    formAtuaCliente.classList.add("desaparecer");
    formRemoveCliente.classList.add("desaparecer");
    formConsulCliente.classList.add("desaparecer");

    insertClieBtn.addEventListener("click", function () {
        formAtuaCliente.classList.add("desaparecer");
        formAtuaCliente.classList.remove("aparecer");

        formRemoveCliente.classList.add("desaparecer");
        formRemoveCliente.classList.remove("aparecer");

        formConsulCliente.classList.add("desaparecer");
        formConsulCliente.classList.remove("aparecer");

        formCadCliente.classList.remove("desaparecer");
        formCadCliente.classList.add("aparecer");

        insertClieBtn.classList.add("btn-acionado");
        updateClieBtn.classList.remove("btn-acionado");
        deleteClieBtn.classList.remove("btn-acionado");
        selectClieBtn.classList.remove("btn-acionado");
    });

    updateClieBtn.addEventListener("click", function () {
        formCadCliente.classList.add("desaparecer");
        formCadCliente.classList.remove("aparecer");

        formRemoveCliente.classList.add("desaparecer");
        formRemoveCliente.classList.remove("aparecer");

        formConsulCliente.classList.add("desaparecer");
        formConsulCliente.classList.remove("aparecer");

        formAtuaCliente.classList.remove("desaparecer");
        formAtuaCliente.classList.add("aparecer");

        insertClieBtn.classList.remove("btn-acionado");
        updateClieBtn.classList.add("btn-acionado");
        deleteClieBtn.classList.remove("btn-acionado");
        selectClieBtn.classList.remove("btn-acionado");
    });

    deleteClieBtn.addEventListener("click", function () {
        formCadCliente.classList.add("desaparecer");
        formCadCliente.classList.remove("aparecer");

        formConsulCliente.classList.add("desaparecer");
        formConsulCliente.classList.remove("aparecer");

        formAtuaCliente.classList.add("desaparecer");
        formAtuaCliente.classList.remove("aparecer");

        formRemoveCliente.classList.remove("desaparecer");
        formRemoveCliente.classList.add("aparecer");

        insertClieBtn.classList.remove("btn-acionado");
        updateClieBtn.classList.remove("btn-acionado");
        deleteClieBtn.classList.add("btn-acionado");
        selectClieBtn.classList.remove("btn-acionado");
    });

    selectClieBtn.addEventListener("click", function () {
        formCadCliente.classList.add("desaparecer");
        formCadCliente.classList.remove("aparecer");

        formRemoveCliente.classList.add("desaparecer");
        formRemoveCliente.classList.remove("aparecer");

        formAtuaCliente.classList.add("desaparecer");
        formAtuaCliente.classList.remove("aparecer");

        formConsulCliente.classList.remove("desaparecer");
        formConsulCliente.classList.add("aparecer");

        insertClieBtn.classList.remove("btn-acionado");
        updateClieBtn.classList.remove("btn-acionado");
        deleteClieBtn.classList.remove("btn-acionado");
        selectClieBtn.classList.add("btn-acionado");
    });
}






/* 5 - Emissão de Relatórios */
const iconEmitirRelat = document.getElementById("iconEmitirRelat"); // ícone na área de trabalho
const emitRelat = document.getElementById("emitRelat"); // article do emitir relatórios

// buttons
const emitRelatVendasBtn = document.getElementById("emitRelatVendas");
const emitRelatProdMaisVendidosBtn = document.getElementById("emitRelatProdMaisVendidos");
const emitRelatProdEmFaltaBtn = document.getElementById("emitRelatProdEmFalta");
const emitRelatProdSemVendaBtn = document.getElementById("emitRelatProdSemVenda");
const emitRelatProdVencidosBtn = document.getElementById("emitRelatProdVencidos");

// forms
const formRelatVendas = document.getElementById("formRelatVendas"); // form de emitir relatório de vendas
const formRelatProdMaisVendidos = document.getElementById("formRelatProdMaisVendidos"); // form de emitir relatório de produtos mais vendidos
const formRelatProdEmFalta = document.getElementById("formRelatProdEmFalta"); // form de emitir relatório de produtos em falta
const formRelatProdSemVenda = document.getElementById("formRelatProdSemVenda"); // form de emitir relatório de sem venda
const formRelatProdVencidos = document.getElementById("formRelatProdVencidos"); // form de emitir relatório de produto vencidos
/* */

function emitirRelatProd() {
    emitRelatVendasBtn.classList.add("btn-acionado");
    formRelatVendas.classList.add("aparecer");

    formRelatProdMaisVendidos.classList.add("desaparecer");
    formRelatProdEmFalta.classList.add("desaparecer");
    formRelatProdSemVenda.classList.add("desaparecer");
    formRelatProdVencidos.classList.add("desaparecer");

    emitRelatVendasBtn.addEventListener("click", function () {
        formRelatProdMaisVendidos.classList.add("desaparecer");
        formRelatProdMaisVendidos.classList.remove("aparecer");

        formRelatProdEmFalta.classList.add("desaparecer");
        formRelatProdEmFalta.classList.remove("aparecer");

        formRelatProdSemVenda.classList.add("desaparecer");
        formRelatProdSemVenda.classList.remove("aparecer");

        formRelatProdVencidos.classList.add("desaparecer");
        formRelatProdVencidos.classList.remove("aparecer");

        formRelatVendas.classList.remove("desaparecer");
        formRelatVendas.classList.add("aparecer");

        emitRelatVendasBtn.classList.add("btn-acionado");
        emitRelatProdMaisVendidosBtn.classList.remove("btn-acionado");
        emitRelatProdEmFaltaBtn.classList.remove("btn-acionado");
        emitRelatProdSemVendaBtn.classList.remove("btn-acionado");
        emitRelatProdVencidosBtn.classList.remove("btn-acionado");
    });

    emitRelatProdMaisVendidosBtn.addEventListener("click", function () {
        formRelatProdEmFalta.classList.add("desaparecer");
        formRelatProdEmFalta.classList.remove("aparecer");

        formRelatProdSemVenda.classList.add("desaparecer");
        formRelatProdSemVenda.classList.remove("aparecer");

        formRelatProdVencidos.classList.add("desaparecer");
        formRelatProdVencidos.classList.remove("aparecer");

        formRelatVendas.classList.add("desaparecer");
        formRelatVendas.classList.remove("aparecer");

        formRelatProdMaisVendidos.classList.remove("desaparecer");
        formRelatProdMaisVendidos.classList.add("aparecer");

        emitRelatVendasBtn.classList.remove("btn-acionado");
        emitRelatProdMaisVendidosBtn.classList.add("btn-acionado");
        emitRelatProdEmFaltaBtn.classList.remove("btn-acionado");
        emitRelatProdSemVendaBtn.classList.remove("btn-acionado");
        emitRelatProdVencidosBtn.classList.remove("btn-acionado");
    });

    emitRelatProdEmFaltaBtn.addEventListener("click", function () {
        formRelatProdSemVenda.classList.add("desaparecer");
        formRelatProdSemVenda.classList.remove("aparecer");

        formRelatProdVencidos.classList.add("desaparecer");
        formRelatProdVencidos.classList.remove("aparecer");

        formRelatVendas.classList.add("desaparecer");
        formRelatVendas.classList.remove("aparecer");

        formRelatProdMaisVendidos.classList.add("desaparecer");
        formRelatProdMaisVendidos.classList.remove("aparecer");

        formRelatProdEmFalta.classList.remove("desaparecer");
        formRelatProdEmFalta.classList.add("aparecer");

        emitRelatVendasBtn.classList.remove("btn-acionado");
        emitRelatProdMaisVendidosBtn.classList.remove("btn-acionado");
        emitRelatProdEmFaltaBtn.classList.add("btn-acionado");
        emitRelatProdSemVendaBtn.classList.remove("btn-acionado");
        emitRelatProdVencidosBtn.classList.remove("btn-acionado");
    });

    emitRelatProdSemVendaBtn.addEventListener("click", function () {
        formRelatProdVencidos.classList.add("desaparecer");
        formRelatProdVencidos.classList.remove("aparecer");

        formRelatVendas.classList.add("desaparecer");
        formRelatVendas.classList.remove("aparecer");

        formRelatProdMaisVendidos.classList.add("desaparecer");
        formRelatProdMaisVendidos.classList.remove("aparecer");

        formRelatProdEmFalta.classList.add("desaparecer");
        formRelatProdEmFalta.classList.remove("aparecer");

        formRelatProdSemVenda.classList.remove("desaparecer");
        formRelatProdSemVenda.classList.add("aparecer");

        emitRelatVendasBtn.classList.remove("btn-acionado");
        emitRelatProdMaisVendidosBtn.classList.remove("btn-acionado");
        emitRelatProdEmFaltaBtn.classList.remove("btn-acionado");
        emitRelatProdSemVendaBtn.classList.add("btn-acionado");
        emitRelatProdVencidosBtn.classList.remove("btn-acionado");
    });

    emitRelatProdVencidosBtn.addEventListener("click", function () {
        formRelatProdSemVenda.classList.add("desaparecer");
        formRelatProdSemVenda.classList.remove("aparecer");

        formRelatVendas.classList.add("desaparecer");
        formRelatVendas.classList.remove("aparecer");

        formRelatProdMaisVendidos.classList.add("desaparecer");
        formRelatProdMaisVendidos.classList.remove("aparecer");

        formRelatProdEmFalta.classList.add("desaparecer");
        formRelatProdEmFalta.classList.remove("aparecer");

        formRelatProdVencidos.classList.remove("desaparecer");
        formRelatProdVencidos.classList.add("aparecer");

        emitRelatVendasBtn.classList.remove("btn-acionado");
        emitRelatProdMaisVendidosBtn.classList.remove("btn-acionado");
        emitRelatProdEmFaltaBtn.classList.remove("btn-acionado");
        emitRelatProdSemVendaBtn.classList.remove("btn-acionado");
        emitRelatProdVencidosBtn.classList.add("btn-acionado");
    });
}






document.addEventListener("DOMContentLoaded", function () {
    // iconGerProd.addEventListener("click", function () {
    //     if (isAberto == false) {
    //         gerProd.classList.add("aparecer");    
    //         isAberto = true;
    //     } else {
    //         gerProd.classList.remove("aparecer");    
    //         isAberto = false;
    //     }
    // });

    // iconGerFunc.addEventListener("click", function () {
    //     if (isAberto == false) {
    //         gerFunc.classList.add("aparecer");    
    //         isAberto = true;
    //     } else {
    //         gerFunc.classList.remove("aparecer");    
    //         isAberto = false;
    //     }
    // });

    clickIcon();
    closeBtn.forEach(btn => {
        btn.addEventListener("click", closeContainer);
    });
    // closeBtn.addEventListener("click", closeContainer);

    realizarCompraFunc();
    crudGerProd();
    crudGerFunc();
    crudGerClie();
    emitirRelatProd();
});


// let btnsWallpaper = document.querySelectorAll(".btn-wallpaper");
const wp1 = document.getElementById("wp1");
const wp2 = document.getElementById("wp2");
const wp3 = document.getElementById("wp3");
const wp4 = document.getElementById("wp4");
const wp5 = document.getElementById("wp5");

wp1.addEventListener("click", function () {
    document.body.classList.remove("wp2");
    document.body.classList.remove("wp3");
    document.body.classList.remove("wp4");
    document.body.classList.remove("wp5");

    document.body.classList.add("wp1");
});

wp2.addEventListener("click", function () {
    document.body.classList.remove("wp1");
    document.body.classList.remove("wp3");
    document.body.classList.remove("wp4");
    document.body.classList.remove("wp5");

    document.body.classList.add("wp2");
});

wp3.addEventListener("click", function () {
    document.body.classList.remove("wp1");
    document.body.classList.remove("wp2");
    document.body.classList.remove("wp4");
    document.body.classList.remove("wp5");

    document.body.classList.add("wp3");
});

wp4.addEventListener("click", function () {
    document.body.classList.remove("wp1");
    document.body.classList.remove("wp2");
    document.body.classList.remove("wp3");
    document.body.classList.remove("wp5");

    document.body.classList.add("wp4");
});

wp5.addEventListener("click", function () {
    document.body.classList.remove("wp1");
    document.body.classList.remove("wp2");
    document.body.classList.remove("wp3");
    document.body.classList.remove("wp4");

    document.body.classList.add("wp5");
});

// btnsWallpaper.forEach(wallpaperBtn => {
//     wallpaperBtn.addEventListener("click", function () {
        
//     });

//     // if(wallpaperBtn[0]) {
//     //     console.log(wallpaperBtn[0]);
//     // }
// });

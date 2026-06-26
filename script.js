let totalTarefas = 0;


// ADICIONAR TAREFA

function adicionarTarefa() {

    let input = document.getElementById("inputTarefa");

    let texto = input.value.trim();

    if (texto === "") {

        alert("Digite uma tarefa!");
        return;
    }

    let item = document.createElement("li");

    item.textContent = texto;


    // RISCAR TAREFA

    item.addEventListener("click", function () {

        item.classList.toggle("concluida");

    });


    document
        .getElementById("listaTarefas")
        .appendChild(item);


    totalTarefas++;

    atualizarContador();

    input.value = "";

    input.focus();
}



// LIMPAR TAREFAS

function limparTarefas() {

    document.getElementById("listaTarefas").innerHTML = "";

    totalTarefas = 0;

    atualizarContador();

}



// CONTADOR

function atualizarContador() {

    document.getElementById("contador").textContent =
        "Total de tarefas: " + totalTarefas;

}



// TROCAR DE TELA

function mostrarTela(idTela) {

    let telas = document.querySelectorAll(".tela");

    telas.forEach(function (tela) {

        tela.classList.remove("ativa");

    });

    document
        .getElementById(idTela)
        .classList.add("ativa");

}



// ALTERAR TEMA

function alterarTema() {

    let tema = document.getElementById("tema").value;

    if (tema === "escuro") {

        document.body.classList.add("escuro");

        localStorage.setItem("tema", "escuro");

    } else {

        document.body.classList.remove("escuro");

        localStorage.setItem("tema", "claro");

    }

}



// CARREGAR TEMA

window.onload = function () {

    let temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {

        document.body.classList.add("escuro");

        document.getElementById("tema").value = "escuro";

    }

};

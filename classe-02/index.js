const senha = document.querySelector("#senha");
const repitirSenha = document.querySelector("#repitir-senha");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    if (senha.value !== repitirSenha.value) {
        event.preventDefault();
    }
})


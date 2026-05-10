const confirm_button = document.getElementById("confirm");
const ocultar = document.getElementById("icon_eye");
const user_id = document.getElementById("user_id");
const input_password = document.getElementById("user_password");
const button_register_page = document.getElementById("register_button_page");

button_register_page.addEventListener('click', function() {
    window.location.href = "../Cadastro/Register.html";
});
ocultar.addEventListener('click', function OcultarSenha() {
    if (input_password.type === "password") {
        input_password.type = "text"
        ocultar.src = "Assets/Images/olho.png"
    } else {
        input_password.type = "password"
        ocultar.src = "Assets/Images/olho_ocult.png"
    }
});
confirm_button.addEventListener('click', function validacao() {
    if (user_id.value.length > 8 || user_id.value.trim() === '' || user_id.value < 0) {
        event.preventDefault();
        notify("(Identificador inválido) Não pode ser vazio ou negativo")
        return
    }
    else if (input_password.value.trim() === '') {
        event.preventDefault();
        notify("A senha não pode ser vazio!")
        return
    }
    else {
        notify(`Validação realizada com sucesso!`)
    }
});

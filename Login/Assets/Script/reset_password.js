const confirm_button = document.getElementById("confirm");
const ocultar2 = document.getElementById("icon_eye2");
const ocultar3 = document.getElementById("icon_eye3");
const new_password = document.getElementById("New_password");
const new_password_confirm = document.getElementById("New_password_Confirm");
const regex_Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


ocultar2.addEventListener("click", function () {
    if (new_password.type === "password") {
        new_password.type = "text";
        ocultar2.src = "Assets/Images/olho.png";
    } else {
        new_password.type = "password";
        ocultar2.src = "Assets/Images/olho_ocult.png";
    }
});

ocultar3.addEventListener("click", function () {
    if (new_password_confirm.type === "password") {
        new_password_confirm.type = "text";
        ocultar3.src = "Assets/Images/olho.png";
    } else {
        new_password_confirm.type = "password";
        ocultar3.src = "Assets/Images/olho_ocult.png";
    }
});

confirm_button.addEventListener("click", function(){
    const passwordValue = new_password.value;
    const confirmPasswordValue = new_password_confirm.value;
    if (regex_Password.test(passwordValue) === false) {
        event.preventDefault();
        notify("A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
        return;
    }
    if (passwordValue.trim() === "" || confirmPasswordValue.trim() === "") {
        event.preventDefault();
        notify("Por favor, preencha todos os campos!");
        return;
    }
    if (passwordValue === confirmPasswordValue) {
        event.preventDefault();
        notify("Senhas coincidem!");
        window.location.href = "login.html";
    } else {
        event.preventDefault();
        notify("Senhas não coincidem!");
        return;
    }
});
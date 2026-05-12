const name = document.getElementById('name');
const email = document.getElementById('user_email');
const phone = document.getElementById('user_phone');
const password = document.getElementById('password');
const registerButton = document.getElementById('button_register');
const iconEye = document.getElementById('icon_eye');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10,11}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const endereco = document.getElementById('user_address');

iconEye.addEventListener('click', function togglePassword() {
    if (password.type === "password") {
        password.type = "text";
        iconEye.src = "Assets/images/olho.png";
    } else {
        password.type = "password";
        iconEye.src = "Assets/images/olho_ocult.png";
    }
});

registerButton.addEventListener('click',function () {
    event.preventDefault();
    if (name.value.trim() === '' || email.value.trim() === '' || phone.value.trim() === '' || password.value.trim() === '' || endereco.value.trim() === '') {
        event.preventDefault();
        notify("Preencha todos os campos para se cadastrar.");
    }
    else if (!emailRegex.test(email.value)) {
        event.preventDefault();
        notify("Por favor, insira um endereço de email válido.");
    }
    else if (!phoneRegex.test(phone.value)) {
        event.preventDefault();
        notify("Por favor, insira um número de telefone válido (10 ou 11 dígitos).");
    }
    else if (!passwordRegex.test(password.value)) {
        event.preventDefault();
        notify("Por favor, insira uma senha válida (8 a 16 caracteres, com letras e números).");
    }
        else {
            notify("Cadastro realizado com sucesso!");
    }

})
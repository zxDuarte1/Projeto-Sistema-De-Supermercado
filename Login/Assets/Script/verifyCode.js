const user_code = document.getElementById("user_code");
const confirmCodeButton = document.getElementById("confirm_cod");
const email = localStorage.getItem('user_email');
const email_display = document.getElementById("email_display");
const resendCodeButton = document.getElementById("resend_code");

resendCodeButton.addEventListener('click', function() {
    notify(`Código reenviado para: ${email}`);
    resendCodeButton.disabled = true;
    setTimeout(function() {
        resendCodeButton.disabled = false;
    }, 30000);
    resendCodeButton.style.backgroundColor = "rgba(145, 5, 5, 0.46)"
});
email_display.textContent = `Código enviado para: ${email}`;

confirmCodeButton.addEventListener('click', function () {
    event.preventDefault();
    if (user_code.value.length == 0 || user_code.value.length > 5) {
        notify("Código inválido")
    }
    else {
        notify("Código válido!")
        window.location.href = "reset_password.html";
    }
});

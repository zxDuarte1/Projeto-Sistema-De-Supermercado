const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const sendCodeButton = document.getElementById("send_code");
const user_email = document.getElementById("user_email");

sendCodeButton.addEventListener('click', function() {
    event.preventDefault();
    if (!email_regex.test(user_email.value) || user_email.value.trim() === '') {
        event.preventDefault();
        notify("(Email inválido) Tente novamente!")
        return
    } 
    localStorage.setItem('user_email', user_email.value);
    window.location.href = "verifyCode.html";
});

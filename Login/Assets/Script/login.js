function OcultarSenha() {
    
    const input = document.getElementById("user_password");
    const button = document.getElementById("icon_eye");

    if (input.type === "password") {
        input.type = "text"
        button.src = "Assets/images/olho.png" 
    } else {
        input.type = "password"
        button.src = "Assets/images/olho_ocult.png" 
    }
}
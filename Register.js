<!DOCTYPE html>
<html lang="Pt-Br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperação de senha</title>
    <link rel="stylesheet" href="login_assets/Css/login_style.css">
    <link rel="stylesheet" href="login_assets/Css/loading_screen.css">
    <link rel="stylesheet" href="login_assets/Css/notification.css">
</head>

<body>
    <div id="loading-screen">
        <div class="loader"></div>
    </div>
    <h1>Sistema de Supermercado - PDV</h1>

    <div id="user_login">
        <form>
            <h2>Recuperar senha</h2>
            <p>Email:</p>
            <input class="user_input" type="text" name="user_email" id="user_email" maxlength="50">
            <a href="login.php" id="forgot_password">Lembrou da senha?</a>
            <button class="confirm_button" type="submit" id="send_code">Enviar Código</button>
        </form>
    </div>
    <script src="login_assets/Script/forgot_password.js"></script>
    <script src="login_assets/Script/loading_screen.js"></script>
    <script src="login_assets/Script/notification.js"></script>
</body>

</html>
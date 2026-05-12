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

        <h2>Recuperar senha</h2>
        <p id="email_display"></p>
        <p>Código:</p>

        <div class="code-container">
        <input class="user_input" type="tel" name="user_code" id="user_code" required maxlength="5">
        <button type="button" id="resend_code">Reenviar Código</button>
        </div>

        <button class="confirm_button" type="submit" id="confirm_cod">Confirmar Código</button>

    </div>


    <script src="login_assets/Script/verifyCode.js"></script>
    <script src="login_assets/Script/loading_screen.js"></script>
    <script src="login_assets/Script/notification.js"></script>
</body>

</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/manage.css" type="text/css" />
    <title>Bem vindo</title>
</head>
<body>
    <main class="main-content">
        <section class="main-left-content">
            <h1>Bem vindo, <?php echo $_GET['user']; ?> </h1>
            <div class="main-left-group-btn">
                <button type="button" class="main-left-button cadastrar">Cadastrar</button>
                <button type="button" class="main-left-button visualizar">Visualizar</button>
            </div>
        </section>
        <section class="main-right-content">
            <div id="root">teste</div>
        </section>
    </main>
    <script src="./js/manage.js"></script>
</body>
</html>
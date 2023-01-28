<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/app.css">
    <title>Books</title>
</head>
<body>
    <div class="filter_panel">
        <input type="text" placeholder="ID записи" class="id_input" id="search_id">
        <button class="search" onclick="search()">Найти</button>
        <button class="search" onclick="reset()">Вернуть</button>

    </div>
    <div class="panel">
        <div class="add">
            <input type="text" class="record_name" id="name" placeholder="Введите ФИО автора">
            <input type="text" class="record_name" id="book" placeholder="Введите название книги">
            <button class="save" onclick="save()">Сохранить</button>
        </div>
    </div>

    <div class="content_title" id="title">
        <p class="title_text">ID</p>
        <p class="title_text">Author</p>
        <p class="title_text book_title">Book</p>
    </div>

    <div class="side_title" id="side_title">
        <p class="side_title_text">Author</p>
        <p class="side_title_text">Books</p>
    </div>

    <script type="text/javascript" src="/js/app.js"></script>
</body>
</html>
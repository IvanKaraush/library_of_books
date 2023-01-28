Это тестовое задание я сделал примерно за 1,5-2 дня. Здесь я реализовал сущности авторы и книги, CRUD операции для авторов и книг. При запуске предлагается записать данные автор:книга в таблицу, после чего слева выводится список записей, которые имеются в БД на данный момент времени, а справа представлена таблица автор:кол-во книг.
Разумеется можно удалять и обновлять данные в записи используя соответствующие кнопки. Так же имеется поиск записи по ID.

Перед запуском перейти в директорию и выполнить:

```bash
composer i
```
После чего запустить сервер командой:
```bash
php artisan serve
```
Важно! переименовать .env.example в .env. База данных "library", все эти параметры можно поменять в .env (в этом же файле поменять DB_DATABASE=library)
После чего выполнить миграцию
```bash
php artisan migrate
```

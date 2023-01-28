const { default: axios } = require('axios');

require('./bootstrap');



function Get(update){
    
    axios.get('/api/v1/book/numb').then(response =>{

        let keys = Object.keys(response.data);
        let values = Object.values(response.data);
        for(let i = 0; i < keys.length; i++){
            if(!document.getElementById(`side_${i}`)){
                let side_title = document.getElementById('side_title');

                let div = document.createElement('div');
                div.classList = 'side_content';
                div.id = `side_${i}`;

                let author = document.createElement('p');
                author.innerHTML = keys[i];
                author.classList = 'side_author';

                let books = document.createElement('p');
                books.innerHTML = values[i];
                books.id = `books_${i}`;
                books.classList = 'side_books';

                div.appendChild(books);
                div.appendChild(author);
                side_title.appendChild(div);
            }else{ document.getElementById(`books_${i}`).innerHTML = values[i]; }
        }
    });

    axios.get('api/v1/books/list').then(response =>{
        if(response.data.length == 0){
            let div = document.createElement('div');
            let title = document.getElementById('title');

            div.classList = 'content';
            div.id = "empty";

            let empty = document.createElement('p');

            empty.innerHTML = 'База данных пуста';
            empty.classList = 'empty';

            div.appendChild(empty);
            title.appendChild(div);

        }else{
            if(document.getElementById('empty')) document.getElementById('empty').remove();
            for(i = 0; i < response.data.length; i++){
                let id = response.data[i]["id"];
                if(!document.getElementById(id)){
                    let title = document.getElementById('title');
                    
                    let div = document.createElement('div');
                    div.classList = 'content';
                    div.id = id;

                    let id_text = document.createElement('p');
                    id_text.classList = 'id';
                    id_text.innerHTML = i + 1;

                    let author = document.createElement('p');
                    author.innerHTML = response.data[i]["author"];
                    author.classList = 'author';
                    author.id = `author_${id}`;

                    let book = document.createElement('p');
                    book.innerHTML = response.data[i]["book"];
                    book.classList = 'book';
                    book.id = `book_${id}`;

                    let update = document.createElement('p');
                    update.innerHTML = '&#9998;';
                    update.classList = 'update';
                    update.onclick = () => {
                        let form = new FormData();
                        let auth_id = document.getElementById(`author_${id}`).innerHTML;
                        let book_id = document.getElementById(`book_${id}`).innerHTML;

                        let author = prompt("Имя автора (не обязательно)", auth_id);
                        let book = prompt("Название книги", book_id);
                        form.set('id', id);
                        if(author == auth_id){
                            form.set('book', book);
                            const options = {
                                method: "POST",
                                data: form
                            };
                            axios('api/v1/books/update', options).then(response => {
                                if(response.data["result"] == 200){
                                    alert("Данные обновлены");
                                    Get(true);
                                }
                            });
                        }else{

                            form.set('author', author);
                            form.set('book', book);

                            const options = {
                                method: "POST",
                                data: form
                            };
                            axios('api/v1/books/update', options).then(response => {
                                if(response.data["result"] == 200){
                                    alert("Данные обновлены");
                                    Get(true);
                                }
                            });
                        }
                    };

                    let del = document.createElement('p');
                    del.classList = 'delete';
                    del.innerHTML = '&#10060;';
                    del.onclick = () => {
                        const options = {
                            method: "DELETE",
                        }
                        axios(`api/v1/books/${id}`, options).then(response => {
                            if(response.data["result"] == "200"){
                                document.getElementById(id).remove();
                                alert('Запись удалена');
                                let content = document.getElementsByClassName('content');
                                for(let i = 0; i < content.length; i++){content[i].id = i + 1;}
                                window.location.reload();
                            }else alert(response.data["result"])
                        });
                        

                    };

                    div.appendChild(id_text);
                    div.appendChild(update);
                    div.appendChild(del);
                    div.appendChild(author);
                    div.appendChild(book);
                    title.appendChild(div);
                }else if(update){
                    update = false;
                    document.getElementById(id).remove();
                    Get(false);
                }
                
            }
        }
    });
    
}

reset = function(){
    let records = document.getElementsByClassName('id');
    for(let i = 0; i < records.length; i++){
        records[i].parentNode.style.display = 'block';
    }
}

search = function(){
    let id = document.getElementById('search_id').value;
    let records = document.getElementsByClassName('id');
    for(let i = 0; i < records.length; i++){
        if(records[i].innerHTML != id){records[i].parentNode.style.display = 'none';}
        else{records[i].parentNode.style.display = 'block';}
    }
}
save = function(){
    let name = document.getElementById('name').value;
    let book = document.getElementById('book').value;
    if(name == "" || book == "") alert('Введите данные');
    else{
        let form = new FormData();
        form.set('author', name);
        form.set('book', book);
        const options = {
            method: "POST",
            data: form
        };
        axios('api/v1/books/create', options).then(response =>{
            if(response.data["condition"] == "200") {
                alert('Данные сохранены');
                Get();
            }
            else alert(response.data["condition"]);
        });
    }
}
Get();
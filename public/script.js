console.log(document.querySelector('.signin'));
document.querySelector('.signin').addEventListener('click',function(){

    //получить данные из формы formData



    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/signup', false);// 2. Конфигурируем его: GET-запрос на URL '/signup'
    xhr.send(); // 3. Отсылаем запрос

// 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        alert( xhr.responseText ); // responseText -- текст ответа.
    }
})
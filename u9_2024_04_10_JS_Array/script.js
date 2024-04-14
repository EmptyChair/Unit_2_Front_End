console.log("========= Array ==========");
let arr = [ 1,2,3,"ddfs", NaN, "five"];
console.log(arr);
console.log(typeof arr);

//push меняет оригинальный массив, добавляет элемент(-ы) в конце массива
//и возвращает новую длину массива

console.log("========= Push (add 5,8,9, return length)=");
let res = arr.push(5,8,9);
console.log(res);
console.log(arr);

//pop меняет оригинальный массив, удаляя последний элемент
//и возвращает удалённый элемент

console.log("========= Pop (remove 9, return 9) ==========");
res = arr.pop();
console.log(res);
console.log(arr);

//shift меняет оригинальный массив, удаляя первый элемент
//и возвращает удалённый элемент

console.log("========= Shift (remove 1, return 1) ==========");
res = arr.shift();
console.log(res);
console.log(arr);

//unshift меняет оригинальный массив, добавляя элементы в начало массива
//и возвращает новую длину массива

console.log("========= Unshift (add 45,1,2,3) ==========");
res = arr.unshift(45,1,2,3);
console.log(res);
console.log(arr);

//concat concatinates two arrays
console.log('========= CONCAT ==========');
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
res = arr1.concat(arr2);
console.log(res); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6]

// slice Не изменяет оригинал, возвращает копию секции массива
// (индекс старта (входит в секцию), индекс финиша (не входит в секцию) )
console.log('========= SLICE ==========');
arr = [1, 2, 3, 'four', 'five'];
res = arr.slice(1, 4);

console.log(res);
console.log(arr);

// Изменяет оригинал, возвращает вырезанную секцию массива
// (индекс старта (входит в секцию), кол-во элементов, которые нужно удалить )
console.log('========= SPLICE ==========');
res = arr.splice(3, 1);

console.log(res);
console.log(arr);

// Поверхностным копированием (подходит только для чтения данных)
let arrCopy = arr1;
console.log(arr1);
console.log(arrCopy);

arr1[0] = 1000;
console.log(arr1);
console.log(arrCopy);

// Глубокое копирование
let arrTrueCopy = [...arr1];
console.log(arr1);
console.log(arrTrueCopy);

arr1[0] = 1;
console.log(arr1);
console.log(arrTrueCopy);

// Модальные окна:

// Уведомление
// alert('Переход на данную страницу возможен только зарегистрированным пользователям');

// Boolean в качестве ответа от пользователя
// let answer = confirm('Подтвердите, что Вам исполнилось 18 лет');
// console.log(answer);

// String в качестве ответа от пользователя
// answer = prompt('Введите Ваше имя');
// console.log(answer);


// Trim String
console.log('========= STRING -TRIM ==========');
const str = '     Beer or not to beer     ';
const str1 = str.trim();
console.log(str1);

// Split String Возвращает массив, элементы которого будут подстроки, разделённые сепаратором (разделитель)
console.log('========= STRING - SPLIT ==========');
res = str1.split(' ');
console.log(res);

// Join String Возвращает строку,  которого будет состоять из элементов массива, разделённые сепаратором (разделитель)
console.log('========= STRING -JOIN ==========');
let newRes = res.join(' ');
console.log(newRes);

// ctrl + / (creates 1-lin comment)
/* shift + alt + a  (creates multiple-line-comment)*/ 

console.log('========= LIBRARY ==========');
// HOMEWORK (Library)
const library = [];

/*
    1. ISBN (уникальный идентификатор книги);
    2. TITLE (название книги);
    3. AUTHOR (автор книги);
    4. Year (год издания)
    Example: '987654321;Крутой Маршрут;Е.С. Гинзбург;1955'
*/

let book_hp = {
    ISBN: '123456789',
    TITLE: 'Harry Potter and Philosophers Stone',
    AUTHOR: 'J. K. Rowling',
    YEAR: '1999'
};

let book_hp2 = {
    ISBN: '500056789',
    TITLE: 'Harry Potter 2',
    AUTHOR: 'J. K. Rowling',
    YEAR: '2000'
};

let book_hp3 = {
    ISBN: '557675656789',
    TITLE: 'Harry Potter 2',
    AUTHOR: 'J. K. Rowling',
    YEAR: '2000'
};

library.push(book_hp);
console.log(typeof(book_hp));
console.log(book_hp.ISBN)
console.log(book_hp.TITLE)
console.log(book_hp.AUTHOR)
console.log(book_hp.YEAR)
library.push(book_hp2);
library.push(book_hp3);
console.log(library);


function findIndexOfBook(isbn) {
    // TODO return index of this book or -1 if book not exist
    let new_isbn;
    for (i = 0; i<library.length; i++) {
        new_isbn = library[i].ISBN;
        if (isbn === new_isbn)
            return i;
    }
    return -1;
    
}

console.log("Find book with index 123456789");
console.log(findIndexOfBook("123456789"));
console.log("Find book with index 557675656789");
console.log(findIndexOfBook("557675656789"));
console.log("Find book with index 25");
console.log(findIndexOfBook("25"));
console.log(findIndexOfBook(""));

 /* 
        TODO реализовать добавление книги:
            1. Только с уникальным ISBN;
            2. Только с необходимым набором информации о книге
            продолжать пока esc или пустая строчка
    */


console.log('========= WORKING WITH LIBRARY ==========');
let inputDate = prompt('First, enter book data separate by ";"');

//inputDate = "55550000;mary;jane;1996";

while (inputDate) {
    
    //split inputDate into an array, with [0] as ISBN
    let input_array = inputDate.split(';'); 


    if (input_array.length!=4) {
        console.log("The amount of inputs is not correct");
        break;
    }
        
    //check if the book with same ISBN is present
    if (findIndexOfBook(input_array[0]) != -1) {
        console.log("There is already a book with this ISBN");
        break;
    }    

    let new_book = {
        ISBN: input_array[0],
        TITLE: input_array[1],
        AUTHOR: input_array[2],
        YEAR: input_array[3]
    };
    library.push(new_book);
    console.log("Another book added!");      
    
    inputDate = prompt('Please enter more book data separate by ";"');
}

console.log("Updated library is as follows");
console.log(library);
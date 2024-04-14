

console.log("________________Array________________");
let arr = [ 1,2,3,"ddfs", NaN, "five"];
console.log(arr);
console.log(typeof arr);

//push меняет оригинальный массив, добавляет элемент(-ы) в конце массива
//и возвращает новую длину массива

console.log("________________Push (add 5,8,9, return length)________________");
let res = arr.push(5,8,9);
console.log(res);
console.log(arr);

//pop меняет оригинальный массив, удаляя последний элемент
//и возвращает удалённый элемент

console.log("________________Pop (remove 9, return 9)________________");
res = arr.pop();
console.log(res);
console.log(arr);

//shift меняет оригинальный массив, удаляя первый элемент
//и возвращает удалённый элемент

console.log("________________Shift (remove 1, return 1)________________");
res = arr.shift();
console.log(res);
console.log(arr);

//unshift меняет оригинальный массив, добавляя элементы в начало массива
//и возвращает новую длину массива

console.log("________________Unshift (add 45,1,2,3) ________________");
res = arr.unshift(45,1,2,3);
console.log(res);
console.log(arr);

//concat concatinates
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


// String
console.log('========= STRING -TRIM ==========');
const str = '     Beer or not to beer     ';
const str1 = str.trim();
console.log(str1);

// Возвращает массив, элементы которого будут подстроки, разделённые сепаратором (разделитель)
console.log('========= STRING - SPLIT ==========');
res = str1.split(' ');
console.log(res);

// Возвращает строку,  которого будет состоять из элементов массива, разделённые сепаратором (разделитель)
console.log('========= STRING -JOIN ==========');
let newRes = res.join(' ');
console.log(newRes);


// HOMEWORK (Library)
const library = [
    {
        ISBN: '123456789',
        TITLE: 'Harry Potter',
        AUTHOR: 'J. K. Rowling',
        YEAR: '1999'
    }
]

let inputDate = prompt('Enter book data separate by ";"');
/*
    1. ISBN (уникальный идентификатор книги);
    2. TITLE (название книги);
    3. AUTHOR (автор книги);
    4. Year (год издания)
    Example: '987654321;Крутой Маршрут;Е.С. Гинзбург;1955'
*/

// ctrl + /
/* shift + alt + a */

while (inputDate) {
    /* 
        TODO реализовать добавление книги:
            1. Только с уникальным ISBN;
            2. Только с необходимым набором информации о книге
    */
    inputDate = prompt('Enter book data separate by ";"');
}

function findIndexOfBook(isbn) {
    // TODO return index of this book or -1 if book not exist
}

console.log(library);
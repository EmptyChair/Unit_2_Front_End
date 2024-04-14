

let arr = [1, 2, 3, "four", "five"];
console.log(arr);
console.log(typeof arr);

// Метод push() меняет исходный массив, добавляя элемент(-ы) в конце массива
// Возвращает новую длину массива
console.log("========= PUSH ==========");
let res = arr.push(6, 7, 8);
console.log(res); // 8
console.log(arr); // [1, 2, 3, 'four', 'five', 6, 7, 8]

// Метод pop() меняет исходный массив, удаляя элемент из конца массива
// Возвращает удалённый элемент
console.log("========= POP ==========");
res = arr.pop();
console.log(res); // 8
console.log(arr); // [1, 2, 3, 'four', 'five', 6, 7]

// Метод shift() меняет исходный массив, удаляя элемент из начала массива
// Возвращает удалённый элемент
console.log("========= SHIFT ==========");
res = arr.shift();
console.log(res); // 1
console.log(arr); // [2, 3, 'four', 'five', 6, 7]

// Метод unshift() меняет исходный массив, добавляя элементы в начало массива
// Возвращает новую длину массива
console.log("========= UNSHIFT ==========");
res = arr.unshift(0, 1);
console.log(res); // 8
console.log(arr); // [0, 1, 2, 3, 'four', 'five', 6, 7]

console.log("========= CONCAT ==========");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
res = arr1.concat(arr2);
console.log(res); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6]

// Не изменяет оригинал, возвращает копию секции массива
// (индекс старта (входит в секцию), индекс финиша (не входит в секцию) )
console.log("========= SLICE ==========");
arr = [1, 2, 3, "four", "five"];
res = arr.slice(1, 4);

console.log(res);
console.log(arr);

// Изменяет оригинал, возвращает вырезанную секцию массива
// (индекс старта (входит в секцию), кол-во элементов, которые нужно удалить )
console.log("========= SPLICE ==========");
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
const str = "     Beer or not to beer     ";
const str1 = str.trim();
console.log(str1);

// Возвращает массив, элементы которого будут подстроки, разделённые сепаратором (разделитель)
res = str1.split(" ");
console.log(res);

// Возвращает строку,  которого будет состоять из элементов массива, разделённые сепаратором (разделитель)
let newRes = res.join(" ");
console.log(newRes);

// HOMEWORK (Library)
const library = [
  {
    ISBN: "123456789",
    TITLE: "Harry Potter",
    AUTHOR: "J. K. Rowling",
    YEAR: "1997",
  },
];

let inputDate = prompt('Enter book data separate by ";"');
/*
    1. ISBN (уникальный идентификатор книги);
    2. TITLE (название книги);
    3. AUTHOR (автор книги);
    4. YEAR (год издания)
    Example: '987654321;Крутой Маршрут;Е.С. Гинзбург;1967'
*/

// ctrl + /
/* shift + alt + a */

while (inputDate) {
  /* 
        TODO реализовать добавление книги:
            1. Только с уникальным ISBN;
            2. Только с необходимым набором информации о книге
    */
  const bookData = inputDate.split(";"); // bookData - массив с информацией о книге
  // Деструктуризация (вместо массива сохраняем необходимые элементы данного массива)
  const [ISBN, TITLE, AUTHOR, YEAR] = inputDate.split(";");
  if (
    bookData.length === 4 &&
    ISBN &&
    TITLE &&
    AUTHOR &&
    YEAR &&
    findIndexOfBook(ISBN) === -1
  ) {
    // Если ключ и значение совпадают, то достаточно написать только ключ
    library.push({ ISBN, TITLE, AUTHOR, YEAR });
    alert("Книга " + TITLE + " успешно добавлена");
  } else {
    alert("Ошибка при добавлении книги");
  }
  inputDate = prompt('Enter book data separate by ";"');
}

function findIndexOfBook(isbn) {
  for (let i = 0; i < library.length; i++) {
    if (isbn === library[i].ISBN) {
      return i;
    }
  }
  return -1;
  // TODO return index of this book or -1 if book not exist
}

console.log(library);
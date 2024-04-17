## Front End
## 10. Functions

### Материал
* Function Declarations (Объявление функции):   
    - Объявление функции в JavaScript представляет собой блок кода, который можно вызывать при необходимости. 
    - EX: function greet(name) { console.log(Hello, ${name}!); }
    - EX: greet("John"); // Вызов функции 
* Anonymous Functions (Безымянные функции): 
    - Безымянные функции - это функции без имени, часто используемые как аргументы для других функций (колбэки). 
    - EX: let add = function(x, y) { return x + y; };
    - EX: let result = add(3, 5); // result равен 8 
*Arrow Functions (Стрелочные функции): 
    - Стрелочные функции представляют собой сокращенный синтаксис для объявления функций. Они обладают некоторыми особенностями, такими как сохранение контекста this. 
    - EX: let multiply = (a, b) => a * b;
    - EX: let square = x => x * x;
    - EX: let greet = () => console.log("Hello!");
* Шаблонные строки (Template Strings): 
    - Шаблонные строки предоставляют удобный способ вставки переменных и выражений в строки. 
    - EX: let name = "Alice"; let greeting = Hello, ${name}!; console.log(greeting); // "Hello, Alice!" 
    - В шаблонных строках можно использовать выражения, заключенные в ${}, что облегчает вставку значений переменных внутрь строки. Шаблонные строки предоставляют удобный синтаксис для работы со строками, включая вставку значений переменных.

### Примечания
* arrow functions are used more often than declared functions



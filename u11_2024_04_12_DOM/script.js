console.log(document.body); //ЧТО ЭТО?

// ссылка на элемент с #div1
const div1 = document.getElementById('div1'); // ссылка на элемент в HTML
//можно также по классу, аттрибуту итп.
// но мы хотим ссылку на конкретный элемент, не группу элементов
// если div1 не было бы, const div1 стал бы null

// настройка значения свойства border у элемента div1
div1.style.border = '1px solid black'; 
// выдать значение свойства border у элемента div1
console.log("Div1 border is "+div1.style.border); 

const div1Query = document.querySelector('#div1');
console.log("Divquery selects: "); // ссылка на элемент
console.log(div1Query);

const pDiv1 = document.querySelectorAll('#div1 > p'); //all p inside div1
console.log(pDiv1); // массив ссылок на элемент(-ы)

/*
    как записывать стринги - кавычки двойные, одинарные, косые
    косые с помощью $ можно реально указать значение x
    "x = x"   'x = x'    `x = ${x}`
*/

for (let i = 0; i < pDiv1.length; i++) {
    // "<span>new text " + (i + 1) + "</span>"
    pDiv1[i].innerHTML = `<span>new text ${i+1}</span>`; 
    // innerHTML для всего
    // innerText только для текста
}

const newP = document.createElement('p'); // создали параграф
newP.textContent = 'Данный элемент был создан с помощью метода createElement()'; // наделили параграф контентом
div1.appendChild(newP); // добавили элемент в тот, который уже есть на странице


// HOMEWORK

//set interval will move every 1000 ms aka 1 second
const t = setInterval(move, 1000);

function move() {
    //Select the box
    const child = document.querySelector('#box');
    console.log(child);



    var x = child.getBoundingClientRect().top;
    console.log("X-position");
    console.log(x);
    var y = child.getBoundingClientRect().left;
    console.log("Y-position");
    console.log(y);    
    /*
    console.log("Box query selects: "); // ссылка на элемент
    
    
    const parent = document.querySelector("#container")
    console.log("Container query selects: "); // ссылка на элемент
    console.log(parent);
    */
    child.style.position = 'absolute';
    child.style.right = x;
    child.style.bottom = y;
}

//для остановки автозапуска функции (20sek)
//clearInterval(t) 
## Front End
## 7. CSS Flexbox

### Материал
* селекторы -  с помощью класса, id, tag, вложенность
* display flex - center the button in sign up form
* display flex - divide the countries by display flex

### Примечания
* сео
* дз - Необходимо стилизовать информацию о странах-экспортёрах кофе с помощью display: flex Успехов!


### Tags HTML
* <link rel="stylesheet" href="./style.css" />

### Tags CSS: display-flex
* display: flex;
    turns on flexible box layout
* justify-content: выравнивает элементы горизонтально
    flex-start: элементы выравниваются по левой стороне контейнера.
    flex-end: элементы выравниваются по правой стороне контейнера.
    center: элементы выравниваются по центру контейнера.
    space-between: элементы отображаются с одинаковыми отступами между ними.
    space-around: элементы отображаются с одинаковыми отступами вокруг них
* align-items: выравнивает все элементы вертикально 
    flex-start: элементы выравниваются по верхнему краю контейнера.
    flex-end: элементы выравниваются по нижнему краю контейнера.
    center: элементы выравниваются вертикально по центру контейнера.
    baseline: элементы отображаются на базовой линии контейнера.
    stretch: элементы растягиваются, чтобы заполнить контейнер.
* flex-direction: задает направление, в котором будут расположены элементы в контейнере
    row: элементы размещаются по направлению текста.
    row-reverse: элементы отображаются в обратном порядке к направлению текста.
    column: элементы располагаются сверху вниз.
    column-reverse: элементы располагаются снизу вверх
* order: 1; Иногда изменения порядка отображения элементов в контейнере недостаточно.
    В таких случаях мы можем применить order для конкретных элементов. 
    По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.
    по факту это 1-2... шага влево или вправо
* align-self - align-items для одного элемента (который может содержать несколько других)
    flex-start: элементы выравниваются по верхнему краю контейнера.
    flex-end: элементы выравниваются по нижнему краю контейнера.
    center: элементы выравниваются вертикально по центру контейнера.
    baseline: элементы отображаются на базовой линии контейнера.
    stretch: элементы растягиваются, чтобы заполнить контейнер.
* align-content, чтобы указать, как несколько рядов должны отделяться друг от друга. 
    flex-start: ряды группируются в верхней части контейнера.
    flex-end: ряды группируются в нижней части контейнера.
    center: ряды группируются вертикально по центру контейнера.
    space-between: ряды отображаются с одинаковыми расстояниями между ними.
    space-around: ряды отображаются с одинаковыми расстояниями вокруг них.
    stretch: ряды растягиваются, чтобы заполнить контейнер равномерно.
* flex-wrap, раздвигает элементы:
    nowrap: размеры элементов устанавливаются автоматически, чтобы они поместились в один ряд.
    wrap: элементы автоматически переносятся на новую строку.
    wrap-reverse: элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке  #
* flex-flow: flex-direction и flex-wrap
    flex-flow: row wrap

### Tags CSS
* width 80%
- ширина элемента 80% экрана
* margin 0 auto
- отступ вокруг элемента 0 пикселей, auto - the browser calculates the margin
* padding: 20px;
- отступ вокруг контента элемента 20 px
* border: 1px solid #ccc;
- граница прямая линия 1 пиксель цвет #ccc
* border-radius: 5px;
- rounds the corners of outer border edge
* box-shadow: 0 0 10px rgba(0, 0, 0, .1);
- нет наклона тени ни по горизонтали ни по вертикали, 10 пикселей размывается тень, почти белое, почти прозрачное
* cursor: pointer;
- при наведении мышки на элемент курсор становится ручкой
* border: none;
- элементу границу убирает
* background-color: #4caf4c;
- фоновый цвет элемента


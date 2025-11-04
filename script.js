/* const button = document.getElementById("myButton"); // Указываем неизменяемую переменную const, даем наименование (может быть любым) далее оператор присваивания = и вызываем элемент html по id ("myButton") */

const button = document.querySelector(".buttonClass"); // можно вызвать элемент по id также с помощью querySelector однако в значении нужно указывать # как в CSS ('#myBytton')

button.addEventListener("click", () => {
  alert("Button was clicked");
}); // Задаем действие у переменной button с помощью .addEventListener в скобках функция при которых это действие сработает () => и значение { alert('Button was clicked') } при клике выдает alert окно с уведомлением Button was clicked

/* const button = document.getElementById("myButton"); // Указываем неизменяемую переменную const, даем наименование (может быть любым) далее оператор присваивания = и вызываем элемент html по id ("myButton") */

const button = document.querySelector(".buttonClass"); // можно вызвать элемент по id или классу также с помощью querySelector однако в значении нужно указывать # как в CSS ('#myBytton') если это id иди черех точку если это класс

button.addEventListener("click", () => {
  alert("Button was clicked");
}); // Задаем действие у переменной button с помощью .addEventListener в скобках функция при которых это действие сработает () => и значение { alert('Button was clicked') } при клике выдает alert окно с уведомлением Button was clicked

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); // Создаем переменную const с названием swiper присваевыем ему Swiper c классом .swiper и задаем параметры: направление, бесконечное пролистывание, и навигациооные кнопки влево-вправо.

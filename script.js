// Переменные цветов
const greencolorhash = '#00FF00';
const bluecolorhash = '#0000FF';
const redcolorhash = '#FF0000';
const blackcolorhash = '#000000';


// 1. Покраска всех карточек
const productCards = document.querySelectorAll('.product-card');
const changecolorallbutton = document.querySelector('#change-color-all');

changecolorallbutton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greencolorhash);
});

// 2. Покраска первой карточки
const firstproductcard = document.querySelector('.product-card');
const changecolorfirstbutton = document.querySelector('#change-color-first');

changecolorfirstbutton.addEventListener('click', () => {
  firstproductcard.style.backgroundColor = bluecolorhash;
});

// 3. Открытие Google с подтверждением
const opengooglebutton = document.querySelector('#open-google');
opengooglebutton.addEventListener('click', opengoogle);

function opogle() { // Переименовано для ясности, либо оставь opengoogle
  const answer = confirm("Вы хотите открыть Google?");
  if (answer === true) {
    window.open('https://www.google.com');
  }

}

// Изменили название функции, чтобы имя не дублировалось с логикой ниже
function opengoogle() {
  const answer = confirm("Вы хотите открыть Google?");
  if (answer === true) {
    window.open('https://www.google.com');
  }
}

// 4. Вывод в консоль лог по кнопке
const outputlogbutton = document.querySelector('#output-console-log');

outputlogbutton.addEventListener('click', () => outputConsoleLog('Дз 4'));

function outputConsoleLog(message) {
  alert("10");
  console.log(message);
}

// 5. Выведение текста в лог при наведении мыши на заголовок
const titles = document.querySelector(".title");
if (titles) { // Добавили проверку, чтобы код не падал, если заголовка нет на странице
  titles.addEventListener('mouseover', function() {
    console.log('Выберите свой продукт');
  });
}

// 6. Переключение цветов кнопки (Toggle класса)
const colorchanger = document.querySelector('.color');

if (colorchanger) {
  colorchanger.addEventListener('click', () => {
    colorchanger.classList.toggle('color-one');
  });
}
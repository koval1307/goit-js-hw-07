
// const selectedById = document.querySelector('#categories');

// console.log(selectedById);

// const title = document.querySelector('.title');
// title.textContent = "dkdkdkd";
// console.log (title)

// const title = document.querySelector(".title");
// console.log(title.classList);
// title.classList.add('newClass-js');
// title.style.backgroundColor = "red";
// console.log (title.classList)
// console.log(title.classList.contains ('green'))


// decrementRef.addEventListener('click', decrement);
// incrementRef.addEventListener('click', increment);
// let valueRef = document.querySelector('#value');
// let counterValue = 0;

// let counterRef = document.querySelector('#button')
// let counter = function () {
//     counterValue += 1;
//     valueRef.textContent = counterValue;
// }
// counterRef.addEventListener('click', counter);

// let buttonRef = document.querySelector(".btn");
// let textRef = document.querySelector(".text");
// let input1Ref = document.querySelector(".input1 ")
// let input2Ref = document.querySelector(".input2");

// let total = function () {
//     textRef.textContent = Number(input1Ref.value) + Number(input2Ref.value);

// };
// buttonRef.addEventListener("click", total);


/*  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,   после чего нажимает кнопку "Submit" и происходит отправка формы.    При отправке формы:    - не должна перезагружаться страница    - необходимо получить выбранную опцию и вывести в параграф с классом .result*/

const listRef = document.querySelector("#list");
listRef.insertAdjacentHTML('afterbegin', '<li></li>');
console.log (listRef);


let counterValue = 0;
let valueRef = document.querySelector('#value');
let decrementRef = document.querySelector('button[data-action="decrement"]');
let incrementRef = document.querySelector('button[data-action="increment"]');

let increment = function (){
    counterValue +=1;
valueRef.textContent = counterValue
};
let decrement = function () {
    counterValue -= 1;
    valueRef.textContent = counterValue
};

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);


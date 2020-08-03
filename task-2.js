const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listOfIngredients = ingredients.map((ingredient) => {
    const ingredientsName = document.createElement('li');
    ingredientsName.textContent = ingredient;
    return (ingredientsName);
})
document.querySelector("#ingredients").append(...listOfIngredients);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const Salad = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  let listIngredients = document.createElement('li');
  listIngredients.textContent = ingredient;
  listIngredients.classList.add('item');
  Salad.appendChild(listIngredients);
});

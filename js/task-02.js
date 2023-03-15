const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const Salad = document.querySelector('#ingredients');
const product = ingredients.map((ingredient) => {
  let listIngredients = document.createElement('li');
  listIngredients.textContent = ingredient;
  listIngredients.classList.add('item');
return listIngredients
});
Salad.append(...product);
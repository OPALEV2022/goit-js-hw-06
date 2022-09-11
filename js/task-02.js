const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector(`#ingredients`);



const createIngredient = (ingredient) => {
 const item = document.createElement(`li`);
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
}
const createIngredients = ingredients.map(createIngredient);
ingredientsEl.append(...createIngredients);
console.log(ingredientsEl);



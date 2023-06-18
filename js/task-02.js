const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')

for(let ingredient of ingredients) {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList = 'item';
  list.append(element);
}
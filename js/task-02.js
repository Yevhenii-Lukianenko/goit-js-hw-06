const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');
const arrayOfCreatedItems = [];

for (const ingredient of ingredients) {
  const createsItemOfList = document.createElement('li');
  createsItemOfList.textContent = ingredient;
  createsItemOfList.classList.add('item');
  arrayOfCreatedItems.push(createsItemOfList);
}

ingredientsList.append(...arrayOfCreatedItems);

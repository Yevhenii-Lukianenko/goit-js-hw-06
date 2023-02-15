const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const arrayOfItems = [];

for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  arrayOfItems.push(item);
}

list.append(...arrayOfItems);

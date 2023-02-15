const categories = document.querySelector("#categories");
const amountOfCategories = categories.childElementCount;

console.log(`Number of categories: ${amountOfCategories}`);

//=============================================================

for (const list of categories.children) {
  console.log("Category: ", list.children[0].textContent);
  console.log("Elements: ", list.children[1].childElementCount);
}

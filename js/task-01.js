const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const listCategories = [...categoriesEl.children];

listCategories.forEach((element) => {
  let categoryEl = element.firstElementChild;
  console.log(`Category: ${categoryEl.textContent}`);
  console.log(`Elements: ${categoryEl.nextElementSibling.children.length}`);
});

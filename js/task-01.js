
let listItems = document.querySelectorAll('li.item');
let numberOfCategories = listItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

listItems.forEach(element => {
  let title = element.querySelector('h2');
  let items = element.querySelectorAll('li');
  let numberOfItems = items.length;
  console.log(`Category: ${title.textContent}`)
  console.log(`Elements: ${numberOfItems}`);
});

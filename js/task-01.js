

const totalCategories = document.querySelector(`#categories`);
const listCategories = [...totalCategories.children];


console.log(`Number of categories: ${listCategories.length}`);
listCategories.forEach((item) => {
    const titleCategories = item.firstElementChild; 
    const elementsCategories = item.lastElementChild.children; 
    // console.log(titleCategories);
    // console.log(elementsCategories);
    console.log(`Category: ${titleCategories.textContent}`);
    console.log(`Elements: ${elementsCategories.length}`);
  });
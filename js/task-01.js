let numberOfCategories = document.querySelector('#categories');
console.log(`Number of categories: ${numberOfCategories.children.length}`);

let getCategories;
getCategories = [...numberOfCategories.children]

getCategories.forEach(element => { 
    let catElement = element.firstElementChild;
    console.log(`Category: ${catElement.innerHTML}`)
    console.log(`Elements: ${catElement.nextElementSibling.children.length}`)
})
let products = [
  { id: 1, name: "Lenevo Laptop", price: 230999 },
  { id: 2, name: "Samsung Phone", price: 24553 },
  { id: 3, name: "Asus Laptop", price: 234000 },
  { id: 4, name: "One Plus Phone", price: 72000 },
];

function serachProduct(products, search) {
  let searchPro = [];
  for (let product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      searchPro.push(product);
    }
  }
  return searchPro;
}

let result = serachProduct(products, "laptop");
console.log(result);

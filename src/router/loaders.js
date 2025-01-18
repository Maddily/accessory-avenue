export async function productsLoader() {
  return fetch(
    'https://dummyjson.com/products/category/mobile-accessories'
  ).then((response) => response.json());
}

const url = 'http://localhost:5000/api/shop/get-products';

export function getProductsApi(url: string) {
  const data = fetch(url)
    .then((res) => res.json())
    .then((res) => res.products)
    .catch((error) => error);

  return data;
}

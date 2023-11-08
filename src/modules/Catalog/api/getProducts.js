export let productApi = '';
const url = 'http://localhost:5000/api/shop/get-products';
productApi = fetch(url, {
  method: 'GET',
}).then((res) => res.json());

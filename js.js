const urlParams = new URLSearchParams(window.location.search);
const url = `https://terithedesigner.dk/wp22_cc/wp-json/wp/v2/product?_embed`;
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleTheList(data);
  });
function handleTheList(data) {
  data.forEach(showProduct);
}
function showProduct(product) {
  console.log(product);
  const template = document.querySelector("template#template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2.productname").textContent = product.title.rendered;
  copy.querySelector("p.productprice").textContent = product.price;
  const parent = document.querySelector("section");
  parent.appendChild(copy);
}

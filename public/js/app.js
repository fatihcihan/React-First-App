"use strict";

var root = ReactDOM.createRoot(document.getElementById("root"));
var products = [{
  name: "IPhone 15",
  price: 60000,
  description: "nice phone",
  colors: ["Silver", "Red", "White"]
}, {
  name: "IPhone 16",
  price: 50000,
  description: "nice phone",
  colors: ["Black", "Red", "White"]
}];
var selectedProducts = [];
function formatPrice(product) {
  return /*#__PURE__*/React.createElement("p", null, " ", product.price, " TL ");
}
function addProduct(event, productName) {
  console.log(event.target, productName);
  if (!selectedProducts.includes(productName)) {
    selectedProducts.push(productName);
  }
  renderApp();
}
function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "header"
  }, "Product List "), /*#__PURE__*/React.createElement("h3", null, "Selected Products: ", selectedProducts.length), products.map(function (product, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "product-details",
      key: index
    }, /*#__PURE__*/React.createElement("h2", null, " ", product.name, " "), product.price, /*#__PURE__*/React.createElement("button", {
      type: "button",
      id: index,
      onClick: function onClick(event) {
        return addProduct(event, product.name);
      }
    }, "Add"));
  }));
  root.render(template);
}
renderApp();

"use strict";

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
function formatPrice(product) {
  return /*#__PURE__*/React.createElement("p", null, " ", product.price, " TL ");
}

// function printDescription(product) {
//     if (product.description) {
//         return <p>{product.description}</p>;
//     }
// }

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Product List "), products.map(function (product, index) {
  return /*#__PURE__*/React.createElement("div", {
    className: "product-details",
    key: index
  }, product.name && product.name.length > 3 ? /*#__PURE__*/React.createElement("h2", null, " ", product.name, " ") : /*#__PURE__*/React.createElement("p", null, "product name not entered"), product.price && product.price > 0 && formatPrice(product), product.description && /*#__PURE__*/React.createElement("p", null, product.description), product.colors.length > 0 ? /*#__PURE__*/React.createElement("p", null, " color options available") : "", /*#__PURE__*/React.createElement("ul", null, product.colors.map(function (color, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, " ", color);
  })));
}));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);

"use strict";

var product = {
  name: "IPhone 15",
  price: 40000
  // description: "nice phone"
};

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
}, "Product List !"), /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", null, product.name), product.price && product.price > 0 && formatPrice(product), product.description && /*#__PURE__*/React.createElement("p", null, product.description), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."))));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);

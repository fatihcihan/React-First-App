
var product = {
    name: "IPhone 15",
    price: 40000
    // description: "nice phone"
}

function formatPrice(product) {
    return <p> {product.price} TL </p>
}

// function printDescription(product) {
//     if (product.description) {
//         return <p>{product.description}</p>;
//     }
// }

var template =
    <div>
        <h1 id="header">Product List !</h1>
        <div id="product-details">
            <h2>{product.name}</h2>
            {(product.price && product.price > 0) && formatPrice(product)}
            {/* { printDescription(product) } */}
            {product.description && <p>{product.description}</p>}
            <ul>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
            </ul>
        </div>
    </div >;
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);

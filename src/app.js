var productName = "Iphone 14";
var productPrice = 40000;

var product = {
    name: "IPhone 15",
    price: 55000
}

function formatPrice(product) {
    return product.price + " TL"
}

var template =
    <div>
        <h1 id="header">Product List !</h1>
        <div class="product-details">
            <h2>{product.name}</h2>
            <p>{formatPrice(product)}</p>
            <ul>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
            </ul>
        </div>
    </div>;
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);

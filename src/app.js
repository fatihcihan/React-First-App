
var root = ReactDOM.createRoot(document.getElementById("root"));

var products = [
    {
        name: "IPhone 15",
        price: 60000,
        description: "nice phone",
        colors: ["Silver", "Red", "White"]
    },
    {
        name: "IPhone 16",
        price: 50000,
        description: "nice phone",
        colors: ["Black", "Red", "White"]
    }
]

var selectedProducts = [];

function formatPrice(product) {
    return <p> {product.price} TL </p>
}

function selectProduct(event, productName) {
    console.log(event.target, productName);
    if (!selectedProducts.includes(productName)) {
        selectedProducts.push(productName);
    }
    renderApp();
}

function saveProduct(event) {
    event.preventDefault();
    var productName = event.target.elements.productName.value;
    var productPrice = event.target.elements.productPrice.value;
    var product = {
        name: productName,
        price: productPrice
    }
    products.push(product);
    event.target.elements.productName.value = "";
    event.target.elements.productPrice.value = "";
    renderApp();
}

function renderApp() {
    var template =
        <div>
            <h1 id="header">Product List </h1>
            <h3>Selected Products: {selectedProducts.length}</h3>
            <form onSubmit={saveProduct}>
                <input type="text" name="productName" id="productName" />
                <input type="text" name="productPrice" id="productPrice" />
                <button type="submit">Add Product</button>
            </form>
            {
                products.map((product, index) => (
                    <div className="product-details" key={index}>
                        {<h2> {product.name} </h2>}
                        {product.price}
                        <button type="button" id={index} onClick={(event) => selectProduct(event, product.name)}>Add</button>
                    </div>
                ))
            }
        </div >;
    root.render(template);
}

renderApp();




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

function addProduct(event, productName) {
    console.log(event.target, productName);
    if (!selectedProducts.includes(productName)) {
        selectedProducts.push(productName);        
    }
    renderApp();
}

function renderApp() {
    var template =
        <div>
            <h1 id="header">Product List </h1>
            <h3>Selected Products: {selectedProducts.length}</h3>
            {
                products.map((product, index) => (
                    <div className="product-details" key={index}>
                        {<h2> {product.name} </h2>}
                        {product.price}
                        <button type="button" id={index} onClick={(event) => addProduct(event, product.name)}>Add</button>
                    </div>
                ))
            }
        </div >;
        root.render(template);
}

renderApp();



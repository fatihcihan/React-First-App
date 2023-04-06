
var root = ReactDOM.createRoot(document.getElementById("root"));

var products = [
    {
        name: "IPhone 15",
        price: 50000,
        description: "nice phone",
        colors: ["Silver", "Red", "White"]
    },
    {
        name: "IPhone 16",
        price: 60000,
        description: "nice phone",
        colors: ["Black", "Red", "White"]
    },
    {
        name: "IPhone 17",
        price: 70000,
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

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 id="header">Product List </h1>
                <h3>Selected Products: {selectedProducts.length}</h3>
            </div>
        );
    }
}

class NewProduct extends React.Component {
    render() {
        return (
            <form onSubmit={saveProduct}>
                <input type="text" name="productName" id="productName" />
                <input type="text" name="productPrice" id="productPrice" />
                <button type="submit">Add Product</button>
            </form>
        );
    }
}

class ProductList extends React.Component {
    render() {
        return (
            this.props.products.map((product, index) => (
                <Product product={product} key={index} />
            ))
        );
    }
}

class Product extends React.Component {
    render() {
        return (
            <div className="product-details">
                {<h2> {this.props.product.name} </h2>}
                {this.props.product.price}
                <button type="button" onClick={(event) => selectProduct(event, this.props.product.name)}>Add</button>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NewProduct />
                <ProductList products={products} />
            </div>
        );
    }
}

root.render(<App />);




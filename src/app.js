
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
        <h1 id="header">Product List </h1>
        {
            products.map((product, index) => (
                <div className="product-details" key={index}>
                    {(product.name && product.name.length > 3) ? <h2> {product.name} </h2> : <p>product name not entered</p>}
                    {(product.price && product.price > 0) && formatPrice(product)}
                    {/* { printDescription(product) } */}
                    {product.description && <p>{product.description}</p>}
                    {product.colors.length > 0 ? <p> color options available</p> : ""}
                    <ul>
                        {
                            product.colors.map((color, index) => (<li key={index}> {color}</li>))
                        }
                    </ul>
                </div>
            ))
        }
    </div >;
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);


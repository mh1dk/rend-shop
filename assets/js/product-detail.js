const selectedProduct = JSON.parse(localStorage.getItem('item'));
const alertAdd = document.getElementById("basket-alert");


if (selectedProduct && selectedProduct.length > 0) {
    const product = selectedProduct[0];

    const productShop = document.getElementById("product-shop");
    productShop.innerHTML = `
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card mb-3" style="max-width: 800px;">
            <div style="box-shadow:2px 2px 15px white;" class="row g-0">
                <div class="col-md-4">
                    <img src=${product.img} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${product.productTitle}</h5>
                        <p class="card-text">${product.desc}</p>
                        <p class="card-text">This product is only available in ${product.size}</p>
                        <p class="card-text">Price: ${product.price}</p>
                        <div id="add-to-cart" style="background-color: #81BFD3;" class="btn mt-4">Add to Basket</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    document.getElementById("add-to-cart").addEventListener("click", () => {
        addToCart(product);
    });
}

function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
        (item) => item.title === product.productTitle && item.size === product.size
    );

    if (existingProductIndex > -1) {
        cart[existingProductIndex].count += 1;
    } else {
        cart.push({
            title: product.productTitle,
            size: product.size,
            price: product.price,
            image: product.img,
            count: 1,
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alertAdd.classList.remove("d-none");
    setTimeout(() => {
        alertAdd.classList.add("d-none");
    }, 1500);}

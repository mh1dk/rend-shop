
const selectedProduct = JSON.parse(localStorage.getItem('item'));


if (selectedProduct && selectedProduct.length > 0) {
    const product = selectedProduct[0];






    const productShop = document.getElementById("product-shop");
    productShop.innerHTML = `
    <div class="container d-flex justify-content-center align-items-center vh-100">
  <div class="card mb-3" style="max-width: 800px;">
    <div  style="box-shadow:5px 5px 5px white;" class="row g-0">
      <div class="col-md-4">
        <img src=${product.img} class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${product.productTitle}</h5>
          <p class="card-text">${product.desc}</p>
          <p class="card-text">this product is only available in ${product.size}</p>
          <p class="card-text">price : ${product.price}</p>
          <div style="background-color: #81BFD3;" class="btn mt-4"> add to basket</div>
        </div>
      </div>
    </div>
  </div>

</div>

    
 
    `




















    document.getElementById('product-title').innerText = product.productTitle;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-img').src = product.img;
}

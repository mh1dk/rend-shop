
const selectedProduct = JSON.parse(localStorage.getItem('item'));


if (selectedProduct && selectedProduct.length > 0) {
    const product = selectedProduct[0];






    const productShop = document.getElementById("product-shop");
    productShop.innerHTML = `
    
    
    <div class="container">
  <div class="p-box">
      <div class="main-box">
        <div class="row d-flex h-100">
          <div class="col-6 ms-3  d-flex justify-content-between align-items-center">
            <div class=" rounded">
              <img style="width: 100%;" class="rounded h-auto" src=${product.img} alt="">
            </div>
          </div>
          <div class="col-5 ms-4 my-4"> 
            <div class="">
            <h2 class="title mt-1">
              ${product.productTitle}
            </h2>

            <h5 class="desc mt-4">
                ${product.desc}
            </h5>


            <h5 class="mt-4 size">
              this product is only available in ${product.size} size.
            </h5>
            <div class="row d-flex">
              <div class="col-6">
            <h5 class="price mt-4">
             price: ${product.price}
            </h5>
          </div>
          <div class="col-6 d-flex justify-content-end">

            <div style="background-color: aliceblue;" class="btn mt-4 me-4">add to cart</div>
          </div>


          </div>
          </div>



          <div style="height: 27.5vh;" class="row similar-item mt-5 d-flex justify-content-center align-items-center">
            <div class="col-4 similar-product d-flex align-items-center">
              <img style="width: 100%;" class="rounded" src="../assets/images/cards/17.png" alt="">
            </div>
            <div class="col-4 similar-product d-flex align-items-center">
              <img style="width: 100%;" class="rounded" src="../assets/images/cards/12.png" alt="">
            </div>
            <div class="col-4 similar-product d-flex align-items-center">
              <img style="width: 100%;" class="rounded" src="../assets/images/cards/16.png" alt="">
            </div>
          </div>
          

            

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

const product = [
    {id:1 , productTitle: "nike Airforce" , description:"test" , img: '../assets/images/cards/one.png'},
    {id:2 , productTitle: "adidas felan" , description:"hi", img: '../assets/images/cards/two.png'},
    {id:3 , productTitle: "newbalance" , description:"bye", img: '../assets/images/cards/three.png'},
    {id:4 , productTitle: "reebok" , description:"boz", img: '../assets/images/cards/four.png'},
    {id:5 , productTitle: "under armor" , description:"saf", img: '../assets/images/cards/five.png'},
    {id:5 , productTitle: "under armor" , description:"saf", img: '../assets/images/cards/six.png'},
    {id:5 , productTitle: "under armor" , description:"saf", img: '../assets/images/cards/seven.png'},
    {id:5 , productTitle: "under armor" , description:"saf", img: '../assets/images/cards/eight.png'},
    {id:5 , productTitle: "under armor" , description:"saf", img: '../assets/images/cards/nine.png'},
    {id:5 , productTitle: "under armor" , description:"saf", img: '../assets/images/cards/ten.png'},

]

product.map(item => {
    const col = document.createElement('div');
    col.classList.add('col-lg-2');
    col.innerHTML = `
    
    <div class="card mb-2">
    <img src = ${item.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.productTitle}</h5>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    
    `
    const row = document.getElementById('row');
    row.appendChild(col)
})
























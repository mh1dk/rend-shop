const product = [
    {id: "airforce" , color: "white" ,size: "39", productTitle: "nike Airforce" , description:"65$" , img: '../assets/images/cards/one.png'},
    {id: "jordan" , color: "brown",size: "42", productTitle: "newbalance" , description:"52$", img: '../assets/images/cards/three.png'},
    {id: "others" ,color: "white",size: "44", productTitle: "adidas felan" , description:"41$", img: '../assets/images/cards/two.png'},
    {id: "others" ,color: "black",size: "43", productTitle: "reebok" , description:"115$", img: '../assets/images/cards/four.png'},
    {id: "jordan" ,color: "white",size: "39", productTitle: "under armor" , description:"98$", img: '../assets/images/cards/five.png'},
    {id: "others" ,color: "white",size: "38", productTitle: "under armor" , description:"88$", img: '../assets/images/cards/six.png'},
    {id: "running" ,color: "black",size: "42", productTitle: "under armor" , description:"74$", img: '../assets/images/cards/seven.png'},
    {id: "jordan" ,color: "blue",size: "41", productTitle: "under armor" , description:"66$", img: '../assets/images/cards/nine.png'},
    {id:"running" ,color: "white",size: "39", productTitle: "under armor" , description:"39$", img: '../assets/images/cards/eight.png'},
    {id: "running" ,color: "red",size: "41", productTitle: "under armor" , description:"126$", img: '../assets/images/cards/ten.png'},
    {id: "jordan" ,color: "blue",size: "41", productTitle: "under armor" , description:"136$", img: '../assets/images/cards/14.png'},
    {id: "jordan" ,color: "black",size: "43", productTitle: "under armor" , description:"117$", img: '../assets/images/cards/12.png'},
    {id: "airforce" ,color: "gray",size: "39", productTitle: "under armor" , description:"98$", img: '../assets/images/cards/13.png'},
    {id: "other" ,color: "black",size: "43", productTitle: "under armor" , description:"155$", img: '../assets/images/cards/15.png'},
    {id: "running" ,color: "black",size: "42", productTitle: "under armor" , description:"48$", img: '../assets/images/cards/16.png'},
    {id: "running" ,color: "black",size: "38", productTitle: "under armor" , description:"65$", img: '../assets/images/cards/17.png'},
    {id: "other" ,color: "white",size: "44", productTitle: "under armor" , description:"78$", img: '../assets/images/cards/18.png'},
    {id: "running" ,color: "other",size: "42", productTitle: "under armor" , description:"98$", img: '../assets/images/cards/23.png'},
    {id: "other" ,color: "black",size: "43", productTitle: "under armor" , description:"85$", img: '../assets/images/cards/20.png'},
    {id: "jordan" ,color: "white",size: "42", productTitle: "under armor" , description:"58$", img: '../assets/images/cards/21.png'},
    {id: "running" ,color: "black",size: "44", productTitle: "under armor" , description:"84$", img: '../assets/images/cards/22.png'},
    {id: "airforce" ,color: "black",size: "41", productTitle: "under armor" , description:"69$", img: '../assets/images/cards/24.png'},
    {id: "airforce" ,color: "red",size: "41", productTitle: "under armor" , description:"75$", img: '../assets/images/cards/27.png'},
    {id: "other" ,color: "blue",size: "43", productTitle: "under armor" , description:"75$", img: '../assets/images/cards/28.png'},


];



(function render() {
    const row = document.getElementById('row');
    const loadingContainer = document.getElementById('loading'); // A container for the loading animation
    let currentFilter = null;

    const renderProducts = (filterId = null) => {
        row.innerHTML = '';
        product.forEach(item => {
            if (!filterId || item.id === filterId) {
                const col = document.createElement('div');
                col.classList.add('col-lg-4');
                col.innerHTML = `
                    <div class="card mb-2">
                        <img src="${item.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.productTitle}</h5>
                            <p class="card-text">${item.description}</p>
                            <a style="background-color: #81BFD3;" href="#" class="btn">Let's shop</a>
                        </div>
                    </div>
                `;
                row.appendChild(col);
            }
        });
    };

    const showLoading = () => {
        loadingContainer.style.display = 'block';
    };
    
    const hideLoading = () => {
        loadingContainer.style.display = 'none';
    };
    

    const toggleFilter = (filterId) => {
        if (currentFilter === filterId) {
            currentFilter = null;
        } else {
            currentFilter = filterId;
        }

        showLoading();

        setTimeout(() => {
            if (currentFilter) {
                renderProducts(currentFilter);
            } else {
                renderProducts();
            }
            hideLoading();
        }, 1000);
    };

    renderProducts();

    const all = document.getElementById('all');
    const airforce = document.getElementById('airforce');
    const jordan = document.getElementById('jordan');
    const others = document.getElementById('others');
    const running = document.getElementById('running');

    airforce.addEventListener('click', () => toggleFilter('airforce'));
    jordan.addEventListener('click', () => toggleFilter('jordan'));
    others.addEventListener('click', () => toggleFilter('others'));
    running.addEventListener('click', () => toggleFilter('running'));
    all.addEventListener('click', () => toggleFilter(null)); 
})();











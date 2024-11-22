const product = [
    { id: "airforce", color: "white", size: "39", productTitle: "nike Airforce", price: "65$", img: '../assets/images/cards/one.png' },
    { id: "jordan", color: "brown", size: "42", productTitle: "newbalance", price: "52$", img: '../assets/images/cards/three.png' },
    { id: "others", color: "white", size: "44", productTitle: "adidas felan", price: "41$", img: '../assets/images/cards/two.png' },
    { id: "others", color: "black", size: "43", productTitle: "reebok", price: "115$", img: '../assets/images/cards/four.png' },
    { id: "jordan", color: "white", size: "39", productTitle: "under armor", price: "98$", img: '../assets/images/cards/five.png' },
    { id: "others", color: "white", size: "38", productTitle: "under armor", price: "88$", img: '../assets/images/cards/six.png' },
    { id: "running", color: "black", size: "42", productTitle: "under armor", price: "74$", img: '../assets/images/cards/seven.png' },
    { id: "jordan", color: "blue", size: "41", productTitle: "under armor", price: "66$", img: '../assets/images/cards/nine.png' },
    { id: "running", color: "white", size: "39", productTitle: "under armor", price: "39$", img: '../assets/images/cards/eight.png' },
    { id: "running", color: "red", size: "41", productTitle: "under armor", price: "126$", img: '../assets/images/cards/ten.png' },
    { id: "jordan", color: "blue", size: "41", productTitle: "under armor", price: "136$", img: '../assets/images/cards/14.png' },
    { id: "jordan", color: "black", size: "43", productTitle: "under armor", price: "117$", img: '../assets/images/cards/12.png' },
    { id: "airforce", color: "gray", size: "39", productTitle: "under armor", price: "98$", img: '../assets/images/cards/13.png' },
    { id: "other", color: "black", size: "43", productTitle: "under armor", price: "155$", img: '../assets/images/cards/15.png' },
    { id: "running", color: "black", size: "42", productTitle: "under armor", price: "48$", img: '../assets/images/cards/16.png' },
    { id: "other", color: "green", size: "38", productTitle: "under armor", price: "65$", img: '../assets/images/cards/29.png' },
    { id: "other", color: "white", size: "44", productTitle: "under armor", price: "78$", img: '../assets/images/cards/18.png' },
    { id: "running", color: "other", size: "42", productTitle: "under armor", price: "98$", img: '../assets/images/cards/23.png' },
    { id: "other", color: "black", size: "43", productTitle: "under armor", price: "85$", img: '../assets/images/cards/20.png' },
    { id: "jordan", color: "white", size: "42", productTitle: "under armor", price: "58$", img: '../assets/images/cards/21.png' },
    { id: "running", color: "black", size: "44", productTitle: "under armor", price: "84$", img: '../assets/images/cards/22.png' },
    { id: "airforce", color: "black", size: "41", productTitle: "under armor", price: "69$", img: '../assets/images/cards/24.png' },
    { id: "airforce", color: "red", size: "41", productTitle: "under armor", price: "75$", img: '../assets/images/cards/27.png' },
    { id: "other", color: "blue", size: "43", productTitle: "under armor", price: "75$", img: '../assets/images/cards/28.png' },


];

(function render() {
    const row = document.getElementById('row');
    const loadingContainer = document.getElementById('loading');
    let currentFilter = null;

    const renderProducts = (filter = null, filterType = 'id') => {
        row.innerHTML = '';
        product.forEach(item => {
            if (!filter || (filterType === 'price' && filter(item)) || item[filterType] === filter) {
                const col = document.createElement('div');
                col.classList.add('col-lg-4');
                col.innerHTML = `
                    <div class="card mb-2">
                        <img src="${item.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.productTitle} ${item.size}</h5>
                            <p class="card-text">${item.price}</p>
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

    const toggleFilter = (filter, filterType = 'id') => {
        showLoading();
        setTimeout(() => {
            renderProducts(filter, filterType);
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

    // Filtering colors
    const black = document.getElementById('black');
    const white = document.getElementById('white');
    const brown = document.getElementById('brown');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');
    const red = document.getElementById('red');
    black.addEventListener('click', () => toggleFilter('black', 'color'));
    white.addEventListener('click', () => toggleFilter('white', 'color'));
    green.addEventListener('click', () => toggleFilter('green', 'color'));
    brown.addEventListener('click', () => toggleFilter('brown', 'color'));
    blue.addEventListener('click', () => toggleFilter('blue', 'color'));
    red.addEventListener('click', () => toggleFilter('red', 'color'));

    // Size filter
    const size38 = document.getElementById('38');
    const size39 = document.getElementById('39');
    const size40 = document.getElementById('40');
    const size41 = document.getElementById('41');
    const size42 = document.getElementById('42');
    const size43 = document.getElementById('43');
    const size44 = document.getElementById('44');

    size38.addEventListener('click', () => toggleFilter('38', 'size'));
    size39.addEventListener('click', () => toggleFilter('39', 'size'));
    size40.addEventListener('click', () => toggleFilter('40', 'size'));
    size41.addEventListener('click', () => toggleFilter('41', 'size'));
    size42.addEventListener('click', () => toggleFilter('42', 'size'));
    size43.addEventListener('click', () => toggleFilter('43', 'size'));
    size44.addEventListener('click', () => toggleFilter('44', 'size'));

    // Price filter

    const price50 = document.getElementById('50');
    price50.addEventListener('click', () =>
        toggleFilter(
            item => parseInt(item.price.replace('$', '')) < 50,
            'price'
        )
    );
    const price60 = document.getElementById('60');
    price60.addEventListener('click', () =>
        toggleFilter(
            item => {
                const price = parseInt(item.price.replace('$', ''));
                return price >= 50 && price < 60;
            },
            'price'
        )
    );
    const price70 = document.getElementById('70');
    price70.addEventListener('click', () =>
        toggleFilter(
            item => {
                const price = parseInt(item.price.replace('$', ''));
                return price >= 60 && price < 70;
            },
            'price'
        )
    );
    const price80 = document.getElementById('80');
    price80.addEventListener('click', () =>
        toggleFilter(
            item => {
                const price = parseInt(item.price.replace('$', ''));
                return price >= 70 && price < 80;
            },
            'price'
        )
    );
    const price90 = document.getElementById('90');
    price90.addEventListener('click', () =>
        toggleFilter(
            item => {
                const price = parseInt(item.price.replace('$', ''));
                return price >= 80 && price < 90;
            },
            'price'
        )
    );
    const price100 = document.getElementById('100');
    price100.addEventListener('click', () =>
        toggleFilter(
            item => {
                const price = parseInt(item.price.replace('$', ''));
                return price >= 90 && price < 100;
            },
            'price'
        )
    );
    const price101 = document.getElementById('101');
    price101.addEventListener('click', () =>
        toggleFilter(
            item => parseInt(item.price.replace('$', '')) > 100,
            'price'
        ))


   
})();

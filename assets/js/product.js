const product = [
    { id: "airforce", color: "white", size: "39", productTitle: "nike Airforce", price: "65$", img: '../assets/images/cards/one.png' },
    { id: "jordan", color: "brown", size: "42", productTitle: "Airjordan brown", price: "52$", img: '../assets/images/cards/three.png' },
    { id: "others", color: "white", size: "44", productTitle: "Nike felan", price: "41$", img: '../assets/images/cards/two.png' },
    { id: "others", color: "black", size: "43", productTitle: "nike black", price: "115$", img: '../assets/images/cards/four.png' },
    { id: "jordan", color: "white", size: "39", productTitle: "Air jordan one", price: "98$", img: '../assets/images/cards/five.png' },
    { id: "others", color: "white", size: "38", productTitle: "Nike felan", price: "88$", img: '../assets/images/cards/six.png' },
    { id: "running", color: "black", size: "42", productTitle: "Running nike", price: "74$", img: '../assets/images/cards/seven.png' },
    { id: "jordan", color: "blue", size: "41", productTitle: "Air jordan one", price: "66$", img: '../assets/images/cards/nine.png' },
    { id: "running", color: "white", size: "39", productTitle: "invincible running", price: "39$", img: '../assets/images/cards/eight.png' },
    { id: "running", color: "red", size: "41", productTitle: "Nike running", price: "126$", img: '../assets/images/cards/ten.png' },
    { id: "jordan", color: "blue", size: "41", productTitle: "Air jordan long", price: "136$", img: '../assets/images/cards/14.png' },
    { id: "jordan", color: "black", size: "43", productTitle: "Black Air jordan", price: "117$", img: '../assets/images/cards/12.png' },
    { id: "airforce", color: "gray", size: "39", productTitle: "Air force new", price: "98$", img: '../assets/images/cards/13.png' },
    { id: "other", color: "black", size: "43", productTitle: "undefinded shoes", price: "155$", img: '../assets/images/cards/15.png' },
    { id: "running", color: "black", size: "42", productTitle: "Running nike", price: "48$", img: '../assets/images/cards/16.png' },
    { id: "other", color: "green", size: "38", productTitle: "Grass nike", price: "65$", img: '../assets/images/cards/29.png' },
    { id: "other", color: "white", size: "44", productTitle: "nike girl", price: "78$", img: '../assets/images/cards/18.png' },
    { id: "running", color: "other", size: "42", productTitle: "Nike namad", price: "98$", img: '../assets/images/cards/23.png' },
    { id: "other", color: "black", size: "43", productTitle: "Nike running", price: "85$", img: '../assets/images/cards/20.png' },
    { id: "jordan", color: "white", size: "42", productTitle: "Vollyball nike", price: "58$", img: '../assets/images/cards/21.png' },
    { id: "running", color: "black", size: "44", productTitle: "Nike running", price: "84$", img: '../assets/images/cards/22.png' },
    { id: "airforce", color: "black", size: "41", productTitle: "Dark airforce", price: "69$", img: '../assets/images/cards/24.png' },
    { id: "airforce", color: "red", size: "41", productTitle: "red Airforce", price: "75$", img: '../assets/images/cards/27.png' },
    { id: "other", color: "blue", size: "43", productTitle: "Nike soccer", price: "75$", img: '../assets/images/cards/28.png' },


];

// (function render() {
//     const row = document.getElementById('row');
//     const loadingContainer = document.getElementById('loading');
//     let currentFilter = null;

//     const renderProducts = (filter = null, filterType = 'id') => {
//         row.innerHTML = '';
//         product.forEach(item => {
//             if (!filter || (filterType === 'price' && filter(item)) || item[filterType] === filter) {
//                 const col = document.createElement('div');
//                 col.classList.add('col-lg-4');
//                 col.innerHTML = `
//                     <div class="card mb-2">
//                         <img src="${item.img}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                             <h5 class="card-title">${item.productTitle} ${item.size}</h5>
//                             <p class="card-text">${item.price}</p>
//                             <a style="background-color: #81BFD3;" href="#" class="btn">Let's shop</a>
//                         </div>
//                     </div>
//                 `;
//                 row.appendChild(col);
//             }
//         });
//     };

//     const showLoading = () => {
//         loadingContainer.style.display = 'block';
//     };

//     const hideLoading = () => {
//         loadingContainer.style.display = 'none';
//     };

//     const toggleFilter = (filter, filterType = 'id') => {
//         showLoading();
//         setTimeout(() => {
//             renderProducts(filter, filterType);
//             hideLoading();
//         }, 1000);
//     };

//     renderProducts();

//     const all = document.getElementById('all');
//     const airforce = document.getElementById('airforce');
//     const jordan = document.getElementById('jordan');
//     const others = document.getElementById('others');
//     const running = document.getElementById('running');

//     airforce.addEventListener('click', () => toggleFilter('airforce'));
//     jordan.addEventListener('click', () => toggleFilter('jordan'));
//     others.addEventListener('click', () => toggleFilter('others'));
//     running.addEventListener('click', () => toggleFilter('running'));
//     all.addEventListener('click', () => toggleFilter(null));

//     // Filtering colors
//     const black = document.getElementById('black');
//     const white = document.getElementById('white');
//     const brown = document.getElementById('brown');
//     const green = document.getElementById('green');
//     const blue = document.getElementById('blue');
//     const red = document.getElementById('red');
//     black.addEventListener('click', () => toggleFilter('black', 'color'));
//     white.addEventListener('click', () => toggleFilter('white', 'color'));
//     green.addEventListener('click', () => toggleFilter('green', 'color'));
//     brown.addEventListener('click', () => toggleFilter('brown', 'color'));
//     blue.addEventListener('click', () => toggleFilter('blue', 'color'));
//     red.addEventListener('click', () => toggleFilter('red', 'color'));

//     // Size filter
//     const size38 = document.getElementById('38');
//     const size39 = document.getElementById('39');
//     const size40 = document.getElementById('40');
//     const size41 = document.getElementById('41');
//     const size42 = document.getElementById('42');
//     const size43 = document.getElementById('43');
//     const size44 = document.getElementById('44');

//     size38.addEventListener('click', () => toggleFilter('38', 'size'));
//     size39.addEventListener('click', () => toggleFilter('39', 'size'));
//     size40.addEventListener('click', () => toggleFilter('40', 'size'));
//     size41.addEventListener('click', () => toggleFilter('41', 'size'));
//     size42.addEventListener('click', () => toggleFilter('42', 'size'));
//     size43.addEventListener('click', () => toggleFilter('43', 'size'));
//     size44.addEventListener('click', () => toggleFilter('44', 'size'));

//     // Price filter

//     const price50 = document.getElementById('50');
//     price50.addEventListener('click', () =>
//         toggleFilter(
//             item => parseInt(item.price.replace('$', '')) < 50,
//             'price'
//         )
//     );
//     const price60 = document.getElementById('60');
//     price60.addEventListener('click', () =>
//         toggleFilter(
//             item => {
//                 const price = parseInt(item.price.replace('$', ''));
//                 return price >= 50 && price < 60;
//             },
//             'price'
//         )
//     );
//     const price70 = document.getElementById('70');
//     price70.addEventListener('click', () =>
//         toggleFilter(
//             item => {
//                 const price = parseInt(item.price.replace('$', ''));
//                 return price >= 60 && price < 70;
//             },
//             'price'
//         )
//     );
//     const price80 = document.getElementById('80');
//     price80.addEventListener('click', () =>
//         toggleFilter(
//             item => {
//                 const price = parseInt(item.price.replace('$', ''));
//                 return price >= 70 && price < 80;
//             },
//             'price'
//         )
//     );
//     const price90 = document.getElementById('90');
//     price90.addEventListener('click', () =>
//         toggleFilter(
//             item => {
//                 const price = parseInt(item.price.replace('$', ''));
//                 return price >= 80 && price < 90;
//             },
//             'price'
//         )
//     );
//     const price100 = document.getElementById('100');
//     price100.addEventListener('click', () =>
//         toggleFilter(
//             item => {
//                 const price = parseInt(item.price.replace('$', ''));
//                 return price >= 90 && price < 100;
//             },
//             'price'
//         )
//     );
//     const price101 = document.getElementById('101');
//     price101.addEventListener('click', () =>
//         toggleFilter(
//             item => parseInt(item.price.replace('$', '')) > 100,
//             'price'
//         ))


   
// })();






(function render() {
    const row = document.getElementById('row');
    const selectedFiltersList = document.getElementById('selected-filters-list');
    const searchInput = document.querySelector('input[type="search"]'); // Select the search input

    const filters = {
        id: [],
        color: [],
        size: [],
        price: null,
        search: "",
    };

    const updateSelectedFiltersDisplay = () => {
        selectedFiltersList.innerHTML = '';

        Object.keys(filters).forEach(filterType => {
            if (filterType === 'price' && filters.price) {
                const filterItem = document.createElement('div');
                filterItem.classList.add('filter-item');
                filterItem.textContent = `Price: ${filters.price.label}`;
                filterItem.onclick = () => {
                    filters.price = null;
                    renderProducts();
                    updateSelectedFiltersDisplay();
                };
                selectedFiltersList.appendChild(filterItem);
            } else if (filterType !== 'search' && filters[filterType].length > 0) {
                filters[filterType].forEach(filterValue => {
                    const filterItem = document.createElement('div');
                    filterItem.classList.add('filter-item');
                    filterItem.textContent = `${filterType === 'id' ? 'Category' : filterType}: ${filterValue}`;
                    filterItem.onclick = () => {
                        const index = filters[filterType].indexOf(filterValue);
                        if (index > -1) {
                            filters[filterType].splice(index, 1);
                            renderProducts();
                            updateSelectedFiltersDisplay();
                        }
                    };
                    selectedFiltersList.appendChild(filterItem);
                });
            }
        });
    };

    const toggleFilter = (value, filterType, element, label) => {
        if (filterType === 'price') {
            filters.price = filters.price?.value === value ? null : { value, label };
            document.querySelectorAll('.price.bg-selected').forEach(el => el.classList.remove('bg-selected'));
        } else {
            const index = filters[filterType].indexOf(value);
            if (index > -1) {
                filters[filterType].splice(index, 1);
            } else {
                filters[filterType].push(value);
            }
        }

        element.classList.toggle('bg-selected');
        renderProducts();
        updateSelectedFiltersDisplay();
    };

    const renderProducts = () => {
        row.innerHTML = '';
        product.forEach(item => {
            const matchesCategory = filters.id.length === 0 || filters.id.includes(item.id);
            const matchesColor = filters.color.length === 0 || filters.color.includes(item.color);
            const matchesSize = filters.size.length === 0 || filters.size.includes(item.size);
            const matchesPrice = !filters.price || filters.price.value(item);
            const matchesSearch = !filters.search || item.productTitle.toLowerCase().includes(filters.search.toLowerCase());

            if (matchesCategory && matchesColor && matchesSize && matchesPrice && matchesSearch) {
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

    renderProducts();

    searchInput.addEventListener('input', (e) => {
        filters.search = e.target.value;
        renderProducts();
    });


    document.getElementById('all').addEventListener('click', (e) => {
        filters.id = [];
        filters.color = [];
        filters.size = [];
        filters.price = null;
        filters.search = "";

        document.querySelectorAll('.bg-selected').forEach(el => el.classList.remove('bg-selected'));

        renderProducts();
        updateSelectedFiltersDisplay();
    });

    ['airforce', 'jordan', 'others', 'running'].forEach(category => {
        document.getElementById(category).addEventListener('click', (e) => {
            const element = e.target;
            if (category === 'all') {
                filters.id = [];
                document.querySelectorAll('.bg-selected').forEach(el => el.classList.remove('bg-selected'));
            } else {
                toggleFilter(category, 'id', element, `Category: ${category}`);
            }
        });
    });

    ['black', 'white', 'brown', 'green', 'blue', 'red'].forEach(color => {
        document.getElementById(color).addEventListener('click', (e) => {
            toggleFilter(color, 'color', e.target, `Color: ${color}`);
        });
    });

    ['38', '39', '40', '41', '42', '43', '44'].forEach(size => {
        document.getElementById(size).addEventListener('click', (e) => {
            toggleFilter(size, 'size', e.target, `Size: ${size}`);
        });
    });

    const priceFilters = [
        { id: '50', value: item => parseInt(item.price.replace('$', '')) < 50 },
        { id: '60', value: item => parseInt(item.price.replace('$', '')) < 60 },
        { id: '70', value: item => parseInt(item.price.replace('$', '')) < 70 },
        { id: '80', value: item => parseInt(item.price.replace('$', '')) < 80 },
        { id: '90', value: item => parseInt(item.price.replace('$', '')) < 90 },
        { id: '100', value: item => parseInt(item.price.replace('$', '')) < 100 },
        { id: '101', value: item => parseInt(item.price.replace('$', '')) > 101 }
    ];

    priceFilters.forEach(priceFilter => {
        const element = document.getElementById(priceFilter.id);
        element.classList.add('price');
        element.addEventListener('click', (e) => {
            toggleFilter(priceFilter.value, 'price', element, priceFilter.label);
        });
    });
})();

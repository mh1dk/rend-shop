const product = [
    { num: 1, id: "airforce", color: "white", size: "39", productTitle: "nike Airforce", price: "65$", img: '../assets/images/cards/one.png' },
    { num: 2, id: "jordan", color: "brown", size: "42", productTitle: "Airjordan brown", price: "52$", img: '../assets/images/cards/three.png' },
    { num: 3, id: "others", color: "white", size: "44", productTitle: "Nike felan", price: "41$", img: '../assets/images/cards/two.png' },
    { num: 4, id: "others", color: "black", size: "43", productTitle: "nike black", price: "115$", img: '../assets/images/cards/four.png' },
    { num: 5, id: "jordan", color: "white", size: "39", productTitle: "Air jordan one", price: "98$", img: '../assets/images/cards/five.png' },
    { num: 6, id: "others", color: "white", size: "38", productTitle: "Nike felan", price: "88$", img: '../assets/images/cards/six.png' },
    { num: 7, id: "running", color: "black", size: "42", productTitle: "Running nike", price: "74$", img: '../assets/images/cards/seven.png' },
    { num: 8, id: "jordan", color: "blue", size: "41", productTitle: "Air jordan one", price: "66$", img: '../assets/images/cards/nine.png' },
    { num: 9, id: "running", color: "white", size: "39", productTitle: "invincible running", price: "39$", img: '../assets/images/cards/eight.png' },
    { num: 10, id: "running", color: "red", size: "41", productTitle: "Nike running", price: "126$", img: '../assets/images/cards/ten.png' },
    { num: 11, id: "jordan", color: "blue", size: "41", productTitle: "Air jordan long", price: "136$", img: '../assets/images/cards/14.png' },
    { num: 12, id: "jordan", color: "black", size: "43", productTitle: "Black Air jordan", price: "117$", img: '../assets/images/cards/12.png' },
    { num: 13, id: "airforce", color: "gray", size: "39", productTitle: "Air force new", price: "98$", img: '../assets/images/cards/13.png' },
    { num: 14, id: "other", color: "black", size: "43", productTitle: "undefined shoes", price: "155$", img: '../assets/images/cards/15.png' },
    { num: 15, id: "running", color: "black", size: "42", productTitle: "Running nike", price: "48$", img: '../assets/images/cards/16.png' },
    { num: 16, id: "other", color: "green", size: "38", productTitle: "Grass nike", price: "65$", img: '../assets/images/cards/29.png' },
    { num: 17, id: "other", color: "white", size: "44", productTitle: "nike girl", price: "78$", img: '../assets/images/cards/18.png' },
    { num: 18, id: "running", color: "other", size: "42", productTitle: "Nike namad", price: "98$", img: '../assets/images/cards/23.png' },
    { num: 19, id: "other", color: "black", size: "43", productTitle: "Nike running", price: "85$", img: '../assets/images/cards/20.png' },
    { num: 20, id: "jordan", color: "white", size: "42", productTitle: "Volleyball nike", price: "58$", img: '../assets/images/cards/21.png' },
    { num: 21, id: "running", color: "black", size: "44", productTitle: "Nike running", price: "84$", img: '../assets/images/cards/22.png' },
    { num: 22, id: "airforce", color: "black", size: "41", productTitle: "Dark airforce", price: "69$", img: '../assets/images/cards/24.png' },
    { num: 23, id: "airforce", color: "red", size: "41", productTitle: "red Airforce", price: "75$", img: '../assets/images/cards/27.png' },
    { num: 24, id: "other", color: "blue", size: "43", productTitle: "Nike soccer", price: "75$", img: '../assets/images/cards/28.png' },
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
    const searchInput = document.querySelector('input[type="search"]');
    const paginationContainer = document.querySelector('.pagination');

    const filters = {
        id: [],
        color: [],
        size: [],
        price: null,
        search: "",
    };

    const pagination = {
        currentPage: 1,
        itemsPerPage: 6,
    };


    // localStorage.setItem('user' , product.id);

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

    const renderPagination = (filteredProducts) => {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(filteredProducts.length / pagination.itemsPerPage);

        if (totalPages <= 1) return;

        const previousButton = document.createElement('li');
        previousButton.classList.add('page-item');
        previousButton.innerHTML = `<a class="page-link" href="#">Previous</a>`;
        previousButton.classList.toggle('disabled', pagination.currentPage === 1);
        previousButton.addEventListener('click', () => {
            if (pagination.currentPage > 1) {
                pagination.currentPage--;
                renderProducts();
            }
        });
        paginationContainer.appendChild(previousButton);

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.classList.add('page-item');
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            if (i === pagination.currentPage) {
                pageItem.classList.add('active');
            }
            pageItem.addEventListener('click', () => {
                pagination.currentPage = i;
                renderProducts();
            });
            paginationContainer.appendChild(pageItem);
        }

        const nextButton = document.createElement('li');
        nextButton.classList.add('page-item');
        nextButton.innerHTML = `<a class="page-link" href="#">Next</a>`;
        nextButton.classList.toggle('disabled', pagination.currentPage === totalPages);
        nextButton.addEventListener('click', () => {
            if (pagination.currentPage < totalPages) {
                pagination.currentPage++;
                renderProducts();
            }
        });
        paginationContainer.appendChild(nextButton);
    };

    const renderProducts = () => {
        row.innerHTML = '';
        const filteredProducts = product.filter(item => {
            const matchesCategory = filters.id.length === 0 || filters.id.includes(item.id);
            const matchesColor = filters.color.length === 0 || filters.color.includes(item.color);
            const matchesSize = filters.size.length === 0 || filters.size.includes(item.size);
            const matchesPrice = !filters.price || filters.price.value(item);
            const matchesSearch = !filters.search || item.productTitle.toLowerCase().includes(filters.search.toLowerCase());

            return matchesCategory && matchesColor && matchesSize && matchesPrice && matchesSearch;
        });

        renderPagination(filteredProducts);

        const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
        const paginatedProducts = filteredProducts.slice(startIndex, startIndex + pagination.itemsPerPage);

        paginatedProducts.forEach(item => {
            const col = document.createElement('div');
            col.classList.add('col-lg-4');
            col.innerHTML = `
                <div class="card mb-2">
                    <img src="${item.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.productTitle} ${item.size}</h5>
                        <p class="card-text">${item.price}</p>
                        <div style="background-color: #81BFD3;" class="btn" id="open-data">buy now</div>
                    </div>
                </div>
            `
            row.appendChild(col);
        });
    };

    renderProducts();


    const goShopping = (e) => {
        e.preventDefault();
        localStorage.setItem("product-data", product.num);
        navigation.navigate('../html-pages/product-detail.html')



    }


    const goDetail = document.getElementById("open-data");
    goDetail.addEventListener("click", goShopping);
















    searchInput.addEventListener('input', (e) => {
        filters.search = e.target.value;
        pagination.currentPage = 1;
        renderProducts();
    });

    document.getElementById('all').addEventListener('click', () => {
        filters.id = [];
        filters.color = [];
        filters.size = [];
        filters.price = null;
        filters.search = "";
        pagination.currentPage = 1;
        document.querySelectorAll('.bg-selected').forEach(el => el.classList.remove('bg-selected'));
        renderProducts();
        updateSelectedFiltersDisplay();
    });

    ['airforce', 'jordan', 'others', 'running'].forEach(category => {
        document.getElementById(category).addEventListener('click', (e) => {
            toggleFilter(category, 'id', e.target, `Category: ${category}`);
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





    const filterBtn = document.getElementById("filter-btn");
    const filter = document.getElementById("filter");
    const close = document.getElementById("close");
    filterBtn.addEventListener("click", () => {
        filter.classList.toggle("d-none")
    });
    close.addEventListener("click", () => {
        filter.classList.add('d-none')
    })
})();
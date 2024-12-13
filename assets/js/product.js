const product = [
    { num: 1, id: "airforce", color: "white", size: "39", productTitle: "nike Airforce", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "65$", img: '../assets/images/cards/one.png' },
    { num: 2, id: "jordan", color: "brown", size: "42", productTitle: "Airjordan brown", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "52$", img: '../assets/images/cards/three.png' },
    { num: 3, id: "others", color: "white", size: "44", productTitle: "Nike felan", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "41$", img: '../assets/images/cards/two.png' },
    { num: 4, id: "others", color: "black", size: "43", productTitle: "nike black", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "115$", img: '../assets/images/cards/four.png' },
    { num: 5, id: "jordan", color: "white", size: "39", productTitle: "Air jordan one", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "98$", img: '../assets/images/cards/five.png' },
    { num: 6, id: "others", color: "white", size: "38", productTitle: "Nike felan", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "88$", img: '../assets/images/cards/six.png' },
    { num: 7, id: "running", color: "black", size: "42", productTitle: "Running nike", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "74$", img: '../assets/images/cards/seven.png' },
    { num: 8, id: "jordan", color: "blue", size: "41", productTitle: "Air jordan one", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "66$", img: '../assets/images/cards/nine.png' },
    { num: 9, id: "running", color: "white", size: "39", productTitle: "invincible running", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "39$", img: '../assets/images/cards/eight.png' },
    { num: 10, id: "running", color: "red", size: "41", productTitle: "Nike running", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "126$", img: '../assets/images/cards/ten.png' },
    { num: 11, id: "jordan", color: "blue", size: "41", productTitle: "Air jordan long", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "136$", img: '../assets/images/cards/14.png' },
    { num: 12, id: "jordan", color: "black", size: "43", productTitle: "Black Air jordan", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "117$", img: '../assets/images/cards/12.png' },
    { num: 13, id: "airforce", color: "gray", size: "39", productTitle: "Air force new", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "98$", img: '../assets/images/cards/13.png' },
    { num: 14, id: "other", color: "black", size: "43", productTitle: "undefined shoes", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "155$", img: '../assets/images/cards/15.png' },
    { num: 15, id: "running", color: "black", size: "42", productTitle: "Running nike", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "48$", img: '../assets/images/cards/16.png' },
    { num: 16, id: "other", color: "green", size: "38", productTitle: "Grass nike", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "65$", img: '../assets/images/cards/29.png' },
    { num: 17, id: "other", color: "white", size: "44", productTitle: "nike girl", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "78$", img: '../assets/images/cards/18.png' },
    { num: 18, id: "running", color: "other", size: "42", productTitle: "Nike namad", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "98$", img: '../assets/images/cards/23.png' },
    { num: 19, id: "other", color: "black", size: "43", productTitle: "Nike running", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "85$", img: '../assets/images/cards/20.png' },
    { num: 20, id: "jordan", color: "white", size: "42", productTitle: "Volleyball nike", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "58$", img: '../assets/images/cards/21.png' },
    { num: 21, id: "running", color: "black", size: "44", productTitle: "Nike running", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "84$", img: '../assets/images/cards/22.png' },
    { num: 22, id: "airforce", color: "black", size: "41", productTitle: "Dark airforce", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "69$", img: '../assets/images/cards/24.png' },
    { num: 23, id: "airforce", color: "red", size: "41", productTitle: "red Airforce", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "75$", img: '../assets/images/cards/27.png' },
    { num: 24, id: "other", color: "blue", size: "43", productTitle: "Nike soccer", desc: "Nike Sneakers combine sleek style with all-day comfort, offering durability .", price: "75$", img: '../assets/images/cards/28.png' },
];

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

        paginatedProducts.map(item => {
            const col = document.createElement('div');
            col.classList.add('col-lg-4');
            col.classList.add('card-info');
            col.innerHTML = `
                <div class="card mb-2">
                    <img src="${item.img}" class="card-img-top" data-id=${item.num} alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.productTitle}</h5>
                        <div class="d-flex">
                        <h5 class="me-1">available size:</h5>
                        <h5 class="card-title-size"> ${item.size}</h5>
                         </div>

                        <p class="card-text">${item.price}</p>
                        <div style="background-color: #81BFD3;" data-id=${item.num} class="btn shop add">see detail</div>
                        <div style="background-color: #81BFD3;" data-id=${item.num} class="btn basket"><i class="fa fa-cart-plus"></i>
                    </div>

                    </div>
                </div>
            `
            row.appendChild(col);
            
        });

        attachClickEvents()
        
        
    };




      // basket 
 
    const alertAdd = document.getElementById("basket-alert");


    document.addEventListener('click', (e) => {
        if (e.target.closest('.basket')) {
            addToCart(e);
        }
    });
    
    function addToCart(e) {
        e.preventDefault();
        console.log("Click event triggered");
    
        const target = e.target.closest('.basket'); 
    
        if (target) {
            console.log("Basket button clicked");
            alertAdd.classList.remove("d-none");
            setTimeout(() => {
                alertAdd.classList.add("d-none");
            }, 1500);
    
            const cardInfo = target.closest('.card-info');
    
            if (cardInfo) {
                console.log("Card info found");
                getCartInfo(cardInfo);
            } else {
                console.log("Card info not found");
            }
        } else {
            console.log("Clicked element is not basket button");
        }
    }
    
    function getCartInfo(cardInfo) {
        const productInfo = {
            image: cardInfo.querySelector('.card-img-top').src,
            title: cardInfo.querySelector('.card-title').textContent,
            size: cardInfo.querySelector('.card-title-size').textContent,
            price: cardInfo.querySelector('.card-text').textContent,
            id: cardInfo.querySelector('.basket').getAttribute('data-id'),
            count: 1 
        };
    
        console.log("Product Info:", productInfo);
    
        
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
        const existingProduct = cart.find(product => product.id === productInfo.id);
    
        if (existingProduct) {
            existingProduct.count++;
        } else {
           
            cart.push(productInfo);
        }
    
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    




  
    // single page 




    const attachClickEvents = () => {
        const goDetailButtons = document.querySelectorAll(".shop");
        goDetailButtons.forEach(item => {
            item.addEventListener("click", goShopping);
        });
    };

    const goShopping = (e) => {
        e.preventDefault();
        const num = e.target.getAttribute('data-id');
        const currentItem = product.filter(item => item.num === +num);
        localStorage.setItem('item', JSON.stringify(currentItem));
        navigation.navigate('../html-pages/product-detail.html');
    };







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
    });

    renderProducts();
})();



const showUserName = () => {
    const userName = JSON.parse(localStorage.getItem('user-name'));
    const userBtn = document.getElementById('user');
    const showName = document.getElementById('showName');
    const textId = document.getElementById('textId')
    if (userName) {

        textId.innerText = `you wannna log out?`;
        showName.innerText = `hi ${userName}`;
        userBtn.innerText = `log out`;

        userBtn.addEventListener('click', (e) => {
            e.preventDefault;

            localStorage.removeItem('user-name');
            navigation.reload();
        })
    }
}




(async function render() {

    showUserName();

})()





  

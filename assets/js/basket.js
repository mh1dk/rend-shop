const alertAdd = document.getElementById("basket-alert");

function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const tableBody = document.querySelector('table tbody');
    const totalPriceElement = document.getElementById('Total-price'); 

    tableBody.innerHTML = "";

    if (cart.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center;">No products in the cart.</td>
            </tr>`;
        totalPriceElement.textContent = "$0"; 
    } else {
        let totalPrice = 0; 

        cart.forEach((product, index) => {
            const row = document.createElement('tr');

            const productTotalPrice = parseFloat(product.price.replace('$', '')) * product.count;
            totalPrice += productTotalPrice; 
            row.innerHTML = `
                <th scope="row">
                    <div class="btn border delete-btn" data-index="${index}">delete</div>
                </th>
                <td  class="text-center">
                    <div>${product.count}</div> <!-- Display product count -->
                </td>
                <td  class="text-center">
                    <div>${product.price}</div>
                </td>
                <td class="text-center">
                    <div>${product.size || 'N/A'}</div>
                </td>
                <td class="text-center">
                    <div>${product.title}</div>
                </td>
                <td>
                    <div>
                        <img style="width:3.5vw ;" src="${product.image}" alt="${product.title}">
                    </div>
                </td>
            `;

            tableBody.appendChild(row);
        });

        totalPriceElement.textContent = `${totalPrice.toFixed(2)}`;

        
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }
}

function removeFromCart(event) {
    alertAdd.classList.remove("d-none");
    setTimeout(() => {
        alertAdd.classList.add("d-none");
    }, 1500);

    const index = event.target.getAttribute('data-index');
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
}

window.onload = renderCart;

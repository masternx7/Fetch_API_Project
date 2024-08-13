const fetchProduct = () => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((productRespone) => {
            product = productRespone.products;

            product.forEach(product => {
                createCard(product);
            });
        });
}

fetchProduct();


let product = [];

const createCard = (product) => {
    const productCard = document.createElement('div');
    productCard.className = 'productCard'

    const productThumnail = document.createElement('img');
    productThumnail.className = 'productThumnail';
    productThumnail.src = product.thumbnail;

    const productBottomSheet = document.createElement('div');
    productBottomSheet.className = 'productBottomSheet';

    const productInfoContainer = document.createElement('div');
    productInfoContainer.className = 'productInfo-container';

    const productName = document.createElement('strong');
    productName.className = 'productName';
    productName.innerText = product.title;

    const productCat = document.createElement('div');
    productCat.className = 'productName';
    productCat.innerText = product.category;

    const productPrice = document.createElement('div');
    productPrice.className = 'product-price';
    productPrice.innerText = '$' + product.price;

    const addToCart = document.createElement('button');
    addToCart.className = 'addToCart'
    addToCart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';

    addToCart.addEventListener('click', () => {

        if (cart[product.id] === undefined) cart[product.id] = 0;

        cart[product.id] = cart[product.id] + 1;
        updateCart();
    })

    productInfoContainer.appendChild(productName);
    productInfoContainer.appendChild(productCat);
    productInfoContainer.appendChild(productPrice);

    productBottomSheet.appendChild(productInfoContainer);
    productBottomSheet.appendChild(addToCart);

    productCard.appendChild(productThumnail);
    productCard.appendChild(productBottomSheet);

    document.querySelector('#productList').appendChild(productCard);
}


const cart = {

}

const updateCart = () => {
    let totalPrice = 0;

    document.querySelector('#cartSummary_items').replaceChildren([]);

    for (const key of Object.keys(cart)) {
        const item = product.find((product) => {
            return `${product.id}` === key;
        });

        const quantity = cart[key];
        const price = item.price;

        const itemRow = document.createElement('tr');
        const itemName = document.createElement('th');
        itemName.innerText = item.title;

        const itemQuan = document.createElement('td');
        itemQuan.innerText = quantity;

        const itemPrice = document.createElement('td');
        itemPrice.innerText = quantity * price;

        itemRow.appendChild(itemName);
        itemRow.appendChild(itemQuan);
        itemRow.appendChild(itemPrice);

        document.querySelector('#cartSummary_items').appendChild(itemRow);

        totalPrice = totalPrice + price * quantity;
    }

    document.querySelector('#cartSummary_total').innerText = totalPrice
}
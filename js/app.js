const PRODUCT_DATA = {
    hamburger: {name: "Hamburger", price: 750, img: "../mekii/assets/logo/mekii_logo1.png"},
    sajtburger: {name: "Sajtburger", price: 850, img: "../mekii/assets/logo/mekii_logo2.png"},
    csibeburger: {name: "Csibeburger", price: 950, img: "../mekii/assets/logo/mekii_logo3.png"},
    halasburger: {name: "Halasburger", price: 950, img: "../mekii/assets/logo/mekii_logo4.png"},
    veganburger: {name: "Vegánburger", price: 900, img: "../mekii/assets/logo/mekii_logo5.png"},
    duplahusos: {name: "Duplahúsos Hamburger", price: 1050, img: "../mekii/assets/logo/mekii_logo6.png"},
    duplasajt: {name: "Duplasajtos Hamburger", price: 1050, img: "../mekii/assets/logo/mekii_logo7.png"},
    baconos: {name: "Baconos Hamburger", price: 1150, img: "../mekii/assets/logo/mekii_logo8.png"},
    paníros: {name: "Wrapp panírozott hússal", price: 1050, img: "../mekii/assets/logo/mekii_logo9.png"},
    grill: {name: "Wrapp grillezett hússal", price :1050, img: "../mekii/assets/logo/mekii_logo10.png"},
    vegetarianus: {name: "Wrapp vegetáriánus", price :950, img: "../mekii/assets/logo/mekii_logo11.png"},
    epres: {name: "Epres fagylalt", price: 1150, img: "../mekii/assets/logo/mekii_logo12.png"},
    csokis: {name: "Csokis fagylalt", price: 1150, img: "../mekii/assets/logo/mekii_logo13.png"},
    meggyes: {name: "Meggyes fagylalt", price: 1150, img: "../mekii/assets/logo/mekii_logo14.png"},
    eper_csoki: {name: "Epres-Csokis fagylalt", price: 1250, img: "../mekii/assets/logo/mekii_logo15.png"},
    meggy_csoki: {name: "Meggyes-Csokis fagylalt", price: 1250, img: "../mekii/assets/logo/mekii_logo16.png"},
    kisburgonya: {name: "Sűltkrumpli kicsi", price: 750, img: "../mekii/assets/logo/mekii_logo17.png"},
    közepesburgonya: {name: "Sűltkrumpli közepes", price: 900, img: "../mekii/assets/logo/mekii_logo17.png"},
    nagykrumpli: {name: "Sűltkrumpli nagy", price: 1050, img: "../mekii/assets/logo/mekii_logo18.png"},
    ketchup: {name: "Ketchup", price: 150, img: "../mekii/assets/logo/mekii_logo19.png"},
    mustar: {name: "Mustár", price: 150, img: "../mekii/assets/logo/mekii_logo20.png"},
    majonez: {name: "Majonéz", price: 150, img: "../mekii/assets/logo/mekii_logo21.png"},
    ezersziget: {name: "Ezersziget", price: 150, img: "../mekii/assets/logo/mekii_logo22.png"},
    kapros: {name: "Kapros-tejfölös", price: 150, img: "../mekii/assets/logo/mekii_logo23.png"},
    fokhagyma: {name: "Fokhagymás-tejfölös", price: 150, img: "../mekii/assets/logo/mekii_logo24.png"},
    natur: {name: "Natur saláta", price: 1250, img: "../mekii/assets/logo/mekii_logo25.png"},
    csirkes: {name: "Csirkés saláta", price: 1350, img: "../mekii/assets/logo/mekii_logo26.png"},
    mexiko: {name: "Mexikói saláta", price: 1350, img: "../mekii/assets/logo/mekii_logo27.png"},
    mediterran: {name: "Mediterrán saláta", price: 1350, img: "../mekii/assets/logo/mekii_logo28.png"},
    rovid: {name: "Rövid kávé", price: 750, img: "../mekii/assets/logo/mekii_logo29.png"},
    hosszu: {name: "Hosszú kávé", price: 1150, img: "../mekii/assets/logo/mekii_logo29.png"},
    latte: {name: "Latte", price: 1350, img: "../mekii/assets/logo/mekii_logo30.png"},
    cappuccino: {name: "Cappuccino", price: 1350, img: "../mekii/assets/logo/mekii_logo31.png"},
    kiscola: {name: "Cola kicsi", price: 850, img: "../mekii/assets/logo/mekii_logo32.png"},
    nagycola: {name: "Cola nagy", price: 1050, img: "../mekii/assets/logo/mekii_logo32.png"},
    kisnarancs: {name: "Narancslé kicsi", price: 850, img: "../mekii/assets/logo/mekii_logo33.png"},
    nagynarancs: {name: "Narancslé nagy", price: 1050, img: "../mekii/assets/logo/mekii_logo33.png"},
    shake: {name: "Epres shake", price: 1350, img: "../mekii/assets/logo/mekii_logo34.png"},
    froccs: {name: "Alma fröccs", price: 950, img: "../mekii/assets/logo/mekii_logo35.png"},
};
const eatHere   = document.getElementById('eat_here');
const takeAway  = document.getElementById('take_away');

const screenStart = document.getElementById('screen_start');
const screenOrder = document.getElementById('screen_order');
const payScreen   = document.getElementById('pay_screen');

const categoryBoxes = document.querySelectorAll('.categories [data-target]');
const productGroups = document.querySelectorAll('.products > div');

const productCards = document.querySelectorAll('.product-card');

const detailBox   = document.getElementById('product_detail');
const detailImg   = document.getElementById('termek_kep');
const detailName  = document.getElementById('termek_nev');
const detailPrice = document.getElementById('termek_ar');
const qtySpan     = document.getElementById('ertek');

const cartBox       = document.getElementById('kosar');
const cartItemsBox  = document.getElementById('kosar_elemek');
const cartTotalSpan = document.getElementById('kosar_teljes');
const cartBackBtn   = document.getElementById('kosar_back');
const payBtn        = document.getElementById('pay');

const cartOpenBtn  = document.getElementById('cart-open');
const cartCountSpan = document.getElementById('cart-count');

const plusBtn   = document.getElementById('plus');
const minusBtn  = document.getElementById('minus');
const backBtn   = document.getElementById('back');
const addBtn    = document.getElementById('addtocart');

let lastGroupId    = null;
let currentProduct = null;
let currentQty     = 1;
let cart           = [];

function goToOrderScreen() {
    if (screenStart) screenStart.style.display = 'none';
    if (screenOrder) screenOrder.style.display = 'block';

    if (!lastGroupId && productGroups.length > 0) {
        lastGroupId = productGroups[0].id;
    }
    if (lastGroupId) {
        showProductGroup(lastGroupId);
    }
}

function showProductGroup(id) {
    productGroups.forEach(group => {
        if (group.id === id) {
        group.style.display = 'block';
        lastGroupId = id;
        } else {
        group.style.display = 'none';
        }
    });
}

function openProductDetail(productId) {
    const data = PRODUCT_DATA[productId];
    if (!data || !detailBox) return;

    currentProduct = {
        id: productId,
        name: data.name,
        price: data.price,
        img: data.img
    };
    currentQty = 1;

    if (detailImg)   detailImg.src = currentProduct.img;
    if (detailName)  detailName.textContent = currentProduct.name;
    if (detailPrice) detailPrice.textContent = currentProduct.price;
    if (qtySpan)     qtySpan.textContent = currentQty;

    productGroups.forEach(group => {
        group.style.display = 'none';
    });

    detailBox.style.display = 'block';
}

function closeProductDetail() {
    if (detailBox) detailBox.style.display = 'none';
    if (lastGroupId) {
        showProductGroup(lastGroupId);
    }
}

function updateCartView() {
    if (!cartItemsBox || !cartTotalSpan) return;

    cartItemsBox.innerHTML = '';
    let total = 0;
    let totalQty = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        totalQty += item.qty;

        const row = document.createElement('div');
        row.className = 'kosar-sor';
        row.dataset.id = item.id;

        row.innerHTML = `
        <span class="kosar-termek">${item.name}</span>
        <span class="kosar-db">${item.qty} db</span>
        <span class="kosar-osszeg">${itemTotal} Ft</span>
        <button class="remove-item">X</button>
        `;
        cartItemsBox.appendChild(row);
    });

    cartTotalSpan.textContent = total;

    if (cartCountSpan) {
        cartCountSpan.textContent = totalQty;
    }
}

function showCart() {
    if (!cartBox) return;

    if (detailBox) detailBox.style.display = 'none';
    productGroups.forEach(group => group.style.display = 'none');

    const catContainer = document.querySelector('.categories');
    if (catContainer) catContainer.style.display = 'none';

    cartBox.style.display = 'block';
}

function hideCart() {
    if (!cartBox) return;

    cartBox.style.display = 'none';

    const catContainer = document.querySelector('.categories');
    if (catContainer) catContainer.style.display = 'block';

    if (lastGroupId) {
        showProductGroup(lastGroupId);
    }
}

function showPayScreen() {
    if (!payScreen) return;

    if (cartBox) cartBox.style.display = 'none';
    if (detailBox) detailBox.style.display = 'none';

    payScreen.style.display = 'flex';

    setTimeout(() => {
        window.location.reload();
    }, 5000);
}

if (eatHere)  eatHere.addEventListener('click', goToOrderScreen);
if (takeAway) takeAway.addEventListener('click', goToOrderScreen);

categoryBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const targetId = box.dataset.target;
        if (targetId) {
        showProductGroup(targetId);
        }
    });
});

productCards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.id;
        const group = card.closest('.products > div');
        if (group && group.id) {
        lastGroupId = group.id;
        }
        openProductDetail(id);
    });
});

if (qtySpan) qtySpan.textContent = currentQty;

if (plusBtn) {
    plusBtn.addEventListener('click', () => {
        currentQty++;
        qtySpan.textContent = currentQty;
    });
}

if (minusBtn) {
    minusBtn.addEventListener('click', () => {
        if (currentQty > 1) {
        currentQty--;
        qtySpan.textContent = currentQty;
        }
    });
}

if (backBtn) {
    backBtn.addEventListener('click', () => {
        closeProductDetail();
    });
}

if (addBtn) {
    addBtn.addEventListener('click', () => {
        if (!currentProduct) return;

        const existing = cart.find(item => item.id === currentProduct.id);
        if (existing) {
        existing.qty += currentQty;
        } else {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            qty: currentQty
        });
        }

        updateCartView();
        closeProductDetail();
    });
}

if (cartItemsBox) {
    cartItemsBox.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('remove-item')) {
        const row = target.closest('.kosar-sor');
        if (!row) return;
        const id = row.dataset.id;

        cart = cart.filter(item => item.id !== id);
        updateCartView();
        }
    });
}

if (cartOpenBtn) {
    cartOpenBtn.addEventListener('click', () => {
        showCart();
    });
}

if (cartBackBtn) {
    cartBackBtn.addEventListener('click', () => {
        hideCart();
    });
}

if (payBtn) {
    payBtn.addEventListener('click', () => {
        if (!cart.length) {
        alert('A kosár üres, nincs mit fizetni 🙂');
        return;
        }
        showPayScreen();
    });
}
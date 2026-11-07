let products;
const defaultProducts = [
    { id: 5, brand: "Lucaci", name: "ម៉ាសបិទមុខ Lucaci Set", price: 5.00, stock: 10, image: "../Lucacisetmask.jpg", desc: "ម៉ាសបិទមុខម៉ាក Lucaci មានគុណភាពល្អ និងងាយស្រួលប្រើ។" },
    { id: 8, brand: "Lucaci", name: "ម៉ាស Lucaci សមុទ្រ", price: 6.00, stock: 15, image: "../lucaciformmasksomlei.jpg", desc: "ម៉ាស Lucaci សម្រាប់ថែរក្សាស្បែកមុខ និងផ្តល់ភាពស្រស់ថ្លា។" },
    { id: 9, brand: "Morea", name: "Morea Cleansing Foam", price: 12.00, stock: 12, image: "../CleansingMorea.jpg", desc: "ផលិតផលសម្អាតមុខម៉ាក Morea សម្រាប់ប្រើប្រចាំថ្ងៃ។" },
    { id: 10, brand: "Morea", name: "Morea Foam", price: 10.00, stock: 20, image: "../FourmMorea.jpg", desc: "Foam Morea សម្រាប់លាងមុខ បន្សុតភាពស្អាត។" },
    { id: 11, brand: "Morea", name: "Morea Serum", price: 18.00, stock: 8, image: "../SerurmMorea.jpg", desc: "សេរ៉ូម Morea ជួយថែរក្សាស្បែកមុខ និងបន្សុតស្នាម។" },
    { id: 12, brand: "Morea", name: "Morea Night Cream", price: 16.00, stock: 10, image: "../NigthcreamMorea.jpg", desc: "ក្រែម Night Cream Morea សម្រាប់ថែរក្សាពេលយប់។" },
    { id: 13, brand: "Morea", name: "Morea Night Cream", price: 16.00, stock: 10, image: "../NigthcreamMorea1.jpg", desc: "ក្រែម Night Cream Morea បន្ថែមសំណើម និងភាពរីករាយដល់ស្បែក។" },
    { id: 14, brand: "Morea", name: "Morea Face Mask", price: 7.00, stock: 25, image: "../maskMorea.jpg", desc: "ម៉ាសមុខ Morea សម្រាប់ថែរក្សាស្បែក និងបន្សុតសំណើម។" },
    { id: 15, brand: "Morea", name: "Morea BB Cream", price: 14.00, stock: 14, image: "../BBMorea.jpg", desc: "BB Cream Morea ធ្វើឲ្យមុខមានភាពរលោង និងថ្លាអើយ។" },
    { id: 16, brand: "Morea", name: "Morea Sunscreen", price: 20.00, stock: 12, image: "../Sunsream1,2.jpg", desc: "ក្រែមការពារផ្នែកព្រះអាទិត្យ Morea ល្បិចការពារUV។" },
    { id: 17, brand: "MMo", name: "ម៉ាក MMo Set", price: 25.00, stock: 6, image: "../SetMMo.jpg", desc: "សំណុំព្យាបាលស្បែកម៉ាក MMo។" },
    { id: 18, brand: "MN", name: "សំណុំ MN Set 1", price: 25.00, stock: 10, image: "../SetMN.jpg", desc: "សំណុំផលិតផលម៉ាក MN ដែលមានរូបភាពពិសេស។" },
    { id: 19, brand: "MN", name: "សំណុំ MN Set 2", price: 28.00, stock: 9, image: "../SetMN1.jpg", desc: "សំណុំព័ត៌មានម៉ាក MN ពេញលេញសម្រាប់ថែរក្សាស្បែក។" },
    { id: 26, brand: "Miss", name: "Miss Body Scrub", price: 12.00, stock: 15, image: "../ScrabMiss.jpg", desc: "ស្ក្រាប់ Miss ជួយបូមស្នាម និងធ្វើឲ្យស្បែករលោង។" },
    { id: 27, brand: "Miss", name: "Miss Shampoo", price: 10.00, stock: 20, image: "../ShampooMiss.jpg", desc: "សាប៊ូបោកសក់ Miss សម្រាប់សក់ស្អាត និងមានសំណើម។" },
    { id: 28, brand: "Miss", name: "Miss Night Cream", price: 15.00, stock: 11, image: "../NigthMiss.jpg", desc: "ក្រែមពេលយប់ Miss ជួយថែរក្សាស្បែកមុខ។" },
    { id: 29, brand: "Miss", name: "Miss Cushion", price: 18.00, stock: 13, image: "../CushionMiss.jpg", desc: "Cushion Miss សម្រាប់បិទជាក់ស្បែក និងមុខមានភាពរលោង។" },
    { id: 30, brand: "Miss", name: "Miss BB Cream", price: 14.00, stock: 15, image: "../BBMiss.jpg", desc: "BB Cream Miss សម្រាប់មុខមានពណ៌សុទ្ធ និងទាន់សម័យ។" },
    { id: 31, brand: "Miss", name: "Miss Makeup Set", price: 20.00, stock: 7, image: "../LeMiss.jpg", desc: "សំណុំមុខ Miss សម្រាប់ការតុបតែងប្រចាំថ្ងៃ។" },
    { id: 32, brand: "Miss", name: "Miss Beauty Set", price: 22.00, stock: 8, image: "../LekleakMIss.jpg", desc: "សំណុំធ្វើសម្រស់ Miss មានគុណភាពល្អ។" },
    { id: 34, brand: "ទឹកអប់", name: "Miss Dior", price: 35.00, stock: 5, image: "../MissDior.jpg", desc: "ទឹកអប់ Miss Dior សម្រាប់ប្រើប្រចាំថ្ងៃ និងពិសេស។" },
    { id: 35, brand: "ទឹកអប់", name: "Dior Perfume", price: 40.00, stock: 4, image: "../Dior1.jpg", desc: "ទឹកអប់ Dior មានក្លិនស្អាត និងប្រើបានយូរ។" },
    { id: 36, brand: "ទឹកអប់", name: "Blue Perfume", price: 25.00, stock: 10, image: "../Bluee.jpg", desc: "ទឹកអប់ Blue មានក្លិនស្រស់ៗ និងទាក់ទាញ។" },
    { id: 37, brand: "ទឹកអប់", name: "Saveac Perfume", price: 30.00, stock: 9, image: "../Saveac.jpg", desc: "ទឹកអប់ Saveac សម្រាប់ប្រើប្រចាំថ្ងៃ។" }
];

// ទាញយកផលិតផលពី localStorage មកប្រើប្រាស់ និងធ្វើបច្ចុប្បន្នភាពស្តុក
function loadProducts() {
    const savedProducts = localStorage.getItem('shop_products');
    if (savedProducts) {
        try {
            products = JSON.parse(savedProducts);
            defaultProducts.forEach(defaultProduct => {
                if (!products.some(product => product.id === defaultProduct.id)) {
                    products.push(defaultProduct);
                }
            });
        } catch (error) {
            products = [...defaultProducts];
        }
    } else {
        products = [...defaultProducts];
    }
}

loadProducts();

let cart = [];
let activeBrand = 'all';

function displayProducts(items) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    grid.innerHTML = "";
    items.forEach(product => {
        const stockQty = product.stock !== undefined ? product.stock : 0;
        const isOutOfStock = stockQty <= 0;
        grid.innerHTML += `
            <div class="product-card" style="opacity: ${isOutOfStock ? '0.6' : '1'};">
                <img src="${product.image}" alt="${product.name}" onclick="viewProductDetail(${product.id})" style="cursor: pointer;">
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div style="font-size: 13px; color: ${isOutOfStock ? '#e74c3c' : '#27ae60'}; margin: 5px 0;">
                        ${isOutOfStock ? '❌ អស់ពីស្តុក' : `📦 ស្តុកនៅសល់: ${stockQty}`}
                    </div>
                    <button class="btn-add" onclick="addToCart(${product.id})" ${isOutOfStock ? 'disabled style="background:#ccc; cursor:not-allowed;"' : ''}>
                        ${isOutOfStock ? 'អស់ពីស្តុក' : 'បន្ថែមចូលកាបូប'}
                    </button>
                </div>
            </div>
        `;
    });
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    const keyword = searchInput.value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(keyword) &&
        (activeBrand === 'all' || p.brand === activeBrand)
    );
    displayProducts(filtered);
}

function filterByBrand(brand, button) {
    activeBrand = brand;
    document.querySelectorAll('.brand-btn').forEach(item => item.classList.remove('active'));
    if (button) button.classList.add('active');

    const searchInput = document.getElementById('searchInput');
    const keyword = searchInput ? searchInput.value.toLowerCase() : '';
    const filtered = products.filter(p =>
        (brand === 'all' || p.brand === brand) &&
        p.name.toLowerCase().includes(keyword)
    );
    displayProducts(filtered);
}

function viewProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const detailsDiv = document.getElementById('modalProductDetails');
    const stockQty = product.stock !== undefined ? product.stock : 0;
    detailsDiv.innerHTML = `
        <img src="${product.image}" style="width:100%; max-height:220px; object-fit:cover; border-radius:8px; margin-bottom:15px;">
        <h2>${product.name}</h2>
        <p style="color: #e74c3c; font-size: 18px; font-weight: bold; margin: 10px 0;">$${product.price.toFixed(2)}</p>
        <p style="color: ${stockQty <= 0 ? '#e74c3c' : '#27ae60'}; font-size: 14px; margin-bottom: 10px;">
            ${stockQty <= 0 ? '❌ អស់ពីស្តុក' : `📦 ស្តុកនៅសល់: ${stockQty}`}
        </p>
        <p style="color: #666; margin-bottom: 20px; font-size: 14px;">${product.desc || ''}</p>
        <button class="btn-add" onclick="addToCart(${product.id}); closeProductModal();" ${stockQty <= 0 ? 'disabled style="background:#ccc; cursor:not-allowed;"' : ''}>
            ${stockQty <= 0 ? 'អស់ពីស្តុក' : 'បន្ថែមចូលកាបូបទំនិញ'}
        </button>
    `;
    document.getElementById('productModal').style.display = 'flex';
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        if (product.stock !== undefined && product.stock <= 0) {
            alert("ទំនិញនេះអស់ពីស្តុកហើយ!");
            return;
        }
        cart.push(product);
        updateCartCount();
        alert("បានបន្ថែម " + product.name + " ចូលក្នុងកាបូបរួចរាល់!");
    }
}

function updateCartCount() {
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) cartCountEl.innerText = cart.length;
}

function openCartModal() {
    const listDiv = document.getElementById('cartItemsList');
    if (!listDiv) return;
    listDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        listDiv.innerHTML = "<p style='text-align:center; color:#777;'>កាបូបទំនិញរបស់អ្នកទទេរ</p>";
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            listDiv.innerHTML += `
                <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <span>${item.name}</span>
                    <span>$${item.price.toFixed(2)}</span>
                    <button onclick="removeFromCart(${index})" style="background:#e74c3c; color:white; border:none; padding:3px 8px; border-radius:3px; cursor:pointer;">លុប</button>
                </div>
            `;
        });
    }
    const cartTotalEl = document.getElementById('cartTotal');
    if (cartTotalEl) cartTotalEl.innerText = total.toFixed(2);
    document.getElementById('cartModal').style.display = 'flex';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    openCartModal();
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

function toggleMenu() {
    const menu = document.getElementById('mainMenu');
    const button = document.getElementById('menuToggle');
    if (!menu || !button) return;
    const isOpen = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    button.setAttribute('aria-label', isOpen ? 'បិទម៉ឺនុយ' : 'បើកម៉ឺនុយ');
}

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.menu-link').forEach(item => item.classList.remove('active'));
        link.classList.add('active');

        const menu = document.getElementById('mainMenu');
        if (menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            const toggleBtn = document.getElementById('menuToggle');
            if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// មុខងារបញ្ជាទិញ កាត់បន្ថយស្តុកស្វ័យប្រវត្តិ និងរក្សាទុកប្រវត្តិការបញ្ជាទិញសម្រាប់ Admin
function checkoutToTelegram() {
    if (cart.length === 0) {
        alert("សូមជ្រើសរើសទំនិញជាមុនសិន!");
        return;
    }

    const nameEl = document.getElementById('custName');
    const phoneEl = document.getElementById('custPhone');
    const addressEl = document.getElementById('custAddress');

    if (!nameEl || !phoneEl || !addressEl) return;

    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    const address = addressEl.value.trim();

    if (!name || !phone || !address) {
        alert("សូមបំពេញ ឈ្មោះ លេខទូរស័ព្ទ និងទីតាំងរបស់អ្នកឱ្យបានគ្រប់គ្រាន់!");
        return;
    }

    // កាត់បន្ថយចំនួនស្តុកផលិតផលក្នុងប្រព័ន្ធស្វ័យប្រវត្តិ
    cart.forEach(cartItem => {
        const prod = products.find(p => p.id === cartItem.id);
        if (prod && prod.stock > 0) {
            prod.stock -= 1;
        }
    });
    localStorage.setItem('shop_products', JSON.stringify(products));

    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });

    // រក្សាទុកប្រវត្តិការបញ្ជាទិញចូលក្នុង localStorage (shop_orders)
    const newOrder = {
        date: new Date().toLocaleString('km-KH'),
        name: name,
        phone: phone,
        address: address,
        cart: [...cart],
        total: total
    };

    let existingOrders = JSON.parse(localStorage.getItem('shop_orders')) || [];
    existingOrders.unshift(newOrder);
    localStorage.setItem('shop_orders', JSON.stringify(existingOrders));

    // បង្កើតសារសម្រាប់ផ្ញើចូល Telegram
    let orderText = `🛒 *មានការបញ្ជាទិញថ្មីពី Online Shop* 🛒\n\n`;
    orderText += `👤 *អតិថិជន:* ${name}\n`;
    orderText += `📞 *លេខទូរស័ព្ទ:* ${phone}\n`;
    orderText += `📍 *ទីតាំង:* ${address}\n\n`;
    orderText += `📦 *បញ្ជីទំនិញ៖*\n`;

    cart.forEach((item, i) => {
        orderText += `${i + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
    });

    orderText += `\n💰 *ទឹកប្រាក់សរុប:* $${total.toFixed(2)}`;

    const telegramUsername = "Pheichingsorn"; 
    const telegramUrl = `https://t.me/${telegramUsername}?text=${encodeURIComponent(orderText)}`;
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');

    // សម្អាតកាបូបទំនិញ និងបង្ហាញទំនិញឡើងវិញ
    cart = [];
    updateCartCount();
    closeCartModal();
    displayProducts(products);
}

// បង្ហាញទំនិញពេលចាប់ផ្តើមដំណើរការទំព័រ
displayProducts(products);
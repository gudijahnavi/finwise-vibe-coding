/* ============ PRODUCT DATA ============ */
const products = [
  { id: 1, name: "Wireless Earbuds",   category: "Electronics", price: 1499, emoji: "🎧", desc: "20-hr battery, active noise cancellation." },
  { id: 2, name: "Smart Watch",        category: "Electronics", price: 2299, emoji: "⌚",  desc: "Heart-rate, sleep, and step tracking." },
  { id: 3, name: "Bluetooth Speaker",  category: "Electronics", price: 999,  emoji: "🔊", desc: "Compact speaker, 12-hr playtime." },
  { id: 4, name: "Cotton Kurta",       category: "Fashion",     price: 899,  emoji: "👕", desc: "Breathable everyday cotton kurta." },
  { id: 5, name: "Canvas Sneakers",    category: "Fashion",     price: 1299, emoji: "👟", desc: "Lightweight, all-day comfort." },
  { id: 6, name: "Leather Wallet",     category: "Fashion",     price: 649,  emoji: "👛", desc: "Slim bifold, genuine leather." },
  { id: 7, name: "Desk Lamp",          category: "Home",        price: 649,  emoji: "💡", desc: "Adjustable warm-white LED lamp." },
  { id: 8, name: "Ceramic Mug Set",    category: "Home",        price: 549,  emoji: "☕", desc: "Set of 4, dishwasher safe." },
  { id: 9, name: "Cozy Throw Blanket", category: "Home",        price: 899,  emoji: "🧣", desc: "Soft woven blanket, 130x150cm." },
  { id: 10, name: "Face Serum",        category: "Beauty",      price: 799,  emoji: "🧴", desc: "Vitamin C brightening serum." },
  { id: 11, name: "Matte Lipstick",    category: "Beauty",      price: 399,  emoji: "💄", desc: "Long-wear, 6 shades available." },
  { id: 12, name: "Hair Dryer",        category: "Beauty",      price: 1199, emoji: "💇", desc: "Ionic technology, 3 heat settings." },
];

/* ============ STATE ============ */
let activeFilter = "all";
let searchTerm = "";
const cart = {}; // { id: qty }

/* ============ ELEMENTS ============ */
const productGrid   = document.getElementById("productGrid");
const filters        = document.getElementById("filters");
const searchInput   = document.getElementById("searchInput");
const cartToggle     = document.getElementById("cartToggle");
const cartClose      = document.getElementById("cartClose");
const cartDrawer     = document.getElementById("cartDrawer");
const cartOverlay    = document.getElementById("cartOverlay");
const cartItemsEl    = document.getElementById("cartItems");
const cartEmptyEl    = document.getElementById("cartEmpty");
const cartCountEl    = document.getElementById("cartCount");
const cartTotalEl    = document.getElementById("cartTotal");
const checkoutBtn    = document.getElementById("checkoutBtn");

/* ============ RENDER PRODUCTS ============ */
function renderProducts() {
  const filtered = products.filter(p => {
    const matchesFilter = activeFilter === "all" || p.category === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  productGrid.innerHTML = filtered.map(p => `
    <article class="card">
      <div class="card-media">${p.emoji}</div>
      <div class="card-body">
        <p class="card-tag">${p.category}</p>
        <h3 class="card-title">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-foot">
          <span class="card-price">₹${p.price.toLocaleString("en-IN")}</span>
          <button class="add-btn" data-id="${p.id}">Add</button>
        </div>
      </div>
    </article>
  `).join("") || `<p style="color:var(--ink-soft)">No products match your search.</p>`;
}

/* ============ FILTER BUTTONS ============ */
filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filters.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter;
  renderProducts();
});

/* ============ SEARCH ============ */
searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderProducts();
});

/* ============ ADD TO CART ============ */
productGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  openCart();
});

/* ============ RENDER CART ============ */
function renderCart() {
  const ids = Object.keys(cart);
  let total = 0;
  let count = 0;

  if (ids.length === 0) {
    cartItemsEl.innerHTML = "";
    cartEmptyEl.style.display = "block";
  } else {
    cartEmptyEl.style.display = "none";
    cartItemsEl.innerHTML = ids.map(id => {
      const p = products.find(p => p.id === Number(id));
      const qty = cart[id];
      const lineTotal = p.price * qty;
      total += lineTotal;
      count += qty;
      return `
        <div class="cart-item">
          <div>
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-meta">₹${p.price.toLocaleString("en-IN")} × ${qty}</div>
          </div>
          <button class="cart-item-remove" data-id="${id}">Remove</button>
        </div>
      `;
    }).join("");
  }

  Object.keys(cart).forEach(id => {
    const p = products.find(p => p.id === Number(id));
    total += 0; // already summed above; kept for clarity
  });

  cartCountEl.textContent = count;
  cartTotalEl.textContent = `₹${total.toLocaleString("en-IN")}`;
}

cartItemsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".cart-item-remove");
  if (!btn) return;
  delete cart[btn.dataset.id];
  renderCart();
});

/* ============ CART DRAWER TOGGLE ============ */
function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
}
cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* ============ CHECKOUT ============ */
checkoutBtn.addEventListener("click", () => {
  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty. Add a product first!");
    return;
  }
  alert("Order confirmed! Thank you for shopping with ShopEZ.");
  Object.keys(cart).forEach(id => delete cart[id]);
  renderCart();
  closeCart();
});

/* ============ INIT ============ */
renderProducts();
renderCart();

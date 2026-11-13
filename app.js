/**
 * MANU MODA ÍNTIMA - LUXURY E-COMMERCE CORE APP
 * Handcrafted with vanilla JavaScript for performance and smooth UX
 */

// Phone for WhatsApp checkout & assistance (configure as needed)
const WHATSAPP_PHONE = '69999217218';

// Products catalog
const PRODUCTS = [
  {
    id: 1,
    name: 'Conjunto Manu Rosa Imperial',
    category: 'conjuntos',
    categoryLabel: 'Conjuntos Rendados',
    badge: { text: 'Assinatura 👑', type: 'exclusive' },
    image: 'images/conjunto-manu-rosa.jpg',
    oldPrice: 189.90,
    price: 149.90,
    installments: '3x de R$ 49,96 sem juros',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Rosa Imperial', hex: '#e60067' },
      { name: 'Preto Noir', hex: '#121016' }
    ],
    rating: 5.0,
    reviewsCount: 48,
    description: 'O conjunto ícone da Manu Moda Íntima! Sutiã com bojo delicado, aro de sustentação e renda francesa premium magenta sobreposta em tule macio. Acompanha calcinha modelo caleçon rendada com forro 100% algodão hipoalergênico.',
    fabric: 'Renda Francesa (90% Poliamida, 10% Elastano), Forro 100% Algodão'
  },
  {
    id: 2,
    name: 'Conjunto Noir Renda Francesa',
    category: 'conjuntos',
    categoryLabel: 'Conjuntos Rendados',
    badge: { text: 'Mais Vendido 🔥', type: 'hot' },
    image: 'images/conjunto-noir-luxo.jpg',
    oldPrice: 179.90,
    price: 139.90,
    installments: '3x de R$ 46,63 sem juros',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Preto Noir', hex: '#121016' },
      { Aviso: 'Champagne Nude', hex: '#d4a373' }
    ],
    rating: 4.9,
    reviewsCount: 62,
    description: 'Sedução atemporal e elegância sem esforço. Confeccionado em renda guipir de alto relevo com acabamentos em dourado reluzente nas fivelas e alças reguláveis. Calcinha fio duplo anatômico que não marca sob a roupa.',
    fabric: 'Renda Guipir Importada (88% Poliamida, 12% Elastano)'
  },
  {
    id: 3,
    name: 'Body Renda & Tule Sedução',
    category: 'bodies',
    categoryLabel: 'Bodies & Corpetes: INDISPONIVEL!',
    badge: { text: 'Destaque ✨', type: 'hot' },
    image: 'images/body-renda-luxo.jpg',
    oldPrice: 229.90,
    price: 179.90,
    installments: '4x de R$ 44,97 sem juros',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Preto Noir', hex: '#121016' },
    ],
    rating: 5.0,
    reviewsCount: 39,
    description: 'Peça de alta costura com caimento escultural. Decote profundo em V com estrutura que desenha a silhueta com extrema delicadeza. Perfeito tanto para ocasiões íntimas inesquecíveis quanto para compor looks sofisticados com terninho.',
    fabric: 'Tule Ilusion & Renda Floral (85% Poliamida, 15% Elastano)'
  },
  {
    id: 4,
    name: 'Robe de Cetim & Renda Paris',
    category: 'robes',
    categoryLabel: 'Robes & Camisolas: INDISPONIVEL!',
    badge: { text: 'Luxo Boudoir 💎', type: 'exclusive' },
    image: 'images/robe-seda-rose.jpg',
    oldPrice: 249.90,
    price: 199.90,
    installments: '4x de R$ 49,97 sem juros',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Rose Champagne', hex: '#e8b4a6' },
      { name: 'Preto Seda', hex: '#121016' },
    ],
    rating: 4.9,
    reviewsCount: 31,
    description: 'O ápice do requinte e conforto. Toque sedoso ultra macio com brilho acetinado, mangas amplas adornadas com barrado rendado feito à mão. Acompanha faixa regulável com passantes para perfeito ajuste na cintura.',
    fabric: 'Cetim com Toque de Seda (97% Poliéster, 3% Elastano), Renda Chantilly'
  },
  {
    id: 5,
    name: 'Conjunto Rubi Strappy Passion',
    category: 'strappy',
    categoryLabel: 'Sensual & Strappy',
    badge: { text: 'Edição Especial 💋', type: 'hot' },
    image: 'images/conjunto-rubi-luxo.jpg',
    oldPrice: 199.90,
    price: 159.90,
    installments: '3x de R$ 53,30 sem juros',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Vermelho Rubi', hex: '#99002b' },
      { name: 'Preto Clássico', hex: '#121016' }
    ],
    rating: 5.0,
    reviewsCount: 54,
    description: 'Desperte a paixão com linhas sensuais strappy que emolduram o colo e a silhueta. Fecho frontal dourado com acabamento anti-oxidação e calcinha fio dental com laterais triplas ajustáveis.',
    fabric: 'Renda Elástica Soft (92% Poliamida, 8% Elastano)'
  },
  {
    id: 6,
    name: 'Camisola Luxo Cetim & Renda Rosa',
    category: 'robes',
    categoryLabel: 'Robes & Camisolas',
    badge: { text: 'Novo 🌸', type: 'exclusive' },
    image: 'images/Vestido_rosa.jpg',
    oldPrice: 99.90,
    price: 80.00,
    installments: '2x de R$ 40,00 sem juros',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Rosa Delicado', hex: '#ffb6c1' }
    ],
    rating: 5.0,
    reviewsCount: 18,
    description: 'Camisola sensual em cetim macio com detalhes em renda no decote e caimento fluido impecável. Proporciona extrema leveza, elegância e conforto para suas noites.',
    fabric: 'Cetim Acetinado com Renda (95% Poliéster, 5% Elastano)'
  },
  {
    id: 7,
    name: 'Camisola Sedução Renda & Cetim Vermelha',
    category: 'robes',
    categoryLabel: 'Robes & Camisolas',
    badge: { text: 'Novo 🔥', type: 'hot' },
    image: 'images/Vestido_vermelho.jpg',
    oldPrice: 99.90,
    price: 80.00,
    installments: '2x de R$ 40,00 sem juros',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Vermelho Paixão', hex: '#d00000' }
    ],
    rating: 5.0,
    reviewsCount: 22,
    description: 'Camisola sensual vermelha com acabamento nobre em renda guipir e decote desenhado. Toque acetinado ultra suave com alças ajustáveis para valorizar o colo.',
    fabric: 'Cetim Premium e Renda Elástica (95% Poliéster, 5% Elastano)'
  },
  {
    id: 8,
    name: 'Sutiã Rendado Top Sustentação Premium',
    category: 'sutias',
    categoryLabel: 'Sutiãs & Tops',
    badge: { text: 'Sucesso ⭐', type: 'hot' },
    image: 'images/sutias_lingerie.jpg',
    oldPrice: 79.90,
    price: 60.00,
    installments: '2x de R$ 30,00 sem juros',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Rosê Nude', hex: '#d8a47f' },
      { name: 'Azul Marinho', hex: '#1b263b' },
      { name: 'Coral Vibrante', hex: '#ff6f61' },
      { name: 'Vinhote/Bordô', hex: '#6b1124' },
      { name: 'Verde Menta', hex: '#80b9ad' }
    ],
    rating: 4.9,
    reviewsCount: 35,
    description: 'Sutiã com bojo estruturado e base em renda ancha anatômica de alta sustentação. Modela o busto com máximo conforto sem apertar as costas.',
    fabric: 'Renda Poliamida Soft com Bojo Anatômico (90% Poliamida, 10% Elastano)'
  },
  {
    id: 9,
    name: 'Gel Corporal Térmico & Sabonete Yummy 15ml',
    category: 'cosmeticos',
    categoryLabel: 'Cosméticos & Íntimos',
    badge: { text: 'Favorito 🍓', type: 'exclusive' },
    image: 'images/sabonete_intimo.jpg',
    oldPrice: 28.90,
    price: 20.00,
    installments: 'À vista ou cartão',
    sizes: ['15ml'],
    colors: [
      { name: 'Morango', hex: '#ff4d4d' },
      { name: 'Chocolate', hex: '#4a2c11' },
      { name: 'Caipirinha', hex: '#8ecae6' },
      { name: 'Menta', hex: '#2a9d8f' },
      { name: 'Leite Condensado', hex: '#faedcd' },
      { name: 'Framboesa', hex: '#e63946' },
      { name: 'Chiclete', hex: '#ff70a6' },
      { name: 'Ice Menta', hex: '#00b4d8' }
    ],
    rating: 5.0,
    reviewsCount: 41,
    description: 'Gel corporal com sensação térmica e aromas deliciosos da linha Sexy Fantasy Yummy! Ideal para momentos íntimos especiais, massagens sensuais e cuidado com aroma marcante.',
    fabric: 'Fórmula Dermatologicamente e Ginecologicamente Testada (15ml)'
  },
  {
    id: 10,
    name: 'Desodorante Íntimo Cheirosa Bio Instinto 50ml',
    category: 'cosmeticos',
    categoryLabel: 'Cosméticos & Íntimos',
    badge: { text: 'Perfume 🌸', type: 'exclusive' },
    image: 'images/desodorante_intimo.jpg',
    oldPrice: 39.90,
    price: 30.00,
    installments: 'À vista ou cartão',
    sizes: ['50ml'],
    colors: [
      { name: 'Flores Delicadas', hex: '#b5838d' },
      { name: 'Cereja', hex: '#9e2a2b' },
      { name: 'Vanilla Ice Cream', hex: '#e9c46a' },
      { name: 'Rosa Mosqueta', hex: '#f4a261' },
      { name: 'Algodão Doce', hex: '#a8dede' }
    ],
    rating: 5.0,
    reviewsCount: 29,
    description: 'Desodorante íntimo com ação 8h de proteção, óleo de rosa mosqueta e colágeno. Mantém o frescor, perfuma suavemente e neutraliza odores com segurança diária.',
    fabric: 'Testado Dermatologicamente & Ginecologicamente (50ml)'
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('manu_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('manu_wishlist') || '[]');
let currentCategory = 'all';
let searchQuery = '';
let discountPercent = 0;
let currentCoupon = 'MANU10';

// Free shipping goal
const FREE_SHIPPING_THRESHOLD = 199.00;
const STANDARD_SHIPPING = 19.90;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  initFaq();
  initModals();
  initSizeCalculator();
  initCustomizer();
  initIsMascot();
});

/* --------------------------------------------------------------------------
   NAVBAR INTERACTIONS
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   PRODUCT RENDERING & FILTERING
   -------------------------------------------------------------------------- */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(prod => {
    const matchCategory = (currentCategory === 'all' || prod.category === currentCategory);
    const matchSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">Nenhuma lingerie encontrada para esta busca.</p>
        <button class="btn-secondary" onclick="resetFilters()">Ver Todas as Peças</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-media">
          <span class="badge-tag ${product.badge.type}">${product.badge.text}</span>
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist(${product.id}, event)" 
                  title="${isWishlisted ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" />
          
          <button class="quickview-trigger" onclick="openQuickView(${product.id})">
            ✨ Espiar Detalhes
          </button>
        </div>

        <div class="product-content">
          <span class="product-category">${product.categoryLabel}</span>
          <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>

          <div class="product-rating">
            <div class="stars">
              ${'★'.repeat(Math.floor(product.rating))}
            </div>
            <span>${product.rating.toFixed(1)} (${product.reviewsCount})</span>
          </div>

          <div class="product-price-row">
            <div class="price-box">
              <span class="old-price">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span>
              <span class="current-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="installment-text">${product.installments}</div>
          </div>

          <div class="options-row">
            <div class="sizes-list" id="sizes-${product.id}">
              ${product.sizes.map((s, idx) => `
                <button type="button" class="size-pill ${idx === 1 ? 'selected' : ''}" 
                        onclick="selectCardSize(${product.id}, '${s}', this)">
                  ${s}
                </button>
              `).join('')}
            </div>

            <div class="color-dots">
              ${product.colors.map(c => `
                <span class="color-dot" style="background: ${c.hex};" title="${c.name}"></span>
              `).join('')}
            </div>
          </div>

          <div class="product-actions">
            <button class="btn-add-cart" onclick="quickAddToCart(${product.id})">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Adicionar
            </button>
            <button class="btn-quick-wpp" onclick="orderOnWhatsAppQuick(${product.id})" title="Pedir no WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.225-.652.075s-1.272-.469-2.423-1.496c-.895-.799-1.5-1.786-1.675-2.087-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.525.15-.175.2-.3.301-.5.101-.2.05-.375-.025-.525s-.678-1.635-.929-2.24c-.244-.589-.492-.51-.678-.52l-.577-.01c-.2 0-.526.075-.802.375s-1.054 1.03-1.054 2.513 1.079 2.914 1.23 3.114c.15.2 2.123 3.242 5.143 4.547.718.311 1.278.497 1.716.637.722.23 1.378.197 1.898.12.579-.086 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12 2a10 10 0 0 0-8.6 15.1L2 22l5.05-1.33A9.97 9.97 0 0 0 12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Category filter button click handler
function filterCategory(cat, element) {
  currentCategory = cat;
  document.querySelectorAll('.pill-btn').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');
  renderProducts();
}

// Live search handler
function handleSearch(query) {
  searchQuery = query;
  renderProducts();
}

function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.pill-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === 0);
  });
  renderProducts();
}

// Size selection on card
function selectCardSize(productId, size, btn) {
  const container = document.getElementById(`sizes-${productId}`);
  if (container) {
    container.querySelectorAll('.size-pill').forEach(p => p.classList.remove('selected'));
    btn.classList.add('selected');
  }
}

function getSelectedCardSize(productId) {
  const container = document.getElementById(`sizes-${productId}`);
  if (!container) return 'M';
  const selected = container.querySelector('.size-pill.selected');
  return selected ? selected.innerText.trim() : 'M';
}

/* --------------------------------------------------------------------------
   CART STATE & OPERATIONS
   -------------------------------------------------------------------------- */
function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const size = getSelectedCardSize(productId);
  const color = product.colors[0].name;

  addToCart(product, size, color, 1);
}

function addToCart(product, size, color, qty = 1) {
  const existingIndex = cart.findIndex(
    item => item.id === product.id && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      color: color,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`✨ "${product.name}" adicionado à sacola!`);
  openCartDrawer();
  if (window.IsCompanion) IsCompanion.onAddToCart(product.name);
}

function updateCartItemQty(index, change) {
  if (!cart[index]) return;
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  const removedName = cart[index].name;
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast(`Item removido da sacola.`);
}

function saveCart() {
  localStorage.setItem('manu_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const countBadge = document.getElementById('cartBadgeCount');
  const itemsContainer = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountEl = document.getElementById('cartDiscount');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');
  const freeShippingBar = document.getElementById('freeShippingBar');
  const freeShippingText = document.getElementById('freeShippingText');

  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  if (countBadge) countBadge.innerText = totalCount;

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p style="font-size: 1.05rem; font-weight: 500; color: #fff;">Sua sacola está vazia</p>
        <p style="font-size: 0.85rem; max-width: 240px;">Descubra nossas coleções exclusivas e sinta-se deslumbrante!</p>
        <button class="btn-primary" style="margin-top: 10px;" onclick="closeCartDrawer();">Explorar Coleção</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = 'R$ 0,00';
    if (discountEl) discountEl.innerText = 'R$ 0,00';
    if (shippingEl) shippingEl.innerText = 'R$ 0,00';
    if (totalEl) totalEl.innerText = 'R$ 0,00';
    if (freeShippingBar) freeShippingBar.style.width = '0%';
    if (freeShippingText) freeShippingText.innerText = `Frete Grátis a partir de R$ ${FREE_SHIPPING_THRESHOLD.toFixed(2).replace('.', ',')}`;

    const summaryBox = document.getElementById('cartOrderSummaryBox');
    const codePreview = document.getElementById('cartOrderCodePreview');
    if (summaryBox) summaryBox.style.display = 'none';
    if (codePreview) codePreview.innerText = '';
    return;
  }

  // Render items
  itemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-details">
        <div>
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-variants">Tamanho: ${item.size} | Cor: ${item.color}</div>
        </div>
        <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartItemQty(${index}, -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartItemQty(${index}, 1)">+</button>
          </div>
          <button class="btn-remove-item" onclick="removeCartItem(${index})">Remover</button>
        </div>
      </div>
    </div>
  `).join('');

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discount = subtotal * (discountPercent / 100);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = isFreeShipping ? 0 : STANDARD_SHIPPING;
  const finalTotal = (subtotal - discount) + shipping;

  if (subtotalEl) subtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (discountEl) discountEl.innerText = `- R$ ${discount.toFixed(2).replace('.', ',')} (${discountPercent}%)`;
  if (shippingEl) shippingEl.innerText = isFreeShipping ? 'GRÁTIS 🎉' : `R$ ${shipping.toFixed(2).replace('.', ',')}`;
  if (totalEl) totalEl.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

  // Update Live Order Summary Code Box
  const summaryBox = document.getElementById('cartOrderSummaryBox');
  const codePreview = document.getElementById('cartOrderCodePreview');
  if (cart.length > 0) {
    const orderCode = generateOrderCode();
    if (summaryBox) summaryBox.style.display = 'block';
    if (codePreview) codePreview.innerText = orderCode;
  } else {
    if (summaryBox) summaryBox.style.display = 'none';
    if (codePreview) codePreview.innerText = '';
  }

  // Shipping progress bar
  if (freeShippingBar && freeShippingText) {
    const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
    freeShippingBar.style.width = `${progressPercent}%`;
    if (isFreeShipping) {
      freeShippingText.innerHTML = `<strong>Parabéns!</strong> Você garantiu <strong>Frete Grátis</strong> para todo o Brasil! ✨`;
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      freeShippingText.innerHTML = `Adicione mais <strong>R$ ${remaining.toFixed(2).replace('.', ',')}</strong> para ganhar <strong>Frete Grátis</strong>!`;
    }
  }
}

// Drawer Controls
function openCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay && drawer) {
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay && drawer) {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Apply Promo Coupon
function applyCoupon() {
  const input = document.getElementById('couponInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'MANU10') {
    discountPercent = 10;
    currentCoupon = 'MANU10';
    showToast('✨ Cupom MANU10 aplicado: 10% de desconto!');
    updateCartUI();
    if (window.IsCompanion) IsCompanion.onCoupon();
  } else if (code === 'PRIMEIRACOMPRA') {
    discountPercent = 15;
    currentCoupon = 'PRIMEIRACOMPRA';
    showToast('✨ Cupom PRIMEIRACOMPRA aplicado: 15% de desconto!');
    updateCartUI();
    if (window.IsCompanion) IsCompanion.onCoupon();
  } else if (code === '') {
    showToast('Digite um cupom de desconto.');
  } else {
    showToast('Cupom inválido ou expirado.');
  }
}

/* --------------------------------------------------------------------------
   WHATSAPP ORDER CHECKOUT & CODE GENERATOR
   -------------------------------------------------------------------------- */
function generateOrderCode() {
  if (cart.length === 0) return '';

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discount = subtotal * (discountPercent / 100);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = isFreeShipping ? 0 : STANDARD_SHIPPING;
  const total = (subtotal - discount) + shipping;

  let code = `🛍️ *PEDIDO MANU MODA ÍNTIMA*\n`;
  code += `----------------------------------\n`;
  cart.forEach((item, idx) => {
    code += `${idx + 1}. *${item.name}*\n`;
    code += `   • Tam: ${item.size} | Cor: ${item.color}\n`;
    code += `   • Qtd: ${item.qty}x | Preço: R$ ${item.price.toFixed(2).replace('.', ',')}\n`;
    code += `   • Subtotal: R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}\n\n`;
  });
  code += `----------------------------------\n`;
  code += `• Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
  if (discount > 0) {
    code += `• Desconto (${currentCoupon}): -R$ ${discount.toFixed(2).replace('.', ',')}\n`;
  }
  code += `• Frete: ${isFreeShipping ? 'Grátis 🎉' : `R$ ${shipping.toFixed(2).replace('.', ',')}`}\n`;
  code += `*TOTAL DO PEDIDO: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
  code += `----------------------------------`;

  return code;
}

function copyOrderCodeOnly() {
  const code = generateOrderCode();
  if (!code) {
    showToast('Sua sacola está vazia.');
    return;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => {
      showToast('📋 Código do pedido copiado com sucesso!');
    }).catch(err => {
      console.error('Erro ao copiar código:', err);
      showToast('📋 Código disponível no resumo.');
    });
  } else {
    showToast('📋 Código disponível no resumo.');
  }
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast('Sua sacola está vazia.');
    return;
  }

  const orderCode = generateOrderCode();

  // Copy order code directly to clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(orderCode).then(() => {
      showToast('📋 Código do pedido copiado! Redirecionando para o WhatsApp...');
    }).catch(err => {
      console.error('Erro ao copiar código:', err);
      showToast('Redirecionando para o WhatsApp...');
    });
  } else {
    showToast('Redirecionando para o WhatsApp...');
  }

  const fullMsg = `Olá, Manu Moda Íntima! Gostaria de finalizar meu pedido:\n\n${orderCode}\n\nComo posso realizar o pagamento e envio? 💕`;
  const encodedUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(fullMsg)}`;

  setTimeout(() => {
    window.open(encodedUrl, '_blank');
  }, 400);
}

function orderOnWhatsAppQuick(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const size = getSelectedCardSize(productId);

  let msg = `*Olá, Manu Moda Íntima!* 🌸\n\n`;
  msg += `Gostaria de saber mais e fazer o pedido da peça:\n`;
  msg += `*${product.name}*\n`;
  msg += `• Tamanho: ${size}\n`;
  msg += `• Valor: R$ ${product.price.toFixed(2).replace('.', ',')}\n\n`;
  msg += `Está disponível para envio imediato? 💕`;

  const encodedUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(msg)}`;
  window.open(encodedUrl, '_blank');
}

/* --------------------------------------------------------------------------
   WISHLIST (FAVORITOS)
   -------------------------------------------------------------------------- */
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Removido dos favoritos.');
  } else {
    wishlist.push(productId);
    showToast('💖 Adicionado aos seus favoritos!');
  }
  localStorage.setItem('manu_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlistBadgeCount');
  if (badge) badge.innerText = wishlist.length;
}

/* --------------------------------------------------------------------------
   QUICK VIEW MODAL
   -------------------------------------------------------------------------- */
let activeQuickViewProduct = null;
let selectedModalSize = 'M';
let selectedModalColor = '';

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeQuickViewProduct = product;
  selectedModalSize = product.sizes[0] || 'M';
  selectedModalColor = product.colors[0]?.name || '';

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="quickview-grid">
      <div>
        <img src="${product.image}" alt="${product.name}" class="quickview-img" />
      </div>

      <div class="quickview-info">
        <span class="product-category">${product.categoryLabel}</span>
        <h2 class="quickview-title">${product.name}</h2>

        <div class="product-rating" style="margin-bottom: 12px;">
          <div class="stars">${'★'.repeat(Math.floor(product.rating))}</div>
          <span>${product.rating.toFixed(1)} (${product.reviewsCount} avaliações de clientes satisfeitas)</span>
        </div>

        <div class="quickview-price">
          <span class="old-price" style="font-size: 1rem; margin-right: 8px;">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span>
          R$ ${product.price.toFixed(2).replace('.', ',')}
          <div style="font-size: 0.8rem; font-weight: 400; color: var(--rose-gold); margin-top: 4px;">
            ${product.installments}
          </div>
        </div>

        <p class="quickview-desc">${product.description}</p>
        
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 18px; padding: 10px; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid var(--border-subtle);">
          🧵 <b>Composição:</b> ${product.fabric}
        </div>

        <!-- Color Selection -->
        <span class="quickview-selector-title">Cor Selecionada: <span id="modalColorLabel" style="color:#fff;">${selectedModalColor}</span></span>
        <div style="display: flex; gap: 10px; margin-bottom: 20px;">
          ${product.colors.map((c, i) => `
            <button class="color-dot" 
                    style="background: ${c.hex}; width: 26px; height: 26px; cursor: pointer; border: 2px solid ${i === 0 ? 'var(--primary-pink)' : '#333'};" 
                    onclick="selectModalColor('${c.name}', this)"></button>
          `).join('')}
        </div>

        <!-- Size Selection -->
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="quickview-selector-title">Tamanho:</span>
          <button style="font-size: 0.75rem; color: var(--rose-gold); text-decoration: underline; margin-bottom: 8px;" onclick="openSizeGuide()">
            📐 Guia de Medidas
          </button>
        </div>
        <div style="display: flex; gap: 8px; margin-bottom: 26px;">
          ${product.sizes.map((s, idx) => `
            <button class="size-pill ${idx === 0 ? 'selected' : ''}" 
                    style="width: 38px; height: 38px; font-size: 0.85rem;" 
                    onclick="selectModalSize('${s}', this)">
              ${s}
            </button>
          `).join('')}
        </div>

        <div style="display: flex; gap: 12px;">
          <button class="btn-primary" style="flex: 1;" onclick="addModalProductToCart()">
            Adicionar à Sacola
          </button>
          <button class="btn-secondary" onclick="openWhatsAppModalProduct()">
            Comprar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectModalSize(size, btn) {
  selectedModalSize = size;
  const container = btn.parentElement;
  container.querySelectorAll('.size-pill').forEach(p => p.classList.remove('selected'));
  btn.classList.add('selected');
}

function selectModalColor(colorName, btn) {
  selectedModalColor = colorName;
  const label = document.getElementById('modalColorLabel');
  if (label) label.innerText = colorName;
  const container = btn.parentElement;
  container.querySelectorAll('.color-dot').forEach(d => d.style.borderColor = '#333');
  btn.style.borderColor = 'var(--primary-pink)';
}

function addModalProductToCart() {
  if (!activeQuickViewProduct) return;
  addToCart(activeQuickViewProduct, selectedModalSize, selectedModalColor, 1);
  closeModal('quickViewModal');
}

function openWhatsAppModalProduct() {
  if (!activeQuickViewProduct) return;
  let msg = `*Olá, Manu Moda Íntima!* 🌸\n\n`;
  msg += `Gostaria de pedir a peça:\n`;
  msg += `*${activeQuickViewProduct.name}*\n`;
  msg += `• Tamanho: ${selectedModalSize}\n`;
  msg += `• Cor: ${selectedModalColor}\n`;
  msg += `• Valor: R$ ${activeQuickViewProduct.price.toFixed(2).replace('.', ',')}\n\n`;
  msg += `Como procedemos com a entrega? 💕`;

  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

/* --------------------------------------------------------------------------
   SIZE GUIDE MODAL & CALCULATOR
   -------------------------------------------------------------------------- */
function openSizeGuide() {
  const modal = document.getElementById('sizeGuideModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  if (window.IsCompanion) IsCompanion.onSizeGuide();
}

function initSizeCalculator() {
  const btn = document.getElementById('calculateSizeBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const busto = parseFloat(document.getElementById('inputBusto')?.value || 0);
    const torax = parseFloat(document.getElementById('inputTorax')?.value || 0);
    const quadril = parseFloat(document.getElementById('inputQuadril')?.value || 0);
    const resultEl = document.getElementById('sizeResult');

    if (!busto && !quadril) {
      if (resultEl) resultEl.innerHTML = `<span style="color:#ff6b8b;">Por favor, informe ao menos a medida do busto ou do quadril.</span>`;
      return;
    }

    let recommended = 'M';
    if (busto <= 86 || quadril <= 94) {
      recommended = 'P (38 - 40)';
    } else if (busto <= 92 || quadril <= 100) {
      recommended = 'M (42)';
    } else if (busto <= 98 || quadril <= 106) {
      recommended = 'G (44)';
    } else {
      recommended = 'GG (46)';
    }

    if (resultEl) {
      resultEl.innerHTML = `
        <div style="background: rgba(230,0,103,0.15); border: 1px solid var(--border-pink); padding: 12px; border-radius: 8px; margin-top: 14px;">
          Seu tamanho ideal recomendado é: <strong style="color:#fff; font-size: 1.1rem;">${recommended}</strong> ✨
          <div style="font-size: 0.78rem; color: var(--rose-gold); margin-top: 4px;">Ficou com alguma dúvida? Chame nossa consultora no WhatsApp!</div>
        </div>
      `;
    }
  });
}

/* --------------------------------------------------------------------------
   MODAL CONTROLS & CLOSE
   -------------------------------------------------------------------------- */
function initModals() {
  // Close on backdrop click
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   FAQ ACCORDION
   -------------------------------------------------------------------------- */
function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(f => f.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* --------------------------------------------------------------------------
   THEME & FONT LIVE CUSTOMIZER
   -------------------------------------------------------------------------- */
function initCustomizer() {
  const toggleBtn = document.getElementById('customizerToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleCustomizer);
  }

  // Restore saved preferences
  const savedTheme = localStorage.getItem('manu_theme');
  const savedFont = localStorage.getItem('manu_font');

  if (savedTheme) {
    document.body.className = `${savedTheme} ${savedFont || ''}`.trim();
    document.querySelectorAll('.theme-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('onclick')?.includes(savedTheme));
    });
  }

  if (savedFont) {
    document.body.classList.add(savedFont);
    document.querySelectorAll('.font-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('onclick')?.includes(savedFont));
    });
  }
}

function toggleCustomizer() {
  const panel = document.getElementById('customizerPanel');
  if (panel) {
    panel.classList.toggle('open');
  }
}

function setTheme(themeClass, btn) {
  document.body.classList.remove('theme-magenta', 'theme-gold', 'theme-light');
  if (themeClass) {
    document.body.classList.add(themeClass);
    localStorage.setItem('manu_theme', themeClass);
  } else {
    localStorage.removeItem('manu_theme');
  }

  document.querySelectorAll('.theme-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  showToast('🎨 Paleta de cores atualizada em tempo real!');
}

function setFont(fontClass, btn) {
  document.body.classList.remove('font-modern');
  if (fontClass) {
    document.body.classList.add(fontClass);
    localStorage.setItem('manu_font', fontClass);
  } else {
    localStorage.removeItem('manu_font');
  }

  document.querySelectorAll('.font-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  showToast('✍️ Estilo tipográfico atualizado!');
}

/* --------------------------------------------------------------------------
   TOAST NOTIFICATIONS
   -------------------------------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

/* --------------------------------------------------------------------------
   IS MASCOTE - A GATA PRETA ANIMADA, BARULHENTA E HONESTA 🐾
   -------------------------------------------------------------------------- */
const IS_QUOTES = {
  welcome: [
    "MIAAAU! Bem-vinda à Manu Moda Íntima! Eu sou a Is, sua conselheira fashion! Gata preta aqui só dá poder, sorte e desconto: usa o cupom <b>MANU10</b> na 1ª compra!",
    "ALERTA DE AUTOESTIMA NO TETO! Se você veio aqui pra passar despercebida, errou de loja! Aqui você vai sair um monumento e sem gastar rios de dinheiro!",
    "OUVI PASSOS DE MULHER PODEROSA! Chega mais! Pode fuçar tudo, olhar os detalhes de renda e se apaixonar sem culpa nenhuma!"
  ],
  cartAdd: [
    "MIAAAU! NHAC! Direto pra sacola! Escolha de rainha! Essa peça vai te deixar um verdadeiro escândalo de linda!",
    "PRRRRRR! Ronrom de pura aprovação felina! Mulher, você tem um bom gosto que olha... até meu rabo arrepiou de emoção!",
    "ALERTA DE DEUSA! Já tô imaginando como essa lingerie vai te vestir perfeitamente! Não vacila e garante logo antes que acabe!"
  ],
  sizeGuide: [
    "Sem medo da fita métrica, mulher! Fita não morde ninguém! Mede o busto e o quadril pra ficar confortável e maravilhosa!",
    "Tamanho na etiqueta é só letra, o monumento é você! Na dúvida entre dois tamanhos, escolhe o que te deixa livre e sem aperto!"
  ],
  orderCheckout: [
    "MIAAAU! Pedido prontinho! Clique em finalizar compras e o código com suas peças é copiado direto pro WhatsApp!",
    "ALERTA DE PRATICIDADE! Copie o código do pedido e envie para a consultora no WhatsApp para envio expresso!"
  ],
  coupon: [
    "PRRRRRR! Cupom aplicado com sucesso! Desconto no bolso e poder no corpo: do jeitinho que a gente ama!",
    "MIAU! Economizou bonito! Agora corre pro abraço e finaliza o pedido!"
  ],
  randomAdvice: [
    "Sinceridade do dia: homem a gente supera, mas um conjunto de renda que veste perfeito... isso sim é sagrado!",
    "O espelho hoje vai olhar pra você e pedir autógrafo! Vai por mim, gata preta tem sexto sentido deuso!",
    "Não economiza no seu amor próprio! Você trabalha, você merece e você fica maravilhosa de Manu Moda Íntima!",
    "Tá na dúvida entre duas peças? Pega as duas! A vida é curta demais pra passar vontade!",
    "Prrrrr... ronrom estrondoso de aprovação! Tô de olho em você arrasando nas escolhas!",
    "A nossa embalagem é 100% DISCRETA, gata! Mais silenciosa que eu andando no telhado à noite! Nem o vizinho fofoqueiro descobre!",
    "Dica de ouro da Is: adicione suas peças na sacola e envie seu pedido com 1 clique pelo WhatsApp!",
    "Lingerie boa é aquela que te dá vontade de se olhar no espelho o dia inteiro! Se ame sem moderação!"
  ]
};

let isBubbleTimer = null;

function playIsMeow() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    const now = ctx.currentTime;

    // Meow melodic slide: start ~600Hz, rise to ~860Hz, slide down to ~390Hz
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(860, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(390, now + 0.38);

    // Volume envelope
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.42);
  } catch (e) {
    // Audio context may need user gesture
  }
}

function showIsSpeech(text, tag = 'Honesta & Barulhenta!', autoCloseDelay = 8000) {
  const bubble = document.getElementById('isSpeechBubble');
  const textEl = document.getElementById('isBubbleText');
  const tagEl = document.getElementById('isBubbleTag');

  if (!bubble || !textEl) return;

  textEl.innerHTML = text;
  if (tagEl) tagEl.innerText = tag;

  bubble.classList.remove('hidden');

  if (isBubbleTimer) clearTimeout(isBubbleTimer);
  if (autoCloseDelay) {
    isBubbleTimer = setTimeout(() => {
      closeIsBubble();
    }, autoCloseDelay);
  }
}

function closeIsBubble(event) {
  if (event) event.stopPropagation();
  const bubble = document.getElementById('isSpeechBubble');
  if (bubble) bubble.classList.add('hidden');
  if (isBubbleTimer) clearTimeout(isBubbleTimer);
}

function toggleIsMascot() {
  playIsMeow();
  triggerRandomIsQuote();
}

function triggerRandomIsQuote() {
  playIsMeow();
  const quotes = IS_QUOTES.randomAdvice;
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  showIsSpeech(pick, '🐾 Conselho da Is!', 9000);
}

const IsCompanion = {
  onWelcome() {
    const welcomePick = IS_QUOTES.welcome[Math.floor(Math.random() * IS_QUOTES.welcome.length)];
    showIsSpeech(welcomePick, 'Boas-vindas!', 10000);
  },

  onAddToCart(productName) {
    playIsMeow();
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    if (subtotal > 120 && subtotal < FREE_SHIPPING_THRESHOLD) {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      showIsSpeech(
        `MIAAAU! "${productName}" tá na sacola! E ó: falta só <b>R$ ${remaining.toFixed(2).replace('.', ',')}</b> pra garantir <b>FRETE GRÁTIS</b>! Pega mais uma peça e economiza no envio!`,
        '🐾 Dica Honesta de Frete!',
        9000
      );
    } else {
      const pick = IS_QUOTES.cartAdd[Math.floor(Math.random() * IS_QUOTES.cartAdd.length)];
      showIsSpeech(pick, '🐾 Na Sacola!', 8000);
    }
  },

  onSizeGuide() {
    playIsMeow();
    const pick = IS_QUOTES.sizeGuide[Math.floor(Math.random() * IS_QUOTES.sizeGuide.length)];
    showIsSpeech(pick, '🐾 Medidas Sem Neura!', 8000);
  },

  onOrderCheckout() {
    playIsMeow();
    const pick = IS_QUOTES.orderCheckout[Math.floor(Math.random() * IS_QUOTES.orderCheckout.length)];
    showIsSpeech(pick, '🐾 Pedido Prontinho!', 10000);
  },

  onCoupon() {
    playIsMeow();
    const pick = IS_QUOTES.coupon[Math.floor(Math.random() * IS_QUOTES.coupon.length)];
    showIsSpeech(pick, '🐾 Desconto Ativado!', 8000);
  }
};

window.IsCompanion = IsCompanion;

function initIsMascot() {
  setTimeout(() => {
    IsCompanion.onWelcome();
  }, 2200);
}


// --- DATA (from constants.ts and types.ts) ---
const APP_NAME = "Mi Cafetería Escolar";

const FoodCategory = {
  BEBIDAS: "Bebidas",
  SNACKS: "Snacks",
  PLATOS_FUERTES: "Platos Fuertes",
  POSTRES: "Postres"
};

const CATEGORIES = [
  FoodCategory.PLATOS_FUERTES,
  FoodCategory.BEBIDAS,
  FoodCategory.SNACKS,
  FoodCategory.POSTRES,
];

const MENU_ITEMS = [
  { id: 'pizza-especial', name: 'Pizza Especial del Día', description: 'Deliciosa pizza con ingredientes frescos y seleccionados, ¡la favorita de todos!', price: 3.50, imageUrl: 'https://picsum.photos/seed/pizza_especial/600/400', category: FoodCategory.PLATOS_FUERTES, allergens: ['Gluten', 'Lácteos'], isFeatured: true, },
  { id: 'hamburguesa-clasica', name: 'Hamburguesa Clásica', description: 'Jugosa carne de res, lechuga, tomate y queso en pan artesanal.', price: 4.00, imageUrl: 'https://picsum.photos/seed/hamburguesa/600/400', category: FoodCategory.PLATOS_FUERTES, allergens: ['Gluten', 'Lácteos', 'Sésamo'], isFeatured: true, },
  { id: 'ensalada-cesar', name: 'Ensalada César con Pollo', description: 'Fresca lechuga romana, crutones, queso parmesano, pollo a la parrilla y aderezo César.', price: 3.75, imageUrl: 'https://picsum.photos/seed/ensalada_cesar/600/400', category: FoodCategory.PLATOS_FUERTES, allergens: ['Lácteos', 'Gluten', 'Pescado (en aderezo)'], },
  { id: 'pasta-bolognesa', name: 'Pasta Boloñesa', description: 'Spaghetti con nuestra salsa boloñesa casera, cocinada a fuego lento.', price: 3.25, imageUrl: 'https://picsum.photos/seed/pasta_bolognesa/600/400', category: FoodCategory.PLATOS_FUERTES, allergens: ['Gluten', 'Huevo'], },
  { id: 'jugo-naranja', name: 'Jugo de Naranja Natural', description: '100% natural, recién exprimido.', price: 1.50, imageUrl: 'https://picsum.photos/seed/jugo_naranja/600/400', category: FoodCategory.BEBIDAS, },
  { id: 'refresco-cola', name: 'Refresco de Cola', description: 'Clásico refresco de cola, servido frío.', price: 1.00, imageUrl: 'https://picsum.photos/seed/refresco_cola/600/400', category: FoodCategory.BEBIDAS, },
  { id: 'agua-embotellada', name: 'Agua Embotellada', description: 'Agua mineral natural sin gas.', price: 0.75, imageUrl: 'https://picsum.photos/seed/agua_botella/600/400', category: FoodCategory.BEBIDAS, },
  { id: 'batido-fresa', name: 'Batido de Fresa', description: 'Cremoso batido hecho con fresas frescas y leche.', price: 2.00, imageUrl: 'https://picsum.photos/seed/batido_fresa/600/400', category: FoodCategory.BEBIDAS, allergens: ['Lácteos'], },
  { id: 'papas-fritas', name: 'Papas Fritas', description: 'Crujientes papas fritas, el acompañamiento perfecto.', price: 1.25, imageUrl: 'https://picsum.photos/seed/papas_fritas/600/400', category: FoodCategory.SNACKS, },
  { id: 'sandwich-jamon-queso', name: 'Sandwich de Jamón y Queso', description: 'Clásico sandwich tostado con jamón y queso derretido.', price: 2.50, imageUrl: 'https://picsum.photos/seed/sandwich_jamon_queso/600/400', category: FoodCategory.SNACKS, allergens: ['Gluten', 'Lácteos'], },
  { id: 'fruta-temporada', name: 'Fruta de Temporada', description: 'Una pieza de fruta fresca de la estación (manzana, banana, naranja).', price: 0.80, imageUrl: 'https://picsum.photos/seed/fruta_temporada/600/400', category: FoodCategory.SNACKS, },
  { id: 'brownie-chocolate', name: 'Brownie de Chocolate', description: 'Delicioso brownie de chocolate con nueces.', price: 1.75, imageUrl: 'https://picsum.photos/seed/brownie_chocolate/600/400', category: FoodCategory.POSTRES, allergens: ['Gluten', 'Huevo', 'Lácteos', 'Nueces'], },
  { id: 'helado-vainilla', name: 'Copa de Helado', description: 'Una refrescante copa de helado de vainilla o chocolate.', price: 1.50, imageUrl: 'https://picsum.photos/seed/helado_vainilla/600/400', category: FoodCategory.POSTRES, allergens: ['Lácteos'], },
];

const PROMOTIONS = [
  { id: 'promo-batido-2x1', title: '¡2x1 en Batidos!', description: 'Compra un batido de fresa y llévate el segundo gratis. ¡Solo los Miércoles!', imageUrl: 'https://picsum.photos/seed/promo_batidos/600/300', relatedItemId: 'batido-fresa', },
  { id: 'promo-bebida-gratis', title: 'Bebida Gratis con tu Plato Fuerte', description: 'Al comprar cualquier Plato Fuerte, llévate un refresco de cola o agua embotellada gratis.', imageUrl: 'https://picsum.photos/seed/promo_bebida/600/300', },
  { id: 'promo-desayuno', title: 'Desayuno Energético', description: 'Jugo de naranja + Sandwich de jamón y queso por solo $3.50. ¡Empieza tu día con energía!', imageUrl: 'https://picsum.photos/seed/promo_desayuno/600/300', },
];


// --- ICONS ---
const ICONS = {
  utensils: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 2H8C7.44772 2 7 2.44772 7 3V8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8V3C17 2.44772 16.5523 2 16 2ZM15 7H9V4H15V7Z" /><path d="M6 10H5V21C5 21.5523 5.44772 22 6 22C6.55228 22 7 21.5523 7 21V10H6Z" /><path d="M19 10H18V21C18 21.5523 18.4477 22 19 22C19.5523 22 20 21.5523 20 21V10H19Z" /><path d="M11 10.062V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V10.062C12.678 10.0228 12.3444 10 12 10C11.6556 10 11.322 10.0228 11 10.062Z" /></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`,
  tag: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" /></svg>`,
  alert: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>`,
};

// --- AUTHENTICATION ---
const MOCK_USER = { id: '1', name: 'Usuario Demo', email: 'test@test.com' };
let currentUser = null;

function login(email, pass) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (email === MOCK_USER.email && pass === 'password') {
        currentUser = MOCK_USER;
        localStorage.setItem('user', JSON.stringify(MOCK_USER));
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500);
  });
}

function logout() {
  currentUser = null;
  localStorage.removeItem('user');
  updateHeader();
  window.location.hash = '/login';
}

function checkAuth() {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
  } else {
    currentUser = null;
  }
}

function isAuthenticated() {
  return !!currentUser;
}


// --- TEMPLATE RENDERERS ---
function renderMenuItem(item) {
  const allergensHtml = item.allergens && item.allergens.length > 0
    ? `<div class="card-allergens">
        <div class="card-allergens-title">${ICONS.alert}<p>Alérgenos:</p></div>
        <ul class="card-allergens-list">
          ${item.allergens.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>`
    : '';

  return `
    <div class="menu-item-card">
      <div class="card-image-container">
        <img class="card-image" src="${item.imageUrl}" alt="${item.name}" />
        <div class="card-category-badge">${item.category}</div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-description">${item.description}</p>
        ${allergensHtml}
        <div class="card-footer">
          <p class="card-price">$${item.price.toFixed(2)}</p>
          <button class="btn btn-secondary">Pedir</button>
        </div>
      </div>
    </div>
  `;
}

function renderPromotionCard(promo) {
  const imageHtml = promo.imageUrl ? `<img class="card-image" src="${promo.imageUrl}" alt="${promo.title}" />` : '';
  return `
    <div class="promotion-card">
      ${imageHtml}
      <div class="card-content">
        <div class="card-title-container">${ICONS.tag}<h3 class="card-title">${promo.title}</h3></div>
        <p class="card-description">${promo.description}</p>
      </div>
    </div>
  `;
}


// --- PAGE RENDERERS ---
const pageContent = document.getElementById('page-content');

function renderHomePage() {
  const featuredItems = MENU_ITEMS.filter(item => item.isFeatured).slice(0, 3);
  const quickPromotions = PROMOTIONS.slice(0, 2);

  pageContent.innerHTML = `
    <div class="container page-section">
      <section class="text-center" style="margin-bottom: 3rem;">
        <h1 class="page-title" style="font-size: 2.25rem;">¡Bienvenido a tu Cafetería Escolar!</h1>
        <p style="max-width: 42rem; margin: auto;">Descubre el menú del día, las mejores promociones y todo lo que necesitas para disfrutar de tus comidas en el colegio.</p>
      </section>

      ${featuredItems.length > 0 ? `
        <section style="margin-bottom: 3rem;">
          <h2 class="section-title"><span>🌟</span> Destacados del Día</h2>
          <div class="grid md-grid-cols-2 lg-grid-cols-3">
            ${featuredItems.map(renderMenuItem).join('')}
          </div>
        </section>` : ''}

      ${quickPromotions.length > 0 ? `
        <section style="margin-bottom: 3rem;">
          <h2 class="section-title"><span>🎉</span> Promociones Especiales</h2>
          <div class="grid md-grid-cols-2">
            ${quickPromotions.map(renderPromotionCard).join('')}
          </div>
          <div class="text-center" style="margin-top: 2rem;">
            <a href="#/promociones" class="btn btn-accent">Ver Todas las Promociones</a>
          </div>
        </section>` : ''}
      
      <section class="cta-section">
        <h2>¿Listo para ordenar?</h2>
        <p>Explora nuestro menú completo y encuentra tus favoritos. ¡Buen provecho!</p>
        <a href="#/menu" class="btn btn-secondary">Explorar Menú Completo</a>
      </section>
    </div>
  `;
}

function renderMenuPage() {
    pageContent.innerHTML = `
    <div class="container page-section">
      <h1 class="page-title">Nuestro Menú</h1>
      <div class="filter-controls">
        <div class="search-bar">
          <input type="text" id="search-input" placeholder="Buscar plato..." class="search-input" />
        </div>
        <div class="category-filters" id="category-filters">
          <button class="category-btn active" data-category="Todos">Todos</button>
          ${CATEGORIES.map(cat => `<button class="category-btn" data-category="${cat}">${cat}</button>`).join('')}
        </div>
      </div>
      <div id="menu-grid" class="grid sm-grid-cols-2 lg-grid-cols-3 xl-grid-cols-4">
        <!-- Menu items will be injected here -->
      </div>
      <p id="no-results" class="text-center hidden" style="padding: 2.5rem 0; font-size: 1.25rem;">No se encontraron platillos que coincidan con tu búsqueda.</p>
    </div>
  `;
  attachMenuPageListeners();
}

function renderPromotionsPage() {
    pageContent.innerHTML = `
    <div class="container page-section">
        <h1 class="page-title"><span>🎉</span> Promociones Especiales <span>🎉</span></h1>
        ${PROMOTIONS.length > 0 ? `
          <div class="grid md-grid-cols-2 lg-grid-cols-3">
              ${PROMOTIONS.map(renderPromotionCard).join('')}
          </div>` 
        : `<p class="text-center" style="padding: 2.5rem 0; font-size: 1.25rem;">Actualmente no hay promociones disponibles. ¡Vuelve pronto!</p>`
        }
    </div>
    `;
}

function renderAuthPage(type) {
    document.querySelector('.header').classList.add('hidden');
    document.querySelector('.footer').classList.add('hidden');
    pageContent.classList.add('auth-container');
    
    let content = '';
    if (type === 'login') {
        content = `
          <h1 class="text-3xl font-bold text-brand-dark">${APP_NAME}</h1>
          <p class="text-gray-600 mt-1">Inicia sesión para continuar</p>
        `;
    } else if (type === 'register') {
        content = `
          <h1 class="text-3xl font-bold text-brand-dark">${APP_NAME}</h1>
          <p class="text-gray-600 mt-1">Crea una nueva cuenta</p>
        `;
    } else if (type === 'forgot-password') {
         content = `
          <h1 class="text-3xl font-bold text-brand-dark">${APP_NAME}</h1>
          <p class="text-gray-600 mt-1">Recupera tu contraseña</p>
        `;
    }
    
    const formHtml = {
      login: `
        <div class="form-input-group"><span class="icon">${ICONS.mail}</span><input type="email" id="email" placeholder="Correo Electrónico" class="form-input" value="test@test.com" required /></div>
        <div class="form-input-group"><span class="icon">${ICONS.lock}</span><input type="password" id="password" placeholder="Contraseña" class="form-input" value="password" required /></div>
        <div class="form-link"><a href="#/forgot-password">¿Olvidaste tu contraseña?</a></div>
        <div><button type="submit" class="btn btn-primary btn-full">Iniciar Sesión</button></div>
      `,
      register: `
        <div class="form-input-group"><span class="icon">${ICONS.user}</span><input type="text" id="name" placeholder="Nombre Completo" class="form-input" required /></div>
        <div class="form-input-group"><span class="icon">${ICONS.mail}</span><input type="email" id="email" placeholder="Correo Electrónico" class="form-input" required /></div>
        <div class="form-input-group"><span class="icon">${ICONS.lock}</span><input type="password" id="password" placeholder="Contraseña" class="form-input" required /></div>
        <div class="form-input-group"><span class="icon">${ICONS.lock}</span><input type="password" id="confirmPassword" placeholder="Confirmar Contraseña" class="form-input" required /></div>
        <div style="padding-top: 0.5rem;"><button type="submit" class="btn btn-primary btn-full">Crear Cuenta</button></div>
      `,
      'forgot-password': `
        <p>Ingresa tu correo electrónico y te enviaremos un enlace de recuperación.</p>
        <div class="form-input-group"><span class="icon">${ICONS.mail}</span><input type="email" id="email" placeholder="Tu Correo Electrónico" class="form-input" required /></div>
        <div><button type="submit" class="btn btn-primary btn-full">Enviar Enlace</button></div>
      `
    };

    const footerLink = {
        login: `¿No tienes una cuenta? <a href="#/register" class="form-link">Regístrate aquí</a>`,
        register: `¿Ya tienes una cuenta? <a href="#/login" class="form-link">Inicia sesión</a>`,
        'forgot-password': `<a href="#/login" class="form-link">Volver a Iniciar Sesión</a>`
    };
    
    pageContent.innerHTML = `
      <div class="auth-card">
        <div class="auth-header">${ICONS.utensils} ${content}</div>
        <div id="form-error" class="form-error hidden"></div>
        <div id="form-success" class="hidden"></div>
        <form id="auth-form" class="auth-form">
            ${formHtml[type]}
        </form>
        <p class="form-footer-text">${footerLink[type]}</p>
      </div>
    `;

    attachAuthFormListeners(type);
}

// --- EVENT LISTENERS ---
function attachMenuPageListeners() {
  let currentCategory = 'Todos';
  let searchTerm = '';

  const searchInput = document.getElementById('search-input');
  const categoryFilters = document.getElementById('category-filters');
  const menuGrid = document.getElementById('menu-grid');
  const noResults = document.getElementById('no-results');

  function filterAndRender() {
    const filteredItems = MENU_ITEMS.filter(item => {
      const categoryMatch = currentCategory === 'Todos' || item.category === currentCategory;
      const term = searchTerm.toLowerCase();
      const searchMatch = item.name.toLowerCase().includes(term) || item.description.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });

    if (filteredItems.length > 0) {
      menuGrid.innerHTML = filteredItems.map(renderMenuItem).join('');
      menuGrid.classList.remove('hidden');
      noResults.classList.add('hidden');
    } else {
      menuGrid.classList.add('hidden');
      noResults.classList.remove('hidden');
    }
  }

  searchInput.addEventListener('input', (e) => {
    // FIX: Cast event target to HTMLInputElement to access the 'value' property.
    searchTerm = (e.target as HTMLInputElement).value;
    filterAndRender();
  });

  categoryFilters.addEventListener('click', (e) => {
    // FIX: Use `instanceof HTMLButtonElement` as a type guard to safely access button-specific properties.
    if (e.target instanceof HTMLButtonElement) {
      currentCategory = e.target.dataset.category;
      categoryFilters.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');
      filterAndRender();
    }
  });

  filterAndRender(); // Initial render
}


function attachAuthFormListeners(type) {
    const form = document.getElementById('auth-form');
    const errorDiv = document.getElementById('form-error');
    const successDiv = document.getElementById('form-success');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorDiv.classList.add('hidden');
        const btn = form.querySelector('button');
        btn.disabled = true;
        btn.textContent = 'Procesando...';

        try {
            if (type === 'login') {
                // FIX: Cast element to HTMLInputElement to access the 'value' property.
                const email = (document.getElementById('email') as HTMLInputElement).value;
                // FIX: Cast element to HTMLInputElement to access the 'value' property.
                const password = (document.getElementById('password') as HTMLInputElement).value;
                const success = await login(email, password);
                if (success) {
                    window.location.hash = '/';
                } else {
                    errorDiv.textContent = 'Correo o contraseña incorrectos.';
                    errorDiv.classList.remove('hidden');
                }
            } else if (type === 'register') {
                // FIX: Cast element to HTMLInputElement to access the 'value' property.
                const password = (document.getElementById('password') as HTMLInputElement).value;
                // FIX: Cast element to HTMLInputElement to access the 'value' property.
                const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
                if (password !== confirmPassword) {
                    errorDiv.textContent = 'Las contraseñas no coinciden.';
                    errorDiv.classList.remove('hidden');
                } else {
                    // Mock success
                    setTimeout(() => window.location.hash = '/login', 1000);
                }
            } else if (type === 'forgot-password') {
                // FIX: Cast element to HTMLInputElement to access the 'value' property.
                const email = (document.getElementById('email') as HTMLInputElement).value;
                form.classList.add('hidden');
                successDiv.classList.remove('hidden');
                successDiv.innerHTML = `<p class="text-center">Si existe una cuenta con <strong>${email}</strong>, recibirás un correo con instrucciones.</p>`;
            }
        } finally {
            btn.disabled = false;
            if(type==='login') btn.textContent = 'Iniciar Sesión';
            if(type==='register') btn.textContent = 'Crear Cuenta';
            if(type==='forgot-password') btn.textContent = 'Enviar Enlace';
        }
    });
}

// --- HEADER AND NAVIGATION ---
function updateHeader() {
  const userInfoContainer = document.getElementById('user-info-container');
  const userNameSpan = document.getElementById('user-name');
  
  if (isAuthenticated()) {
    userInfoContainer.classList.remove('hidden');
    userNameSpan.textContent = `Hola, ${currentUser.name.split(' ')[0]}`;
    document.getElementById('logout-button').addEventListener('click', logout, { once: true });
    
    document.querySelector('.header').classList.remove('hidden');
    document.querySelector('.footer').classList.remove('hidden');
    pageContent.classList.remove('auth-container');

  } else {
    userInfoContainer.classList.add('hidden');
  }
}

function updateActiveNav(path) {
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    if (path === '/' || path === '') {
        document.getElementById('nav-home')?.classList.add('active');
    } else if (path === '/menu') {
        document.getElementById('nav-menu')?.classList.add('active');
    } else if (path === '/promociones') {
        document.getElementById('nav-promos')?.classList.add('active');
    }
}


// --- ROUTER ---
const routes = {
  '/': renderHomePage,
  '/menu': renderMenuPage,
  '/promociones': renderPromotionsPage,
  '/login': () => renderAuthPage('login'),
  '/register': () => renderAuthPage('register'),
  '/forgot-password': () => renderAuthPage('forgot-password'),
};

const protectedRoutes = ['/', '/menu', '/promociones'];

function router() {
  let path = window.location.hash.slice(1) || '/';
  if (path === '') path = '/';

  checkAuth();
  updateHeader();
  
  if (isAuthenticated() && (path === '/login' || path === '/register' || path === '/forgot-password')) {
      window.location.hash = '/';
      return;
  }
  
  if (!isAuthenticated() && protectedRoutes.includes(path)) {
      window.location.hash = '/login';
      return;
  }
  
  const renderFunction = routes[path];
  
  if (renderFunction) {
      renderFunction();
      updateActiveNav(path);
  } else {
    pageContent.innerHTML = `<div class="container page-section text-center"><h1 class="page-title">404 - Página no encontrada</h1></div>`;
  }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', router);
  router(); // Initial call
});
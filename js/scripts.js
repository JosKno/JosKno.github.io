// js/scripts.js

(function() {
    'use strict';

    // Array de todos los productos
    const allProducts = [
        // Pasteles Completos
        {
            id: 'pastel-chocolate',
            name: 'Pastel de Chocolate Intenso',
            category: 'pasteles',
            description: 'Bizcocho húmedo de chocolate cubierto con ganache de chocolate semi-amargo.',
            longDescription: 'Un verdadero festín para los amantes del chocolate. Nuestro Pastel de Chocolate Intenso presenta múltiples capas de bizcocho de chocolate negro, esponjoso y húmedo, generosamente intercaladas con una rica ganache de chocolate belga semi-amargo. Cubierto con más ganache y decorado con virutas de chocolate y frutos rojos frescos.',
            extraDescription: 'Perfecto para cualquier celebración o como un capricho indulgente.',
            price: '$350.00',
            image: 'images/pastel-chocolate.jpg',
            alt: 'Pastel de Chocolate Intenso',
            detailUrl: 'producto-detalle.html?id=pastel-chocolate',
            allergens: 'Contiene: Lácteos, Huevo, Gluten. Puede contener trazas de otras nueces.',
            servingInfo: 'Rinde aproximadamente para 10-12 personas.'
        },
        {
            id: 'tres-leches',
            name: 'Clásico Tres Leches',
            category: 'pasteles',
            description: 'Tradicional pastel bañado en una mezcla de tres leches, cubierto con merengue suave y canela.',
            longDescription: 'Nuestro Clásico Tres Leches es una delicia esponjosa y sumamente húmeda. Preparado con un bizcocho de vainilla ligero, se baña cuidadosamente en una mezcla dulce de leche evaporada, leche condensada y crema de leche. Se cubre con un merengue italiano suave y sedoso, espolvoreado con un toque de canela para realzar su sabor tradicional.',
            extraDescription: 'Un postre icónico que evoca recuerdos y crea nuevos momentos dulces. Ideal para compartir en familia.',
            price: '$320.00',
            image: 'images/pastel-tres-leches.jpg',
            alt: 'Pastel Tres Leches',
            detailUrl: 'producto-detalle.html?id=tres-leches',
            allergens: 'Contiene: Lácteos, Huevo, Gluten.',
            servingInfo: 'Rinde para 8-10 personas.'
        },
        {
            id: 'cheesecake-fresa',
            name: 'Cheesecake con Fresas',
            category: 'pasteles',
            description: 'Base de galleta, relleno cremoso de queso y una generosa capa de mermelada y fresas frescas.',
            longDescription: 'Deléitate con nuestro cremoso Cheesecake con Fresas. Sobre una base crujiente de galleta de mantequilla, descansa un suave y rico relleno de queso crema horneado a la perfección. Coronado con una abundante capa de mermelada de fresa casera y fresas frescas laminadas.',
            extraDescription: 'El equilibrio perfecto entre dulce y ácido, cremoso y crujiente.',
            price: '$380.00',
            image: 'images/cheesecake.png',
            alt: 'Cheesecake con Fresas',
            detailUrl: 'producto-detalle.html?id=cheesecake-fresa',
            allergens: 'Contiene: Lácteos, Huevo, Gluten.',
            servingInfo: 'Ideal para 8-10 personas.'
        },
        {
            id: 'pastel-ferrero',
            name: 'Pastel Ferrero',
            category: 'pasteles',
            description: 'Exquisito pastel de chocolate con avellanas y Nutella.',
            longDescription: 'Exquisito pastel de chocolate con relleno de crema de chocolate, avellanas y Nutella, cubierto con crema láctea, decorado con chocolate blanco, avellanas y tres chocolates Ferrero. Un deleite para los amantes del chocolate.',
            extraDescription: 'Perfecto para celebraciones especiales o para darte un gusto inolvidable.',
            price: '$450.00',
            image: 'images/pastel-ferrero-detalle.jpg',
            alt: 'Pastel Ferrero',
            detailUrl: 'producto-detalle.html?id=pastel-ferrero',
            allergens: 'Contiene: Lácteos, Huevo, Gluten, Avellanas. Puede contener trazas de otras nueces.',
            servingInfo: 'Rinde aproximadamente para 10-12 personas. Disponible también en tamaño individual (preguntar en sucursal).'
        },
        {id:'conchas',name:'Conchas (Vainilla/Chocolate)',category:'panaderia',description:'Nuestro pan dulce más popular, suave y esponjoso con cubierta azucarada.',longDescription:'Las conchas son un clásico de la panadería mexicana. Disfruta de su textura suave y esponjosa, coronada con una deliciosa costra de azúcar sabor vainilla o chocolate. Perfectas para acompañar tu café o chocolate caliente.',extraDescription:'Disponibles diariamente. Pregunta por nuestros sabores de temporada.',price:'$10.00 c/u',image:'images/conchas.jpg',alt:'Conchas de Vainilla y Chocolate',detailUrl:'producto-detalle.html?id=conchas',allergens:'Contiene: Gluten, Lácteos, Huevo.',servingInfo:'Individual.'},
        {id:'cuernitos',name:'Cuernitos de Mantequilla',category:'panaderia',description:'Ligeros y hojaldrados, perfectos para el desayuno o la merienda.',longDescription:'Nuestros cuernitos de mantequilla se hornean hasta alcanzar una textura ligera y hojaldrada, con un delicado sabor a mantequilla. Son el acompañamiento ideal para tu desayuno o una merienda ligera. Puedes disfrutarlos solos o con tu mermelada favorita.',extraDescription:'Pídelos también rellenos de jamón y queso.',price:'$12.00 c/u',image:'images/cuernitos.png',alt:'Cuernitos de Mantequilla',detailUrl:'producto-detalle.html?id=cuernitos',allergens:'Contiene: Gluten, Lácteos, Huevo.',servingInfo:'Individual.'},
        {id:'bolillo',name:'Bolillo / Pan Francés',category:'panaderia',description:'Crujiente por fuera, suave por dentro. Ideal para tortas o para acompañar comidas.',longDescription:'El bolillo, también conocido como pan francés, es un pilar de la gastronomía mexicana. Su exterior es crujiente y dorado, mientras que su interior es suave y aireado. Es perfecto para preparar tortas, molletes, o simplemente para acompañar tus platillos favoritos.',extraDescription:'Horneamos varias veces al día para garantizar su frescura.',price:'$5.00 c/u',image:'images/bolillo.jpg',alt:'Bolillo o Pan Francés',detailUrl:'producto-detalle.html?id=bolillo',allergens:'Contiene: Gluten.',servingInfo:'Individual.'},
        {id:'muffin-chocolate',name:'Muffin con Chispas',category:'postres',description:'Esponjoso muffin lleno de chispas de chocolate.',longDescription:'Disfruta de un momento dulce con nuestro muffin con chispas de chocolate. Esponjoso, húmedo y repleto de generosas chispas de chocolate semi-amargo que se derriten en tu boca. Ideal para un antojo rápido o como postre ligero.',extraDescription:'También disponible en sabor vainilla con arándanos.',price:'$25.00 c/u',image:'images/muffin-chocolate.jpg',alt:'Muffin con Chispas de Chocolate',detailUrl:'producto-detalle.html?id=muffin-chocolate',allergens:'Contiene: Gluten, Lácteos, Huevo.',servingInfo:'Individual.'},
        {id:'flan-napolitano',name:'Flan Napolitano',category:'postres',description:'Clásico flan cremoso con caramelo.',longDescription:'Nuestro flan napolitano es la definición de un postre clásico y reconfortante. Con una textura increíblemente suave y cremosa, y un delicioso baño de caramelo dorado, cada bocado es una experiencia celestial. Hecho con ingredientes de la más alta calidad.',extraDescription:'Una porción generosa para satisfacer tu antojo de dulce.',price:'$30.00 porción',image:'images/flan.jpg',alt:'Flan Napolitano con Caramelo',detailUrl:'producto-detalle.html?id=flan-napolitano',allergens:'Contiene: Lácteos, Huevo.',servingInfo:'Porción individual.'},
        {id:'galletas-surtidas',name:'Galletas Surtidas',category:'postres',description:'Paquete con variedad de nuestras galletas caseras (mantequilla, chispas, etc.).',longDescription:'¿No puedes decidirte por una? Nuestro paquete de galletas surtidas es la solución perfecta. Incluye una deliciosa selección de nuestras galletas más populares, horneadas en casa con amor: desde las clásicas de mantequilla hasta las irresistibles con chispas de chocolate y nuez.',extraDescription:'Ideal para compartir o para darte un gusto variado. El contenido del paquete puede variar según disponibilidad.',price:'$50.00 paquete',image:'images/galletas.jpg',alt:'Paquete de Galletas Surtidas Caseras',detailUrl:'producto-detalle.html?id=galletas-surtidas',allergens:'Contiene: Gluten, Lácteos, Huevo. Algunas variedades pueden contener nueces.',servingInfo:'Paquete con aproximadamente 6-8 galletas.'}
    ];
    
    const themeLocalStorageKey = 'theme';
    const userOverrideKey = 'theme_user_override_active'; // Key para saber si el usuario usó el switch

    /**
     * Establece el tema, actualiza localStorage y el interruptor de UI.
     * @param {string} theme - El tema a aplicar ('light' o 'dark').
     * @param {boolean} isUserAction - True si el cambio fue iniciado por el usuario via el switch.
     */
    const setTheme = (theme, isUserAction = false) => {
        console.log(`[scripts.js] setTheme: Aplicando tema -> ${theme}, Es acción de usuario: ${isUserAction}`);
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem(themeLocalStorageKey, theme);
        
        if (isUserAction) {
            localStorage.setItem(userOverrideKey, 'true'); // El usuario ha usado el switch
            console.log(`[scripts.js] setTheme: Preferencia de usuario establecida.`);
        }

        const themeSwitcher = document.getElementById('darkModeSwitch');
        if (themeSwitcher) {
            themeSwitcher.checked = (theme === 'dark');
        }
    };
    
    // --- Funciones del Carrito, Productos, Autenticación, etc. ---
    function getCart() { return JSON.parse(localStorage.getItem('shoppingCartPSJ')) || []; }
    function saveCart(cart) { localStorage.setItem('shoppingCartPSJ', JSON.stringify(cart)); updateCartUI(); }
    function parsePrice(priceString) { if (typeof priceString === 'number') return priceString; if (typeof priceString === 'string') { const cleanedString = priceString.replace(/[^0-9.]/g, ''); const price = parseFloat(cleanedString); return isNaN(price) ? 0 : price; } return 0; }
    function showToast(message, type = 'success') { let toastContainer = document.getElementById('toast-container-simple'); if (!toastContainer) { toastContainer = document.createElement('div'); toastContainer.id = 'toast-container-simple'; Object.assign(toastContainer.style, { position: 'fixed', bottom: '20px', right: '20px', zIndex: '1060', }); document.body.appendChild(toastContainer); } const toastId = `toast-${Date.now()}`; const toastElement = document.createElement('div'); toastElement.id = toastId; toastElement.className = `alert alert-${type} alert-dismissible fade show shadow-sm`; toastElement.setAttribute('role', 'alert'); toastElement.style.minWidth = '280px'; let iconClass = 'fas fa-check-circle'; if (type === 'info') iconClass = 'fas fa-info-circle'; else if (type === 'warning') iconClass = 'fas fa-exclamation-triangle'; else if (type === 'danger') iconClass = 'fas fa-times-circle'; toastElement.innerHTML = `<i class="${iconClass} me-2"></i> ${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`; toastContainer.appendChild(toastElement); setTimeout(() => { const currentToast = document.getElementById(toastId); if (currentToast) (bootstrap.Alert.getInstance(currentToast) || new bootstrap.Alert(currentToast)).close(); }, 4500); }
    function addToCart(productId, quantity = 1) { const currentUser = JSON.parse(sessionStorage.getItem('currentUserPSJ')); if (!currentUser) { showToast("Por favor, <a href='login.html' class='alert-link'>inicia sesión</a> para añadir productos al carrito.", 'warning'); return; } const product = allProducts.find(p => p.id === productId); if (!product) { console.error("Producto no encontrado:", productId); showToast("Error: Producto no encontrado.", 'danger'); return; } let cart = getCart(); const existingItemIndex = cart.findIndex(item => item.id === productId); const productPrice = parsePrice(product.price); if (existingItemIndex > -1) cart[existingItemIndex].quantity += quantity; else cart.push({ id: product.id, name: product.name, price: productPrice, image: product.image, quantity: quantity, detailUrl: product.detailUrl }); saveCart(cart); showToast(`"${product.name}" añadido al carrito.`, 'success'); const shoppingCartOffcanvasElement = document.getElementById('shoppingCartOffcanvas'); if (shoppingCartOffcanvasElement) (bootstrap.Offcanvas.getInstance(shoppingCartOffcanvasElement) || new bootstrap.Offcanvas(shoppingCartOffcanvasElement)).show(); }
    function updateCartUI() { const cart = getCart(); const cartOffcanvasBody = document.querySelector('#shoppingCartOffcanvas .offcanvas-body'); const cartCountBadge = document.getElementById('cart-count'); let totalItems = 0; let subtotal = 0; if (!cartOffcanvasBody) return; cartOffcanvasBody.innerHTML = ''; if (cart.length === 0) { cartOffcanvasBody.innerHTML = '<p class="text-center text-muted mt-3">Tu carrito está vacío.</p>'; } else { const ul = document.createElement('ul'); ul.className = 'list-unstyled mb-0'; cart.forEach(item => { totalItems += item.quantity; subtotal += item.price * item.quantity; const li = document.createElement('li'); li.className = 'd-flex mb-3 border-bottom pb-3 align-items-center cart-item'; li.dataset.productId = item.id; li.innerHTML = `<img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover;" class="me-3 rounded"><div class="flex-grow-1"><h6 class="mb-1 fs-6"><a href="${item.detailUrl}" class="text-decoration-none product-cart-title">${item.name}</a></h6><small class="text-muted d-block mb-1">Precio: $${item.price.toFixed(2)}</small><div class="d-flex align-items-center"><button class="btn btn-sm btn-outline-secondary cart-quantity-decrease" data-id="${item.id}" aria-label="Disminuir cantidad">-</button><input type="number" value="${item.quantity}" min="1" class="form-control form-control-sm mx-2 cart-item-quantity-input" data-id="${item.id}" style="width: 55px; text-align: center;" aria-label="Cantidad"><button class="btn btn-sm btn-outline-secondary cart-quantity-increase" data-id="${item.id}" aria-label="Aumentar cantidad">+</button></div></div><div class="text-end ms-2" style="min-width: 90px;"><p class="mb-1 fw-bold">$${(item.price * item.quantity).toFixed(2)}</p><button class="btn btn-sm btn-link text-danger cart-remove-item p-0" data-id="${item.id}" aria-label="Eliminar del carrito"><i class="fas fa-trash me-1"></i> Eliminar</button></div>`; ul.appendChild(li); }); cartOffcanvasBody.appendChild(ul); const cartFooter = document.createElement('div'); cartFooter.className = 'mt-auto pt-3 border-top bg-light p-3 sticky-bottom'; cartFooter.innerHTML = `<div class="d-flex justify-content-between align-items-center mb-2"><h5 class="mb-0">Subtotal:</h5><h5 class="mb-0 fw-bold">$${subtotal.toFixed(2)}</h5></div><button class="btn btn-primary w-100 mb-2" id="checkoutButton">Proceder al Pago</button><button class="btn btn-outline-danger w-100" id="clearCartButton">Vaciar Carrito</button>`; cartOffcanvasBody.appendChild(cartFooter); document.getElementById('checkoutButton')?.addEventListener('click', () => { const currentUser = JSON.parse(sessionStorage.getItem('currentUserPSJ')); if (!currentUser) { showToast("Debes <a href='login.html' class='alert-link'>iniciar sesión</a> para proceder al pago.", 'warning'); const offcanvasCart = bootstrap.Offcanvas.getInstance(document.getElementById('shoppingCartOffcanvas')); if (offcanvasCart) offcanvasCart.hide(); return; } window.location.href = 'pago.html'; }); document.getElementById('clearCartButton')?.addEventListener('click', () => { if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) saveCart([]); }); } if (cartCountBadge) { cartCountBadge.textContent = totalItems; cartCountBadge.style.display = totalItems > 0 ? 'inline-block' : 'none'; } addCartItemEventListeners(); }
    function addCartItemEventListeners() { document.querySelectorAll('.cart-quantity-decrease').forEach(b => { b.removeEventListener('click', handleQuantityDecrease); b.addEventListener('click', handleQuantityDecrease); }); document.querySelectorAll('.cart-quantity-increase').forEach(b => { b.removeEventListener('click', handleQuantityIncrease); b.addEventListener('click', handleQuantityIncrease); }); document.querySelectorAll('.cart-item-quantity-input').forEach(i => { i.removeEventListener('change', handleQuantityInputChange); i.addEventListener('change', handleQuantityInputChange); }); document.querySelectorAll('.cart-remove-item').forEach(b => { b.removeEventListener('click', handleRemoveItem); b.addEventListener('click', handleRemoveItem); }); }
    function handleQuantityDecrease(e) { updateCartItemQuantity(e.currentTarget.dataset.id, -1); }
    function handleQuantityIncrease(e) { updateCartItemQuantity(e.currentTarget.dataset.id, 1); }
    function handleQuantityInputChange(e) { const nQty = parseInt(e.currentTarget.value, 10); if (!isNaN(nQty) && nQty > 0) setCartItemQuantity(e.currentTarget.dataset.id, nQty); else { const c = getCart(), item = c.find(i => i.id === e.currentTarget.dataset.id); e.currentTarget.value = item ? item.quantity : 1; if (nQty <= 0) setCartItemQuantity(e.currentTarget.dataset.id, 1); } }
    function handleRemoveItem(e) { removeFromCart(e.currentTarget.dataset.id); }
    function updateCartItemQuantity(productId, change) { let cart = getCart(); const idx = cart.findIndex(i => i.id === productId); if (idx > -1) { cart[idx].quantity += change; if (cart[idx].quantity <= 0) cart.splice(idx, 1); saveCart(cart); } }
    function setCartItemQuantity(productId, newQuantity) { let cart = getCart(); const idx = cart.findIndex(i => i.id === productId); if (idx > -1) { if (newQuantity <= 0) cart.splice(idx, 1); else cart[idx].quantity = newQuantity; saveCart(cart); } }
    function removeFromCart(productId) { let cart = getCart(); cart = cart.filter(i => i.id !== productId); saveCart(cart); showToast("Producto eliminado del carrito."); }
    function initializePasswordToggle(inputId, toggleButtonId) { const pInput = document.getElementById(inputId); const tButton = document.getElementById(toggleButtonId); if (pInput && tButton) { const icon = tButton.querySelector('i'); tButton.addEventListener('click', () => { if (pInput.type === 'password') { pInput.type = 'text'; icon.classList.replace('fa-eye', 'fa-eye-slash'); icon.title = 'Ocultar contraseña'; } else { pInput.type = 'password'; icon.classList.replace('fa-eye-slash', 'fa-eye'); icon.title = 'Mostrar contraseña'; } }); } }
    function updateLoginStateInUI() { const currentUser = JSON.parse(sessionStorage.getItem('currentUserPSJ')); let authListItem = document.getElementById('auth-nav-item'); if (!authListItem) { const fb = document.querySelector('a.nav-link[href="login.html"], a.nav-link.active[href="login.html"]'); if (fb) authListItem = fb.closest('li.nav-item');} if (!authListItem) { console.warn('Auth nav item no encontrado.'); return; } const isLoginPage = window.location.pathname.includes('login.html'); const isRegisterPage = window.location.pathname.includes('registro.html'); authListItem.classList.remove('d-lg-flex', 'align-items-center'); if (currentUser) { let userDisplayName = currentUser.email.split('@')[0]; authListItem.innerHTML = `<div class="d-lg-flex align-items-center w-100"><span class="navbar-text me-lg-2" title="${currentUser.email}">Hola, ${userDisplayName}</span><a class="nav-link btn btn-link p-0 ms-lg-auto" href="#" id="logoutButton" role="button" aria-label="Cerrar Sesión" style="cursor: pointer; white-space: nowrap; text-align: left;"><i class="fas fa-sign-out-alt me-1"></i><span class="d-none d-lg-inline">Cerrar Sesión</span><span class="d-lg-none">Cerrar Sesión</span></a></div>`; authListItem.querySelector('#logoutButton')?.addEventListener('click', e => { e.preventDefault(); if (window.confirm('¿Estás seguro de que quieres cerrar la sesión?')) { sessionStorage.removeItem('currentUserPSJ'); window.location.href = 'index.html'; }}); if (isLoginPage || isRegisterPage) window.location.href = 'index.html'; } else { let activeClass = isLoginPage ? "active" : ""; authListItem.innerHTML = `<a class="nav-link ${activeClass}" href="login.html" aria-label="Iniciar Sesión"><i class="fas fa-user me-1"></i><span class="d-none d-lg-inline">Iniciar Sesión</span></a>`; } }
    function renderProducts(productsArray, containerElement, isRelated = false) { if (!containerElement) return; containerElement.innerHTML = ''; if (productsArray.length === 0) { if (isRelated) containerElement.innerHTML = '<p class="text-center text-muted col-12">No hay otros productos similares.</p>'; else if (!window.location.pathname.includes('resultados-busqueda.html')) containerElement.innerHTML = '<p class="text-center text-muted col-12">No hay productos en esta categoría.</p>'; return; } productsArray.forEach(product => { const cardCol = document.createElement('div'); cardCol.className = (isRelated || window.location.pathname.includes('producto-detalle.html')) ? 'col-md-4 d-flex' : 'col-md-6 col-lg-4 d-flex'; const btnClass = isRelated ? 'btn-sm btn-outline-secondary' : 'btn-outline-primary'; const btnText = isRelated ? 'Ver' : 'Ver Detalles'; cardCol.innerHTML = `<div class="card h-100 product-card w-100"><img src="${product.image}" class="card-img-top" alt="${product.alt || product.name}"><div class="card-body d-flex flex-column text-center"><h5 class="card-title">${product.name}</h5>${!isRelated ? `<p class="card-text small flex-grow-1">${product.description}</p>` : ''}${!isRelated ? `<p class="fw-bold h5 mt-2">${product.price}</p>` : ''}<a href="${product.detailUrl}" class="btn ${btnClass} mt-auto align-self-center stretched-link">${btnText}</a></div></div>`; containerElement.appendChild(cardCol); }); }
    function renderRelatedProducts(productsArray, containerElement) { renderProducts(productsArray, containerElement, true); }
    function displayCheckoutSummary() { const cart = getCart(); const itemListEl = document.getElementById('checkout-item-list'); const cartCountEl = document.getElementById('checkout-cart-count'); const subtotalEl = document.getElementById('checkout-subtotal'); const grandTotalEl = document.getElementById('checkout-grand-total'); const currentUser = JSON.parse(sessionStorage.getItem('currentUserPSJ')); if (!currentUser) { showToast("Debes <a href='login.html' class='alert-link'>iniciar sesión</a> para proceder al pago.", 'warning'); setTimeout(() => { window.location.href = `login.html?redirect=${encodeURIComponent('pago.html')}`; }, 3000); const formContainer = document.getElementById('checkoutForm')?.closest('.col-md-7.col-lg-8'); const summaryContainer = document.querySelector('.col-md-5.col-lg-4.order-md-last'); if(formContainer) formContainer.innerHTML = '<p class="text-center lead">Redirigiendo a inicio de sesión...</p>'; if(summaryContainer) summaryContainer.style.display = 'none'; const pageTitle = document.querySelector('main.py-5 .container > .py-4.text-center h1.section-title'); if(pageTitle) pageTitle.style.display = "none"; const pageLead = document.querySelector('main.py-5 .container > .py-4.text-center p.lead'); if(pageLead) pageLead.style.display = "none"; return false; } if (!itemListEl || cart.length === 0) { const mainRow = document.querySelector('main.py-5 .container .row.g-5'); if (mainRow) { mainRow.innerHTML = `<div class="col-12 text-center"><h2 class="section-title">Tu carrito está vacío</h2><p class="lead">No tienes productos para proceder al pago.</p><a href="productos.html" class="btn btn-primary btn-lg mt-3">Ver Productos</a></div>`; const pageHeader = document.querySelector('main.py-5 .container > .py-4.text-center'); if(pageHeader) pageHeader.innerHTML = '<h1 class="section-title">Carrito Vacío</h1>'; } if (cartCountEl) cartCountEl.textContent = '0'; if (subtotalEl) subtotalEl.textContent = '$0.00'; if (grandTotalEl) grandTotalEl.textContent = '$0.00'; return false; } itemListEl.innerHTML = ''; let currentSubtotal = 0; let itemCount = 0; cart.forEach(item => { const li = document.createElement('li'); li.className = 'list-group-item d-flex justify-content-between lh-sm'; li.innerHTML = `<div><h6 class="my-0">${item.name}</h6><small class="text-muted">Cantidad: ${item.quantity}</small></div><span class="text-muted">$${(item.price * item.quantity).toFixed(2)}</span>`; itemListEl.appendChild(li); currentSubtotal += item.price * item.quantity; itemCount += item.quantity; }); const shippingCost = 50.00; const grandTotal = currentSubtotal + shippingCost; if (cartCountEl) cartCountEl.textContent = itemCount; if (subtotalEl) subtotalEl.textContent = `$${currentSubtotal.toFixed(2)}`; if (grandTotalEl) grandTotalEl.textContent = `$${grandTotal.toFixed(2)}`; return true; }
    function handleCheckoutFormSubmit(event) { event.preventDefault(); const form = event.target; form.classList.add('was-validated'); if (!form.checkValidity()) { event.stopPropagation(); showToast("Por favor, completa todos los campos requeridos.", 'warning'); return; } showToast("Procesando tu pedido...", 'info'); setTimeout(() => { saveCart([]); sessionStorage.setItem('purchaseCompletedPSJ', 'true'); window.location.href = 'index.html'; }, 2500); }
    function showPurchaseSuccessToastIfNeeded() { if (sessionStorage.getItem('purchaseCompletedPSJ') === 'true') { showToast("¡Gracias por tu compra! Tu pedido ha sido realizado con éxito."); sessionStorage.removeItem('purchaseCompletedPSJ'); } }
    function startMainWebsiteTour() {
    const intro = introJs();
    intro.setOptions({
        steps: [
            {
                element: document.querySelector('.navbar-brand'),
                intro: "¡Bienvenido a Pastelería San José! Este es nuestro logo. Haz clic aquí para volver siempre a la página de inicio.",
                position: 'bottom'
            },
            {
                element: document.querySelector('.nav-item a[href="index.html"]'),
                intro: "Este es el enlace a la página de <strong>Inicio</strong>, donde puedes ver nuestras novedades y destacados.",
                position: 'bottom'
            },
            {
                element: document.querySelector('.nav-item a[href="nosotros.html"]'),
                intro: "Haz clic en <strong>Nosotros</strong> para conocer más sobre nuestra historia, la tradición familiar y el equipo detrás de cada delicia.",
                position: 'bottom'
            },
            {
                element: document.querySelector('.nav-item a[href="productos.html"]'),
                intro: "En <strong>Productos</strong> encontrarás nuestro catálogo completo de pasteles, panadería y postres individuales. ¡Todo hecho con amor!",
                position: 'bottom'
            },
            {
                element: document.querySelector('.nav-item a[href="sucursales.html"]'),
                intro: "Visita <strong>Sucursales</strong> para encontrar la ubicación, horarios y datos de contacto de todas nuestras pastelerías.",
                position: 'bottom'
            },
            {
                element: document.querySelector('.nav-item a[href="contacto.html"]'),
                intro: "Si tienes alguna duda, comentario, o deseas cotizar un pastel personalizado, la sección de <strong>Contacto</strong> es tu vía directa con nosotros.",
                position: 'bottom'
            },
            {
                element: document.getElementById('search-icon-button'),
                intro: "Utiliza el icono de <strong>búsqueda</strong> (la lupa) para encontrar rápidamente cualquier producto específico que estés buscando.",
                position: 'bottom'
            },
            {
                element: document.getElementById('cart-icon-button'),
                intro: "Este es tu <strong>carrito de compras</strong>. Aquí podrás ver los productos que has añadido antes de proceder al pago. Necesitas iniciar sesión para usarlo.",
                position: 'bottom'
            },
            {
                element: document.getElementById('auth-nav-item'),
                intro: "Desde este apartado puedes <strong>Iniciar Sesión</strong> en tu cuenta si ya tienes una, o <strong>Registrarte</strong> para crear una nueva. Al tener una cuenta, tus compras son más ágiles.",
                position: 'bottom'
            },
            {
                element: document.querySelector('button[data-bs-target="#accessibilityOffcanvas"]'),
                intro: "Este botón abre las <strong>opciones de accesibilidad</strong>, donde puedes ajustar la apariencia del sitio (tema claro/oscuro, tamaño de texto, alto contraste) y también reiniciar este tour cuando quieras.",
                position: 'left'
            }
        ],
        nextLabel: 'Siguiente &rarr;',
        prevLabel: '&larr; Anterior',
        doneLabel: '¡Entendido!',
        tooltipClass: 'customTooltipForSanJose', // Puedes usar esta clase para estilizar los tooltips si quieres
        showBullets: false, // Opcional: Oculta los puntos de navegación si prefieres solo botones
        showProgress: true, // Muestra una barra de progreso
        exitOnEsc: true,
        exitOnOverlayClick: true, // Permite cerrar el tour haciendo clic fuera del tooltip
    });

    const accessibilityOffcanvasElement = document.getElementById('accessibilityOffcanvas');
    const mainNavbarCollapse = document.getElementById('navbarNav');

    // Cerrar el offcanvas de accesibilidad si está abierto
    if (accessibilityOffcanvasElement && accessibilityOffcanvasElement.classList.contains('show')) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(accessibilityOffcanvasElement);
        if (bsOffcanvas) {
            // Escuchar el evento de que el offcanvas se ocultó para iniciar el tour
            accessibilityOffcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
                // Si el menú principal está colapsado (móvil), expandirlo.
                if (mainNavbarCollapse && !mainNavbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(mainNavbarCollapse, { toggle: false });
                    bsCollapse.show();
                    // Esperar a que la animación de collapse termine para iniciar el tour
                    mainNavbarCollapse.addEventListener('shown.bs.collapse', () => {
                        intro.start();
                    }, { once: true });
                } else {
                    intro.start();
                }
            }, { once: true });
            bsOffcanvas.hide();
            return; // Salir para esperar el evento hidden.bs.offcanvas
        }
    }

    // Si el offcanvas no estaba abierto, proceder con la lógica del navbar colapsado
    if (mainNavbarCollapse && !mainNavbarCollapse.classList.contains('show') && window.innerWidth < 992) { // 992px es el breakpoint lg de Bootstrap
        const bsCollapse = bootstrap.Collapse.getInstance(mainNavbarCollapse) || new bootstrap.Collapse(mainNavbarCollapse, { toggle: false });
        bsCollapse.show();
        mainNavbarCollapse.addEventListener('shown.bs.collapse', () => {
            intro.start();
        }, { once: true });
    } else {
        intro.start();
    }
}


    // --- Event Listeners y Ejecuciones en DOMContentLoaded ---
    document.addEventListener('DOMContentLoaded', function() {
        // La clase 'fade-in-start' se aplica inmediatamente cuando el script se parsea
        window.addEventListener('load', () => {
            document.body.classList.add('fade-in-loaded');
            setTimeout(() => { document.body.classList.remove('fade-in-start'); }, 300); 
        });

        const currentYearSpan = document.getElementById('current-year');
        if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
        console.log('Pastelería San José - Scripts cargados y DOM listo.');
        
        // Lógica de Tema: Sincronizar el switch con el tema ya aplicado por el script en <head>
        const themeAppliedByHead = localStorage.getItem(themeLocalStorageKey) || 
                                   document.documentElement.getAttribute('data-bs-theme') ||
                                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        console.log('[scripts.js] DOMContentLoaded: Tema detectado para switch sync ->', themeAppliedByHead);
        
        const themeSwitcher = document.getElementById('darkModeSwitch');
        if (themeSwitcher) {
            themeSwitcher.checked = (themeAppliedByHead === 'dark'); 
            console.log('[scripts.js] DOMContentLoaded: Estado inicial del switch darkModeSwitch ->', themeSwitcher.checked);
            
            themeSwitcher.addEventListener('change', () => {
                const newTheme = themeSwitcher.checked ? 'dark' : 'light';
                setTheme(newTheme, true); // true indica que es una acción del usuario
            });
        } else {
            console.error('[scripts.js] DOMContentLoaded: darkModeSwitch NO FUE ENCONTRADO.');
        }

        // Listener para cambios en la preferencia de tema del OS
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            const systemThemeNow = e.matches ? 'dark' : 'light';
            console.log('[scripts.js] OS theme changed event, sistema ahora es ->', systemThemeNow);
            
            // Solo actualiza si el usuario NO ha interactuado explícitamente con el switch
            if (!localStorage.getItem(userOverrideKey)) { 
                console.log('[scripts.js] OS theme change: No hay override de usuario, aplicando tema del sistema.');
                setTheme(systemThemeNow, false); // false porque no es acción directa del switch del sitio
            } else {
                console.log('[scripts.js] OS theme change ignored: Hay un override de usuario en localStorage.');
            }
        });

        // Barra de búsqueda
        const searchIconButton = document.getElementById('search-icon-button');
        const searchBarContainer = document.getElementById('searchBarCollapse');
        const mainNavbarCollapse = document.getElementById('navbarNav'); 
        if (searchIconButton && searchBarContainer && mainNavbarCollapse) {
            searchIconButton.addEventListener('click', function(event) {
                event.preventDefault();
                if (mainNavbarCollapse.classList.contains('show')) { const bsCollapse = bootstrap.Collapse.getInstance(mainNavbarCollapse); if (bsCollapse) bsCollapse.hide(); else mainNavbarCollapse.classList.remove('show'); }
                searchBarContainer.classList.toggle('search-bar--visible');
                if (searchBarContainer.classList.contains('search-bar--visible')) searchBarContainer.querySelector('input[type="search"]')?.focus();
            });
        }
        const mainSearchBarForm = document.querySelector('#searchBarCollapse form');
        if (mainSearchBarForm) {
            mainSearchBarForm.addEventListener('submit', function(event) {
                event.preventDefault(); const searchInput = mainSearchBarForm.querySelector('input[type="search"]'); const query = searchInput.value.trim();
                if (query) window.location.href = `resultados-busqueda.html?q=${encodeURIComponent(query)}`; else searchInput.focus();
            });
        }
        
        try { AOS.init({ duration: 800, once: true }); } catch (error) { console.error("Error al inicializar AOS:", error); }

        // Controles de accesibilidad (tamaño de fuente, alto contraste)
        const decreaseFontButton = document.getElementById('decrease-font-button'); const resetFontButton = document.getElementById('reset-font-button');
        const increaseFontButton = document.getElementById('increase-font-button'); const fontSizeStatus = document.getElementById('font-size-status');
        const htmlElement = document.documentElement; const fontSizes = { small: '90%', normal: '100%', medium: '115%', large: '130%' };
        const fontSizeLevels = Object.keys(fontSizes);
        const applyFontSize = (level) => {
            if (!fontSizes[level]) level = 'normal'; htmlElement.style.fontSize = fontSizes[level]; localStorage.setItem('fontSizeLevel', level);
            if (fontSizeStatus) { const lt = {small: 'Pequeño', normal: 'Normal', medium: 'Mediano', large: 'Grande'}; fontSizeStatus.textContent = `Tamaño actual: ${lt[level]}`; }
            if (decreaseFontButton) decreaseFontButton.disabled = (level === fontSizeLevels[0]);
            if (increaseFontButton) increaseFontButton.disabled = (level === fontSizeLevels[fontSizeLevels.length - 1]);
        };
        applyFontSize(localStorage.getItem('fontSizeLevel') || 'normal');
        if (decreaseFontButton) decreaseFontButton.addEventListener('click', () => { let cl = localStorage.getItem('fontSizeLevel') || 'normal'; let ci = fontSizeLevels.indexOf(cl); if (ci > 0) applyFontSize(fontSizeLevels[ci - 1]); });
        if (resetFontButton) resetFontButton.addEventListener('click', () => applyFontSize('normal'));
        if (increaseFontButton) increaseFontButton.addEventListener('click', () => { let cl = localStorage.getItem('fontSizeLevel') || 'normal'; let ci = fontSizeLevels.indexOf(cl); if (ci < fontSizeLevels.length - 1) applyFontSize(fontSizeLevels[ci + 1]); });

        const highContrastSwitcher = document.getElementById('highContrastSwitch');
        const setContrast = (contrast) => { if (contrast === 'high') { htmlElement.setAttribute('data-contrast', 'high'); localStorage.setItem('contrast', 'high'); } else { htmlElement.removeAttribute('data-contrast'); localStorage.setItem('contrast', 'normal'); }};
        setContrast(localStorage.getItem('contrast'));
        if (highContrastSwitcher) { highContrastSwitcher.checked = (localStorage.getItem('contrast') === 'high'); highContrastSwitcher.addEventListener('change', () => setContrast(highContrastSwitcher.checked ? 'high' : 'normal')); }

        initializePasswordToggle('passwordInput', 'togglePasswordLogin');
        initializePasswordToggle('registerPasswordInput', 'toggleRegisterPassword');
        initializePasswordToggle('confirmPasswordInput', 'toggleConfirmPassword');
        
        const registrationForm = document.getElementById('registrationForm');
        if (registrationForm && window.location.pathname.includes('registro.html')) {
            const emailInput = document.getElementById('registerEmailInput'); const passwordInput = document.getElementById('registerPasswordInput');
            const confirmPasswordInput = document.getElementById('confirmPasswordInput'); const messageDiv = document.getElementById('registrationMessage');
            registrationForm.addEventListener('submit', function(event) {
                event.preventDefault(); const email = emailInput.value.trim(); const password = passwordInput.value; const confirmPassword = confirmPasswordInput.value;
                messageDiv.innerHTML = ''; messageDiv.className = 'mt-3';
                if (!validateEmail(email)) { displayRegistrationMessage(messageDiv, 'Por favor, introduce un correo electrónico válido.', 'danger'); return; }
                if (password.length < 8 || password.length > 32) { displayRegistrationMessage(messageDiv, 'La contraseña debe tener entre 8 y 32 caracteres.', 'danger'); return; }
                if (password !== confirmPassword) { displayRegistrationMessage(messageDiv, 'Las contraseñas no coinciden.', 'danger'); return; }
                let users = JSON.parse(localStorage.getItem('registeredUsersPSJ')) || [];
                if (users.find(user => user.email === email)) { displayRegistrationMessage(messageDiv, 'Este correo electrónico ya está registrado. Por favor, intenta <a href="login.html" class="alert-link">iniciar sesión</a>.', 'warning'); return; }
                users.push({ email: email, password: password }); localStorage.setItem('registeredUsersPSJ', JSON.stringify(users));
                displayRegistrationMessage(messageDiv, '¡Cuenta creada exitosamente! Serás redirigido para iniciar sesión.', 'success');
                setTimeout(() => { window.location.href = 'login.html'; }, 3000);
            });
        }
        function validateEmail(email) { const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return re.test(String(email).toLowerCase()); }
        function displayRegistrationMessage(element, message, type) { element.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`; element.className = `mt-3 alert-container fade-in-start fade-in-loaded`; }

        const loginForm = document.getElementById('loginForm');
        if (loginForm && window.location.pathname.includes('login.html')) {
            const emailInput = document.getElementById('emailInput'); const passwordInput = document.getElementById('passwordInput'); const messageDiv = document.getElementById('loginMessage');
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault(); const email = emailInput.value.trim(); const password = passwordInput.value;
                messageDiv.innerHTML = ''; messageDiv.className = 'mt-3';
                if (!email || !password) { displayLoginMessage(messageDiv, 'Por favor, ingresa tu correo y contraseña.', 'warning'); return; }
                const users = JSON.parse(localStorage.getItem('registeredUsersPSJ')) || [];
                const foundUser = users.find(user => user.email === email && user.password === password);
                if (foundUser) { 
                    displayLoginMessage(messageDiv, '¡Inicio de sesión exitoso! Redirigiendo...', 'success');
                    sessionStorage.setItem('currentUserPSJ', JSON.stringify({ email: foundUser.email }));
                    setTimeout(() => { 
                        const urlParams = new URLSearchParams(window.location.search);
                        const redirectUrl = urlParams.get('redirect');
                        window.location.href = redirectUrl || 'index.html'; 
                    }, 2000);
                } else { displayLoginMessage(messageDiv, 'Correo electrónico o contraseña incorrectos.', 'danger'); }
            });
        }
        function displayLoginMessage(element, message, type) { element.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`; element.className = `mt-3 alert-container fade-in-start fade-in-loaded`;}

        if (window.location.pathname.includes('productos.html') && !window.location.pathname.includes('producto-detalle.html')) {
            const pastelesContainer = document.getElementById('pasteles-container'); const panaderiaContainer = document.getElementById('panaderia-container'); const postresContainer = document.getElementById('postres-container');
            if (pastelesContainer) renderProducts(allProducts.filter(p => p.category === 'pasteles'), pastelesContainer);
            if (panaderiaContainer) renderProducts(allProducts.filter(p => p.category === 'panaderia'), panaderiaContainer);
            if (postresContainer) renderProducts(allProducts.filter(p => p.category === 'postres'), postresContainer);
        }
        
        if (window.location.pathname.includes('producto-detalle.html')) {
            const urlParams = new URLSearchParams(window.location.search); const productId = urlParams.get('id');
            const product = allProducts.find(p => p.id === productId);
            const breadcrumbProductName = document.getElementById('breadcrumb-product-name'); const detailImage = document.getElementById('product-detail-image');
            const detailName = document.getElementById('product-detail-name'); const detailDescLead = document.getElementById('product-detail-desc-lead');
            const detailDescExtra = document.getElementById('product-detail-desc-extra'); const detailPrice = document.getElementById('product-detail-price');
            const detailNotes = document.getElementById('product-detail-notes'); const relatedProductsContainer = document.getElementById('related-products-container');
            const addToCartButton = document.getElementById('add-to-cart-button');
            if (product) {
                document.title = `Pastelería San José - ${product.name}`;
                if (breadcrumbProductName) breadcrumbProductName.textContent = product.name;
                if (detailImage) { detailImage.src = product.image; detailImage.alt = product.alt || product.name; }
                if (detailName) detailName.textContent = product.name;
                if (detailDescLead) detailDescLead.innerHTML = product.longDescription || product.description;
                if (detailDescExtra) { if (product.extraDescription) { detailDescExtra.innerHTML = product.extraDescription; detailDescExtra.style.display = 'block'; } else { detailDescExtra.style.display = 'none'; }}
                if (detailPrice) detailPrice.textContent = `${product.price} MXN`;
                if (detailNotes) {
                    detailNotes.innerHTML = ''; 
                    if (product.allergens) { const aP = document.createElement('p'); aP.innerHTML = `<i class="fas fa-info-circle me-1"></i> ${product.allergens}`; detailNotes.appendChild(aP); }
                    if (product.servingInfo) { const sP = document.createElement('p'); sP.innerHTML = `<i class="fas fa-birthday-cake me-1"></i> ${product.servingInfo}`; detailNotes.appendChild(sP); }
                }
                if (addToCartButton) { addToCartButton.addEventListener('click', () => { const qInput = document.getElementById('quantityInput'); const qty = qInput ? parseInt(qInput.value, 10) : 1; if (!isNaN(qty) && qty > 0) addToCart(product.id, qty); else { alert("Cantidad inválida."); if(qInput) qInput.value = 1; }}); }
                if (relatedProductsContainer) { const related = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3); renderRelatedProducts(related, relatedProductsContainer); }
            } else {
                const mainCont = document.querySelector('main.py-5 .container');
                if (mainCont) mainCont.innerHTML = `<div class="alert alert-warning text-center" role="alert"><h2 class="alert-heading">Producto no encontrado</h2><p>El producto no está disponible o el enlace es incorrecto.</p><hr><a href="productos.html" class="btn btn-primary">Volver a Productos</a></div>`;
                console.error('Producto no encontrado:', productId);
            }
        }

        if (window.location.pathname.includes('resultados-busqueda.html')) {
            const urlParams = new URLSearchParams(window.location.search); const query = urlParams.get('q');
            const sQueryDisplayEl = document.getElementById('search-query-display'); const resultsContEl = document.getElementById('search-results-container');
            if (query && resultsContEl && sQueryDisplayEl) {
                const decQuery = decodeURIComponent(query); document.title = `Resultados para "${decQuery}" - Pastelería San José`;
                sQueryDisplayEl.textContent = `Mostrando resultados para: "${decQuery}"`;
                const lcQuery = decQuery.toLowerCase();
                const filtProds = allProducts.filter(p => (p.name.toLowerCase().includes(lcQuery) || p.description.toLowerCase().includes(lcQuery) || (p.longDescription && p.longDescription.toLowerCase().includes(lcQuery))));
                if (filtProds.length > 0) renderProducts(filtProds, resultsContEl, false); 
                else resultsContEl.innerHTML = `<div class="col-12"><p class="text-center alert alert-warning">No se encontraron productos para: "<strong>${decQuery}</strong>".</p><p class="text-center"><a href="productos.html" class="btn btn-primary">Ver todos los productos</a></p></div>`;
            } else if (resultsContEl && sQueryDisplayEl) { 
                sQueryDisplayEl.textContent = 'Ingresa un término en la barra de búsqueda para encontrar productos.';
                resultsContEl.innerHTML = `<div class="col-12"><p class="text-center alert alert-info">Utiliza la barra de búsqueda en la parte superior para encontrar tus productos favoritos.</p></div>`;
            }
        }

        const startTourBtn = document.getElementById('startMainTourButton');
    if (startTourBtn) {
        startTourBtn.addEventListener('click', startMainWebsiteTour);
    }

        if (window.location.pathname.includes('pago.html')) {
            if (displayCheckoutSummary()) { // Asegura que el resumen se muestre y el usuario esté logueado
                const checkoutForm = document.getElementById('checkoutForm'); 
                if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutFormSubmit);
                
                const currentUser = JSON.parse(sessionStorage.getItem('currentUserPSJ'));
                const emailInputCheckout = document.getElementById('email'); 
                if (currentUser && currentUser.email && emailInputCheckout) { 
                    emailInputCheckout.value = currentUser.email; 
                    emailInputCheckout.readOnly = true; // Opcional: hacer el email no editable si ya está logueado
                }

                // --- INICIO: Lógica para formateo de campos de pago ---
                const ccNumberInput = document.getElementById('cc-number');
                const ccExpirationInput = document.getElementById('cc-expiration');
                const ccCvvInput = document.getElementById('cc-cvv');

                if (ccNumberInput) {
                    ccNumberInput.addEventListener('input', function (e) {
                        let value = e.target.value.replace(/\D/g, ''); // Eliminar no dígitos
                        let formattedValue = '';

                        for (let i = 0; i < value.length; i++) {
                            if (i > 0 && i % 4 === 0) {
                                formattedValue += '-';
                            }
                            formattedValue += value[i];
                        }
                        // Limitar a XXXX-XXXX-XXXX-XXXX (19 caracteres)
                        e.target.value = formattedValue.substring(0, 19); 
                    });
                }

                if (ccExpirationInput) {
                    ccExpirationInput.addEventListener('input', function (e) {
                        let value = e.target.value.replace(/\D/g, ''); // Eliminar no dígitos
                        let formattedValue = '';

                        if (value.length > 0) {
                            formattedValue += value.substring(0, 2); // MM
                        }
                        if (value.length >= 2) {
                            formattedValue += '/' + value.substring(2, 4); // AA
                        }
                        
                        // Limitar a MM/AA (5 caracteres)
                        e.target.value = formattedValue.substring(0, 5); 
                    });
                }

                if (ccCvvInput) {
                    ccCvvInput.addEventListener('input', function (e) {
                        let value = e.target.value.replace(/\D/g, ''); // Eliminar no dígitos
                        e.target.value = value.substring(0, 3); // Limitar a 3 dígitos
                    });
                }
                // --- FIN: Lógica para formateo de campos de pago ---
            }
        }
        
        showPurchaseSuccessToastIfNeeded(); 
        updateLoginStateInUI(); 
        updateCartUI(); 
    }); // Fin DOMContentLoaded

})(); // Fin IIFE



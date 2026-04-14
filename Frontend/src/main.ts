import '/src/style.css'; 
import { ProductService } from './services/api_product';
import type { Product } from './types/product';

const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('es-NI', {
        style: 'currency',
        currency: 'NIO',
    }).format(amount);
};

const createProductCardHTML = (product: Product): string => {
    const imageUrl = product.urlImage || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='1'%3E%3Crect x='3' y='3' width='18' height='18' rx='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpath d='M21 15l-5-5L5 21'/%3E%3C/svg%3E";

    return `
        <article class="product-card">
            <div class="product-img-container">
                <img src="${imageUrl}" alt="${product.name}">
            </div>
            
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <span class="product-distributor">Vendido por: <span class="distributor-name">${product.supplier.businessName}</span></span>
                
                <div class="product-price-action-row">
                    <div class="product-price-row">
                        <span class="price-current">${formatCurrency(product.basePrice)}</span>
                    </div>
                    
                    <div class="product-actions">
                        <button class="btn-add-cart" data-id="${product.id}">Añadir</button>
                        <button class="btn-icon" aria-label="Añadir a lista de deseos">
                            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `;
};

const createCheckoutModalHTML = (product: Product): string => {
    return `
        <div class="modal-overlay" id="checkout-modal">
            <div class="modal-checkout">
                <button class="modal-close" id="modal-close">&times;</button>
                
                <div id="checkout-form-container">
                    <h2>Finalizar Compra</h2>
                    <p class="subtitle">Ingresa tus datos para completar la simulación</p>
                    
                    <div class="order-summary">
                        <h3>Resumen del Pedido</h3>
                        <div class="order-item">
                            <span>Producto</span>
                            <span>${product.name}</span>
                        </div>
                        <div class="order-item">
                            <span>Precio</span>
                            <span>${formatCurrency(product.basePrice)}</span>
                        </div>
                        <div class="order-item total">
                            <span>Total</span>
                            <span>${formatCurrency(product.basePrice)}</span>
                        </div>
                    </div>

                    <form id="checkout-form">
                        <div class="form-section">
                            <h3>Información Personal</h3>
                            <div class="form-group">
                                <label for="input-name">Nombre</label>
                                <input type="text" id="input-name" name="name" required placeholder="Juan">
                            </div>
                            <div class="form-group">
                                <label for="input-lastname">Apellido</label>
                                <input type="text" id="input-lastname" name="lastname" required placeholder="Pérez">
                            </div>
                            <div class="form-group">
                                <label for="input-email">Correo Electrónico</label>
                                <input type="email" id="input-email" name="email" required placeholder="juan@ejemplo.com">
                            </div>
                        </div>

                        <div class="form-section">
                            <h3>Datos de Pago (Simulado)</h3>
                            <div class="form-group">
                                <label for="input-card-number">Número de Tarjeta</label>
                                <input type="text" id="input-card-number" name="cardNumber" required placeholder="1234 5678 9012 3456" maxlength="19">
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="input-expiry">Fecha de Vencimiento</label>
                                    <input type="text" id="input-expiry" name="expiry" required placeholder="MM/YY" maxlength="5">
                                </div>
                                <div class="form-group">
                                    <label for="input-cvv">CVV</label>
                                    <input type="text" id="input-cvv" name="cvv" required placeholder="123" maxlength="4">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="input-card-name">Nombre en la Tarjeta</label>
                                <input type="text" id="input-card-name" name="cardName" required placeholder="Juan Pérez">
                            </div>
                        </div>

                        <button type="submit" class="btn-buy">Pagar ${formatCurrency(product.basePrice)}</button>
                    </form>
                </div>

                <div id="checkout-success" style="display: none;">
                    <div class="success-message">
                        <div class="success-icon">
                            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3>¡Pago Exitoso!</h3>
                        <p>Tu pedido ha sido procesado correctamente.</p>
                        <p style="font-size: 0.8rem; margin-top: 10px;">ID de transacción: <strong>${generateTransactionId()}</strong></p>
                        <p style="font-size: 0.8rem;">Correo de confirmación: <span id="confirm-email"></span></p>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const generateTransactionId = (): string => {
    return 'TXN-' + Math.random().toString(36).substring(2, 10).toUpperCase();
};

const openCheckoutModal = (product: Product) => {
    const existingModal = document.getElementById('checkout-modal');
    if (existingModal) existingModal.remove();
    
    document.body.insertAdjacentHTML('beforeend', createCheckoutModalHTML(product));
    
    const modal = document.getElementById('checkout-modal');
    const closeBtn = document.getElementById('modal-close');
    const form = document.getElementById('checkout-form') as HTMLFormElement;
    const cardNumberInput = document.getElementById('input-card-number') as HTMLInputElement;
    const expiryInput = document.getElementById('input-expiry') as HTMLInputElement;
    const emailInput = document.getElementById('input-email') as HTMLInputElement;

    setTimeout(() => modal?.classList.add('active'), 10);

    closeBtn?.addEventListener('click', () => closeModal(modal));
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
    });

    cardNumberInput?.addEventListener('input', (e) => {
        let value = (e.target as HTMLInputElement).value.replace(/\D/g, '');
        value = value.replace(/(\d{4})/g, '$1 ').trim();
        (e.target as HTMLInputElement).value = value;
    });

    expiryInput?.addEventListener('input', (e) => {
        let value = (e.target as HTMLInputElement).value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        (e.target as HTMLInputElement).value = value;
    });

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formContainer = document.getElementById('checkout-form-container');
        const successContainer = document.getElementById('checkout-success');
        const confirmEmail = document.getElementById('confirm-email');

        if (formContainer && successContainer) {
            formContainer.style.display = 'none';
            successContainer.style.display = 'block';
            
            if (confirmEmail) {
                confirmEmail.textContent = emailInput.value;
            }
        }
    });
};

const closeModal = (modal: HTMLElement | null) => {
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
};

let productsCache: Product[] = [];

const handleAddToCart = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('btn-add-cart')) {
        const productId = target.dataset.id;
        if (productId) {
            const product = productsCache.find(p => p.id === parseInt(productId));
            if (product) openCheckoutModal(product);
        }
    }
};

const initApp = async () => {
    const productContainer = document.getElementById('product-container');
    
    if (!productContainer) return;

    productContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Cargando productos...</p>';
    
    productsCache = await ProductService.getAll();

    if (productsCache.length > 0) {
        const productsHTML = productsCache.map(createProductCardHTML).join('');
        productContainer.innerHTML = productsHTML;
        
        productContainer.addEventListener('click', handleAddToCart);
    } else {
        productContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No se encontraron productos disponibles.</p>';
    }
};

document.addEventListener('DOMContentLoaded', initApp);

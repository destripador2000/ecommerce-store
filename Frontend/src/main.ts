import '/src/style.css'; 
import { ProductService } from './services/api_product';
import type { Product } from './types/product';

// Función para formatear moneda a NIO
const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('es-NI', {
        style: 'currency',
        currency: 'NIO',
    }).format(amount);
};

// Generador del HTML de la tarjeta
const createProductCardHTML = (product: Product): string => {
    // Si la API trae "string" como urlImage o está vacía, usamos el placeholder
    const imageUrl = product.urlImage && product.urlImage !== "string" 
        ? product.urlImage 
        : "https://via.placeholder.com/300x300?text=Sin+Imagen";

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

// Función principal de inicialización
const initApp = async () => {
    const productContainer = document.getElementById('product-container');
    
    if (!productContainer) return;

    productContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Cargando productos...</p>';
    
    const products = await ProductService.getAll();

    // Renderizar
    if (products.length > 0) {
        // Mapeamos el array de productos al string HTML y los unimos
        const productsHTML = products.map(createProductCardHTML).join('');
        productContainer.innerHTML = productsHTML;
    } else {
        productContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No se encontraron productos disponibles.</p>';
    }
};

document.addEventListener('DOMContentLoaded', initApp);

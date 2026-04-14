import type  { Product } from '../types/product';
import { mockProducts } from './mock_products';

// Clase que tienen las funciones para consumir la API de filtros
export class ProductService {
    private static API_URL = import.meta.env.VITE_URL_GETPRODUCTS_BYMENU;
    private static useMock = true;

    // Función para consumir la API que obtiene todos los productos
    static async getAll(skip: number = 0, limit: number = 100): Promise<Product[]> {
        if (this.useMock) {
            return mockProducts.slice(skip, skip + limit);
        }

        try {
            const params = new URLSearchParams({
                skip: skip.toString(),
                limit: limit.toString()
            });

            const response = await fetch(`${this.API_URL}/?${params}`);
            
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
            
            return await response.json();
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            return mockProducts.slice(skip, skip + limit);
        }
    }

    // Función para consumir la API que filtra por idProduct, basePrice y idSupplier
    static async filterProducts(filters: { idProduct?: number; basePrice?: number; idSupplier?: number }): Promise<Product[]> {
        if (this.useMock) {
            return mockProducts.filter(p => {
                if (filters.idProduct && p.id !== filters.idProduct) return false;
                if (filters.basePrice && p.basePrice !== filters.basePrice) return false;
                if (filters.idSupplier && p.supplierID !== filters.idSupplier) return false;
                return true;
            });
        }

        try {
            const params = new URLSearchParams();

            // Solo agregamos a la URL los parámetros que no sean undefined
            if (filters.idProduct !== undefined) params.append('idProduct', filters.idProduct.toString());
            if (filters.basePrice !== undefined) params.append('basePrice', filters.basePrice.toString());
            if (filters.idSupplier !== undefined) params.append('idSupplier', filters.idSupplier.toString());

            // Si hay parámetros, añadimos el '?', sino enviamos la ruta limpia
            const queryString = params.toString() ? `?${params.toString()}` : '';
            
            const response = await fetch(`${this.API_URL}/${queryString}`);
            
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
            
            return await response.json();
        } catch (error) {
            console.error("Error al filtrar los productos:", error);
            return mockProducts.filter(p => {
                if (filters.idProduct && p.id !== filters.idProduct) return false;
                if (filters.basePrice && p.basePrice !== filters.basePrice) return false;
                if (filters.idSupplier && p.supplierID !== filters.idSupplier) return false;
                return true;
            });
        }
    }
}

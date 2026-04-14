import type { Product } from '../types/product';

const USD_TO_NIO = 36.50;
export const mockProducts: Product[] = [
    {
        id: 1,
        name: "Laptop Gaming Pro",
        description: "Potente laptop para gaming con procesador Intel i7, 16GB RAM y tarjeta RTX 4060",
        basePrice: Math.round(1299.99 * USD_TO_NIO),
        urlImage: "https://smartdealsv.com/cdn/shop/files/08_Legion_Pro_7i_10_RGB_Rear-e1736189931478-1024x788_940x.png?v=1759606637",
        supplierID: 1,
        supplier: { id: 1, businessName: "TechWorld Nicaragua", phoneNumber: "+505 2244-5566" }
    },
    {
        id: 2,
        name: "Auriculares Bluetooth",
        description: "Auriculares wireless con cancelación de ruido y 30 horas de batería",
        basePrice: Math.round(149.99 * USD_TO_NIO),
        urlImage: "https://photos5.appleinsider.com/gallery/embedables/422-hero.png",
        supplierID: 1,
        supplier: { id: 1, businessName: "TechWorld Nicaragua", phoneNumber: "+505 2244-5566" }
    },
    {
        id: 3,
        name: "Smartwatch Fit",
        description: "Reloj inteligente con monitor de frecuencia cardíaca y resistencia al agua",
        basePrice: Math.round(199.99 * USD_TO_NIO),
        urlImage: "https://media.solotodo.com/media/products/1912807_picture_1715305383.png",
        supplierID: 2,
        supplier: { id: 2, businessName: "ElectroHogar", phoneNumber: "+505 2255-6677" }
    },
    {
        id: 4,
        name: "Consola de Videojuegos",
        description: "Consola de última generación con 1TB de almacenamiento y mando incluido",
        basePrice: Math.round(499.99 * USD_TO_NIO),
        urlImage: "https://resource.megaeletronicos.com/uploads/Product/new/1/5/6/8/2/2/156822/1767098067_1767098067.webp",
        supplierID: 3,
        supplier: { id: 3, businessName: "GameStore Nicaragua", phoneNumber: "+505 2266-7788" }
    },
    {
        id: 5,
        name: "iPhone 16 ProMax",
        description: "El peor celular del mundo",
        basePrice: Math.round(700 * USD_TO_NIO),
        urlImage: "https://bsimg.nl/images/apple-iphone-16-pro-max-256gb-wit-eu_1.png/F46iiJay5eGcxk6rVlvdxT-XMGE%3D/fit-in/257x400/filters%3Aformat%28png%29%3Aupscale%28%29",
        supplierID: 1,
        supplier: { id: 1, businessName: "TechWorld Nicaragua", phoneNumber: "+505 2244-5566" }
    }
];

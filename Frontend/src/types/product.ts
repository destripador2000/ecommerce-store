export interface Supplier{
  id: number;
  businessName: string;
  phoneNumber: string;
}

export interface Product{
  id: number;
  name: string;
  description: string;
  basePrice: number;
  urlImage: string;
  supplierID: number;
  supplier: Supplier;
}

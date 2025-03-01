export interface Product {
  id?: string;
  name: string;
  price: number;
  imageUrl: string;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
}

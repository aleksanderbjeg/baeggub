export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  cartTotal: number;
  itemCount: number;
}
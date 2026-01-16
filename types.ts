
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  description?: string;
  category: 'cake' | 'cupcake' | 'cheesecake' | 'bakery' | 'extra';
}

export interface CakeOption {
  size: string;
  price: number;
}

export interface OrderState {
  items: { [key: string]: number };
  customInstructions: string;
  referenceImage: string | null;
  editedImage: string | null;
}

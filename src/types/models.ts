export interface StoreProduct {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  stock: string;
  image: string
  rating: {
    rate: number;
    count: number;
  };
}

export interface AccordionData {
  title: string
  content: string
}

export interface ProductDetails {
  productDetails: StoreProduct
}

export interface CheckoutModalProps {
  show: boolean
  onHide: () => void
}

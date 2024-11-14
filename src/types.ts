export type Product = {
  product_id: number;
  name: string;
  price: number;
  freight: string;
  image_url: string;
  discount: number;
  best_choice: boolean;
};

export type Data = {
  video_headline: string;
  video_sub_headline: string;
  video_url: string;
  products: Product[];
};

export type DialogContextType = {
  productId: number;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  success: boolean;
  setSuccess: (value: boolean) => void;
};

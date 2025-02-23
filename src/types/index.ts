export interface ProductProp {
  id: number;
  name: string;
  price: number;
  withoutDiscont: number;
  category: string;
  manufactureDate: number;
  brief: string;
  description: string[];
  features: string[];
  img: string;
  img300x300?: string
  qntSold: number
}

export interface ProductCardProps {
  img300x300?: string
  name: string;
  price: number;
  withoutDiscont: number;
  qntSold: number
}
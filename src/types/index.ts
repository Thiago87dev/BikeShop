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
}
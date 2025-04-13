export interface ProductProp {
  id: number;
  name: string;
  price: number;
  withoutDiscont: number;
  category: string;
  manufactureDate: number;
  brief: string;
  description: string[];
  features: string[][];
  img: string;
  img300x300: string;
  qntSold: number;
  inHome?: boolean
}

export interface ProductCardHomeProps {
  img300x300: string;
  name: string;
  price: number;
  withoutDiscont: number;
  qntSold: number;
  inHome?: boolean
  id: number
}

export interface ProductCardProps {
  img300x300: string;
  name: string;
  price: number;
  withoutDiscont: number;
  id:number
}

export interface CardProductsHorizontalProps {
  img300x300: string;
  name: string;
  price: number;
  withoutDiscont: number;
  brief: string
  id:number
}

export interface PostProp {
  id: number;
  mainCategory: string;
  secondaryCategory: string;
  title: string;
  author: string;
  publishedAt: string;
  popularity: number;
  img: string;
}

export interface CardPostProp {
  secondaryCategory: string;
  title: string;
  img: string;
  id:number
}

export interface ProductDetailProps {
  img: string;
  name: string;
  price: number;
  withoutDiscont: number;
  brief: string
  category: string
}

export interface DescriptionProps {
  description: string[]
  features: string[][]
}

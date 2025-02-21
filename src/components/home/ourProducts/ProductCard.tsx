import Image from "next/image";

interface ProductCardProps {
  img: string;
  name: string;
  price: number;
  withoutDiscont: number;
}

const ProductCard = ({
  img,
  name,
  price,
  withoutDiscont,
}: ProductCardProps) => {
  return (
    <div className="w-[400px] h-96 bg-white">
      <div>
        <Image
          alt="img teste"
          src={img}
          width={400}
          height={400}
        />
      </div>
      <div>
        <h1>{name}</h1>
        {withoutDiscont > 0 ? <p>{withoutDiscont}</p> : <p></p>}
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

import { useEffect, useState } from "react";
import { ProductProp, DescriptionProps } from "@/types";

interface ProductIdProp {
  id: string;
}
const Description = ({ id }: ProductIdProp) => {
  const idNumber = Number(id);
  const [product, setProduct] = useState<DescriptionProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/products.json");
        const data: ProductProp[] = await response.json();
        const foundProduct = data.find((product) => product.id === idNumber);
        if (foundProduct) setProduct(foundProduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [idNumber]);

  return (
    <div className="flex flex-col gap-5 px-4 mb-10">
      <h2 className="font-bold text-4xl mb-2">Description</h2>
      {product?.description && (
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{
            __html: product.description[0].replace(
              "scelerisque eu ultrices vitae auctor.",
              "<i>scelerisque eu ultrices vitae auctor.</i>"
            ),
          }}
        ></div>
      )}
      <div>
        <h3 className="font-bold text-3xl">Features:</h3>
        <div className="text-lg">
          {product?.features.map((i, index) => (
            <div key={index}>
              <ul className="flex gap-1  px-8">
                {i.map((j, index2) => (
                  <li
                    className={`${index2 === 0 ? "font-bold list-disc" : ""}`}
                    key={index2}
                  >
                    {j}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {product?.description && (
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{
            __html: product.description[1].replace(
              "aliquet risus feugiat in ante metus",
              "<strong>aliquet risus feugiat in ante metus</strong>"
            ),
          }}
        ></div>
      )}
    </div>
  );
};

export default Description;

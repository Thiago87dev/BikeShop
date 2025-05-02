import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrdersList = () => {
  const bikesInCart = useSelector((state: RootState) => state.Cart.bikes);

  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    const total = bikesInCart.reduce((acc, item) => {
      return acc + item.price * (item.quantity ?? 1);
    }, 0);
    setSubtotal(total);
  }, [bikesInCart]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-3xl mb-3">Your Orders</h2>
      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th className="text-left border-b pb-2">Product</th>
            <th className="border-b pb-2 text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {bikesInCart.map((item) => (
            <tr key={item.title}>
              <td className="border-b pb-2">
                <p>
                  {item.title}{" "}
                  <span className="font-bold"> x {item.quantity}</span>
                </p>
              </td>
              <td className="border-b pb-2 text-left">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.price)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border-b pb-2 font-bold">Subtotal</td>
            <td className="border-b pb-2 font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(subtotal)}
            </td>
          </tr>
          <tr>
            <td className="font-bold">Total</td>
            <td className="font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(subtotal)}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="bg-[#f7edf1] p-7 border-l-4 border-l-red-600">
        <p className="leading-8">
          Sorry, it seems that there are no available payment methods. Please
          contact us if you require assistance or wish to make alternate
          arrangements.
        </p>
      </div>
      <button className="relative bg-red-600 text-white font-semibold uppercase w-full mt-20 px-8 mb-16 py-2 hover:shadow-md hover:bg-red-800 transition-colors duration-200">
        Place order
      </button>
    </div>
  );
};

export default OrdersList;

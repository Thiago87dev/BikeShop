import CountrySelect from "./CountrySelect";
import { useEffect, useState } from "react";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const CheckoutFormAndOrderList = () => {
  const bikesInCart = useSelector((state: RootState) => state.Cart.bikes);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [subtotal, setSubtotal] = useState<number>(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    postCode: "",
    phone: "",
    email: "",
  });

  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  useEffect(() => {
    const total = bikesInCart.reduce((acc, item) => {
      return acc + item.price * (item.quantity ?? 1);
    }, 0);
    setSubtotal(total);
  }, [bikesInCart]);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    const newErrors: { [key: string]: string } = {};

    Object.entries(inputData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = `Billing ${key}`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("OK");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:gap-14">
      <div className="flex flex-col w-full lg:w-1/2 max-w-1/2 mt-10 lg:my-10">
        <div>
          {formSubmitted &&
            Object.values(errors).some((msg) => msg.trim() !== "") && (
              <div className="bg-[#f7edf1] mb-10 p-7 border-l-4 border-l-red-600">
                {Object.values(errors)
                  .filter((msg) => msg.trim() !== "")
                  .map((msg, index) => (
                    <p className="text-red-600" key={index}>
                      <strong>{msg}</strong> is a Required field
                    </p>
                  ))}
              </div>
            )}
          <form className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl mb-3">Billing Details</h2>
            <div className="flex justify-between ">
              <div className="flex gap-1 flex-col w-[48%]">
                <label className="font-bold" htmlFor="firstName">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  className="border-2 rounded-md p-2"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={inputData.firstName}
                  onChange={handelInputChange}
                />
              </div>
              <div className="flex gap-1 flex-col w-[48%]">
                <label className="font-bold" htmlFor="lastName">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  className="border-2 rounded-md p-2"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={inputData.lastName}
                  onChange={handelInputChange}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-1 flex-col">
                <label className="font-bold" htmlFor="companyName">
                  Company name (optional)
                </label>
                <input
                  className="border-2 rounded-md p-2"
                  type="text"
                  id="companyName"
                  name="companyName"
                  onChange={handelInputChange}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-1 flex-col ">
                <label className="font-bold" htmlFor="country">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <CountrySelect />
              </div>
            </div>
            <div>
              <div className="flex gap-1 flex-col">
                <label className="font-bold">
                  Street address <span className="text-red-500">*</span>
                </label>
                <input
                  className="border-2 rounded-md p-2 mb-1"
                  type="text"
                  id="streetAddress"
                  placeholder="House number and street name"
                  name="street"
                  value={inputData.street}
                  onChange={handelInputChange}
                />
                <input
                  className="border-2 rounded-md p-2"
                  type="text"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
            </div>
            <div>
              <div className="flex gap-1 flex-col">
                <label className="font-bold" htmlFor="townCity">
                  Town / City <span className="text-red-500">*</span>
                </label>
                <input
                  className="border-2 rounded-md p-2"
                  type="text"
                  id="townCity"
                  name="city"
                  value={inputData.city}
                  onChange={handelInputChange}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-1 flex-col">
                <label className="font-bold" htmlFor="state">
                  State / County <span className="text-red-500">*</span>
                </label>
                <input
                  name="state"
                  value={inputData.state}
                  onChange={handelInputChange}
                  className="border-2 rounded-md p-2"
                  type="text"
                  id="state"
                />
              </div>
            </div>
            <div>
              <div className="flex gap-1 flex-col">
                <label className="font-bold" htmlFor="postcode">
                  Postcode / ZIP <span className="text-red-500">*</span>
                </label>
                <input
                  className="border-2 rounded-md p-2"
                  type="text"
                  id="postcode"
                  name="postCode"
                  value={inputData.postCode}
                  onChange={handelInputChange}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-1 flex-col">
                <label className="font-bold" htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  value={inputData.phone}
                  onChange={handelInputChange}
                  className="border-2 rounded-md p-2"
                  type="text"
                  id="phone"
                />
              </div>
            </div>
            <div>
              <div className="flex gap-1 flex-col">
                <label className="font-bold" htmlFor="email">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  value={inputData.email}
                  onChange={handelInputChange}
                  className="border-2 rounded-md p-2"
                  type="text"
                  id="email"
                />
              </div>
            </div>
            <h2 className="font-bold text-3xl my-3">Additional information</h2>
            <div>
              <div className="flex gap-1 flex-col">
                <label className="font-bold" htmlFor="additional">
                  Order notes (optional)
                </label>
                <textarea
                  className="border-2 rounded-md p-2"
                  id="additional"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2 max-w-1/2 mt-10 lg:my-10">
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
              Sorry, it seems that there are no available payment methods.
              Please contact us if you require assistance or wish to make
              alternate arrangements.
            </p>
          </div>
          <button
            onClick={handleFormSubmit}
            className="relative bg-red-600 text-white font-semibold uppercase w-full mt-20 px-8 mb-16 py-2 hover:shadow-md hover:bg-red-800 transition-colors duration-200"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFormAndOrderList;

import CountrySelect from "./CountrySelect";

const CheckoutBillingForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <h2 className="font-bold text-3xl mb-3">Billing details</h2>
      <div className="flex justify-between ">
        <div className="flex gap-1 flex-col w-[48%]">
          <label className="font-bold" htmlFor="firstName">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            className="border-2 rounded-md p-2"
            type="text"
            id="firstName"
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
          />
        </div>
      </div>
      <div>
        <div className="flex gap-1 flex-col">
          <label className="font-bold" htmlFor="state">
            State / County <span className="text-red-500">*</span>
          </label>
          <input className="border-2 rounded-md p-2" type="text" id="state" />
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
          />
        </div>
      </div>
      <div>
        <div className="flex gap-1 flex-col">
          <label className="font-bold" htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </label>
          <input className="border-2 rounded-md p-2" type="text" id="phone" />
        </div>
      </div>
      <div>
        <div className="flex gap-1 flex-col">
          <label className="font-bold" htmlFor="email">
            Email address <span className="text-red-500">*</span>
          </label>
          <input className="border-2 rounded-md p-2" type="text" id="email" />
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
  );
};

export default CheckoutBillingForm;

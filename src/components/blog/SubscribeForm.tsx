import EmailForm from "../EmailForm";

const SubscribeForm = () => {
  return (
    <div className="flex flex-col bg-white p-6 w-full lg:max-w-[400px]">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="font-bold text-xl">Subscribe to Newsletter</h2>
        <div className="w-full lg:w-[270px]">
          <EmailForm
            colorButton="bg-red-600"
            inputPlaceholder="Your Email Address..."
            textButton="submit"
            paddingInput="p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;

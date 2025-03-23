import EmailForm from "@/components/EmailForm";

const GetWeeklyTips = () => {
  return (
    <div className="relative flex justify-center bg-[url('/img/about/tony-pham-K2xGNNcQn_w-unsplash.jpg')] bg-center bg-cover px-4 py-8">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative flex justify-center w-full md:w-[722px] px-4 py-20 md:p-20">
      <div className="absolute inset-0 bg-red-800 opacity-85"></div>
        <div className="relative flex flex-col gap-8 w-full md:w-[542px] ">
          <h2 className="text-white font-bold text-3xl text-center">
            Get Weekly Tips, Articles, And Events Reminders Straight Into Your
            Inbox
          </h2>
          <div>
            <EmailForm  colorButton="bg-red-600" colorInput="bg-white" inputPlaceholder="Email Address" textButton="Subscribe now"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetWeeklyTips;

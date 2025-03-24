import ContactForm from "./ContactForm";
import Modal from "./Modal";

const CanWeHelpYou = () => {
  return (
    <div className="flex justify-center bg-[#f7f7f7] py-20">
      <div className="flex gap-20 w-full max-w-[1240px] px-4">
        <div className="w-1/2 h-auto">
          <div className="flex flex-col gap-6">
            <h3 className="text-red-600 font-bold text-lg text-center lg:text-left uppercase ">
              Hi! Can we help you?
            </h3>
            <h2 className="font-bold text-4xl">Popular Questions</h2>
            <p className="text-lg w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
              mauris ultrices eros in cursus turpis massa.
            </p>
            <div className="shadow-lg">
              <Modal />
            </div>
          </div>
        </div>
        <div className="relative w-1/2 h-fit bg-[url('/img/contact/velobar-vMSLp_DymMs-unsplash.jpg')] bg-left bg-cover ">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative text-white">
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanWeHelpYou;

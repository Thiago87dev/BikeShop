import ContactForm from "./ContactForm";
import Modal from "./Accordion";

const CanWeHelpYou = () => {
  return (
    <div className="flex justify-center bg-[#f7f7f7] py-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-20 w-full max-w-[1240px] sm:px-4">
        <div className="lg:w-1/2 h-auto px-4 sm:px-0">
          <div className="flex flex-col gap-6">
            <h3 className="text-red-600 font-bold text-lg text-center lg:text-left uppercase ">
              Hi! Can we help you?
            </h3>
            <h2 className="font-bold text-4xl text-center lg:text-left">Popular Questions</h2>
            <p className="text-lg lg:w-[80%] text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
              mauris ultrices eros in cursus turpis massa.
            </p>
            <div className="shadow-lg">
              <Modal />
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 h-fit bg-[url('/img/contact/velobar-vMSLp_DymMs-unsplash.jpg')] bg-left bg-cover ">
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

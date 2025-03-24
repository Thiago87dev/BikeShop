const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6 p-10">
      <div className="flex flex-col">
        <label className="text-white font-bold text-xl" htmlFor="name">
          Your Name
        </label>
        <input
          className="outline-none bg-transparent border-b-2 border-red-600 p-3"
          type="text"
          id="name"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white font-bold text-xl" htmlFor="email">
          Email Address
        </label>
        <input
          className="outline-none bg-transparent border-b-2 border-red-600 p-3"
          type="email"
          id="email"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white font-bold text-xl" htmlFor="subject">
          Subject
        </label>
        <input
          className="outline-none bg-transparent border-b-2 border-red-600 p-3"
          type="text"
          id="subject"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white font-bold text-xl" htmlFor="message">
          Message
        </label>
        <textarea
          className="outline-none bg-transparent border-b-2 border-red-600 p-3 min-h-36"
          id="subject"
        />
      </div>
    </form>
  );
};

export default ContactForm;

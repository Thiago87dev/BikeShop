"use client";

import { useState } from "react";
import { PulseLoader } from "react-spinners";

const ContactForm = () => {
  const [InfoMessage, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputsForm, setInfoMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      inputsForm.name === "" ||
      inputsForm.email === "" ||
      inputsForm.subject === "" ||
      inputsForm.message === ""
    ) {
      setError("All fields are required");
    } else {
      setLoading(true);
      setTimeout(() => {
        setError("Submission Success, Thanks for getting in touch!");
        setLoading(false);
      }, 1800);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInfoMessage((prev) => {
      const updatedForm = { ...prev, [name]: value };

      if (
        InfoMessage &&
        updatedForm.name.trim() !== "" &&
        updatedForm.email.trim() !== "" &&
        updatedForm.subject.trim() !== "" &&
        updatedForm.message.trim() !== ""
      ) {
        setError("");
      }
      return updatedForm;
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-6 p-10 `}>
      {loading && (
        <div className="absolute flex items-center bg-black/70 backdrop-blur-sm justify-center inset-0">
          <PulseLoader size={20} color="#bababa" />
        </div>
      )}
      <div className="flex flex-col">
        <label className="text-white font-bold text-xl" htmlFor="name">
          Your Name
        </label>
        <input
          className="outline-none bg-transparent border-b-2 border-red-600 p-3"
          type="text"
          id="name"
          name="name"
          value={inputsForm.name}
          onChange={handleFormChange}
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
          name="email"
          value={inputsForm.email}
          onChange={handleFormChange}
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
          name="subject"
          value={inputsForm.subject}
          onChange={handleFormChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white font-bold text-xl" htmlFor="message">
          Message
        </label>
        <textarea
          className="outline-none bg-transparent border-b-2 border-red-600 p-3 h-28"
          id="message"
          name="message"
          value={inputsForm.message}
          onChange={handleFormChange}
        />
      </div>
      <button className="bg-red-700 text-white font-semibold uppercase w-full px-8 mb-6 py-5 hover:bg-red-800 transition-colors duration-200 active:scale-95">
        Send a message
      </button>
      {InfoMessage &&  InfoMessage !== 'Submission Success, Thanks for getting in touch!' &&(
        <p className="text-red-500 text-lg font-bold bg-white border-[1px] border-solid border-red-500 p-2">
          {InfoMessage}
        </p>
      )}
      {InfoMessage && InfoMessage === 'Submission Success, Thanks for getting in touch!' && (
        <p className="text-blue-500 text-center text-lg font-bold bg-white border-[1px] border-solid border-blue-500 p-2">
          {InfoMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;

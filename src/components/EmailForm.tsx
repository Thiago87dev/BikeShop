"use client";
import { useState } from "react";
import { PulseLoader } from "react-spinners";

interface EmailFormProps {
  inputPlaceholder: string;
  colorInput?: string;
  colorButton: string;
  textButton: string;
  paddingInput?: string
}

const EmailForm = ({
  colorInput = "bg-transparent",
  colorButton,
  inputPlaceholder,
  textButton,
  paddingInput = 'p-5'
}: EmailFormProps) => {
  const [email, setEmail] = useState("");
  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      seterror("Email is Required");
    } else {
      setLoading(true);
      setTimeout(() => {
        seterror("Submission Failed");
        setLoading(false);
      }, 1800);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      seterror("");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleEmailSubmit}
        className="relative flex flex-col gap-4"
      >
        {loading && (
          <div className="absolute flex items-center bg-black/70 backdrop-blur-sm justify-center inset-0">
            <PulseLoader size={20} color="#bababa" />
          </div>
        )}
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder={inputPlaceholder}
          className={`bg-transparent ${colorInput} border-[1px] border-solid border-gray-500 ${paddingInput} text-lg`}
        />
        {error && (
          <p className="text-red-500 text-lg font-bold bg-white border-[1px] border-solid border-red-500 p-2">
            {error}
          </p>
        )}
        <button
          type="submit"
          className={`py-3 ${colorButton} px-9 text-white font-semibold hover:bg-red-700 transition-colors duration-200 uppercase text-xl`}
        >
          {textButton}
        </button>
      </form>
    </div>
  );
};

export default EmailForm;

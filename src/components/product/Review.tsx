import { useRef, useState } from "react";
import { Star } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const Review = () => {
  const recaptchaRef = useRef(null);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <div className="flex px-4">
        <div className="flex flex-col gap-5 w-[60%]">
          <h2 className="font-bold text-3xl">Reviews</h2>
          <p className="text-lg">There are no reviews yet.</p>
        </div>
        <div className="flex flex-col gap-5 w-[40%]">
          <div>
            <h2 className="font-bold text-2xl mb-1">
              Be the first to review “Ibis Exie Xt 2022 Bike”
            </h2>
            <p className="italic text-sm">
              Your email address will not be published. Required fields are
              marked <span className="text-red-500">*</span>
            </p>
          </div>
          <div>
            <p className="text-lg mb-1">
              Your rating <span>*</span>
            </p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const starValue = index + 1;
                return (
                  <div key={index}>
                    <Star
                      className="cursor-pointer transition-all duration-200"
                      size={20}
                      style={{ stroke: "black", strokeWidth: 1.2 }}
                      fill={starValue <= (hover || rating) ? "#000" : "#fff"}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(starValue)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-lg">
                Your review <span>*</span>
              </label>
              <textarea className="border border-gray-400 border-solid h-20 py-1 px-2 rounded-sm required" />
            </div>
            <div className="flex flex-col w-[65%]">
              <label className="text-lg">
                Name <span>*</span>
              </label>
              <input
                className="border border-gray-400 border-solid py-1.5 px-2 rounded-sm required:"
                type="text"
              />
            </div>
            <div className="flex flex-col w-[65%]">
              <label>
                Email <span>*</span>
              </label>
              <input
                className="border border-gray-400 border-solid py-1.5 px-2 rounded-sm required"
                type="email"
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdxofQqAAAAALgmzCKT2BzBVAyRzuUoZLt1dpTF" 
              />
            </div>
            <div>
              <button className="bg-red-600 py-4 px-9 text-white font-semibold hover:bg-red-700 transition-colors duration-200 uppercase">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;

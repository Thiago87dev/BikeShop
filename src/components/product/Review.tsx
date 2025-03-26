"use client";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { ProductDetailProps, ProductProp } from "@/types";

interface ProductIdProp {
  idReview: string;
}

const Review = ({ idReview }: ProductIdProp) => {
  const idReviewNumber = Number(idReview);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const [product, setProduct] = useState<ProductDetailProps | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [localstorageReview, setLocalstorageReview] = useState<
    { id: number; stars: number; textReview: string }[]
  >([]);
  const [showErrors, setShowErrors] = useState(false);
  const [saveNameAndEmailChecked, setSaveNameAndEmailChecked] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !captchaValue ||
      rating === 0 ||
      review === "" ||
      name === "" ||
      email === ""
    ) {
      setShowErrors(true);
      return;
    }
    if (typeof window !== "undefined") {
      localStorage.removeItem("nameEmail");

      const nameEmail = localStorage.getItem("nameEmail");
      const nameEmailObj: { name: string; email: string } = nameEmail
        ? JSON.parse(nameEmail)
        : { name, email };
      if (!saveNameAndEmailChecked) {
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "nameEmail",
            JSON.stringify({ name: "", email: "" })
          );
          setName("");
          setEmail("");
        }
      } else {
        localStorage.setItem("nameEmail", JSON.stringify(nameEmailObj));
        setName(nameEmailObj.name);
        setEmail(nameEmailObj.email);
      }

      const storedReviews = localStorage.getItem("reviews");
      const reviewsList: { id: number; stars: number; textReview: string }[] =
        storedReviews ? JSON.parse(storedReviews) : [];

      if (
        localstorageReview.filter((item) => item.id === idReviewNumber).length >
        3
      )
        return;

      const newReview = {
        id: idReviewNumber,
        stars: rating,
        textReview: review,
      };

      reviewsList.push(newReview);
      localStorage.setItem("reviews", JSON.stringify(reviewsList));
      setLocalstorageReview(reviewsList);

      if (!saveNameAndEmailChecked) {
        setName("");
        setEmail("");
      }
      setRating(0);
      setReview("");
      setShowErrors(false);
      setCaptchaValue(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  };

  useEffect(() => {
    const storedNameEmail = localStorage.getItem("nameEmail");
    if (storedNameEmail) {
      const parsedNameEmail = JSON.parse(storedNameEmail);
      if (parsedNameEmail.name && parsedNameEmail.email) {
        setName(JSON.parse(storedNameEmail).name);
        setEmail(JSON.parse(storedNameEmail).email);
        setSaveNameAndEmailChecked(true);
      }
    }
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setLocalstorageReview(JSON.parse(storedReviews));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data/products.json`);
        const data: ProductProp[] = await response.json();
        const foundProduct = data.find(
          (product) => product.id === idReviewNumber
        );
        if (foundProduct) setProduct(foundProduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [idReviewNumber]);

  return (
    <div>
      <div className="flex flex-col md:flex-row px-4">
        <div className="flex flex-col gap-5 w-full md:w-[60%] sm:pr-10 pb-10">
          <h2 className="font-bold text-3xl">Reviews</h2>
          {localstorageReview.filter((item) => item.id === idReviewNumber)
            .length < 1 ? (
            <p className="text-lg">There are no reviews yet.</p>
          ) : (
            <div className="flex flex-col gap-5">
              {localstorageReview
                .filter((item) => item.id === idReviewNumber)
                .map((item, index) => (
                  <div key={index} className="flex gap-5">
                    <div>
                      <Image
                        alt="avatar"
                        src={"/img/reviews/avatar.jpg"}
                        width={55}
                        height={55}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-4 border border-gray-400 w-full p-5 rounded-sm">
                      <div className="flex flex-col sm:flex-row gap-2  justify-between ">
                        <p className="italic text-gray-600">
                          Your review is awaiting approval
                        </p>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, index) => {
                            return (
                              <div key={index}>
                                <Star
                                  className="cursor-pointer transition-all duration-200"
                                  size={20}
                                  style={{ stroke: "black", strokeWidth: 1.2 }}
                                  fill={item.stars > index ? "#000" : "#fff"}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <p>{item.textReview}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-5 w-full md:w-[40%]">
          <div>
            {localstorageReview.filter((item) => item.id === idReviewNumber)
              .length === 0 ? (
              <h2 className="font-bold text-2xl mb-1">
                Be the first to review “{product?.name}”
              </h2>
            ) : (
              <h2 className="font-bold text-3xl mb-1">Add a review</h2>
            )}
            <p className="italic text-sm">
              Your email address will not be published. Required fields are
              marked <span className="text-red-500">*</span>
            </p>
          </div>
          <div>
            <p className="text-lg mb-1">
              Your rating <span>*</span>
            </p>
            <div>
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
              {!rating && showErrors && (
                <p className="text-red-500">Please select a rating</p>
              )}
            </div>
          </div>
          <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
            <div className="flex flex-col">
              <label className="text-lg">
                Your review <span>*</span>
              </label>
              <textarea
                value={review}
                className="border border-gray-400 border-solid h-20 py-1 px-2 rounded-sm required"
                onChange={(e) => setReview(e.target.value)}
              />
              {!review && showErrors && (
                <p className="text-red-500">Please type your review text.</p>
              )}
            </div>
            <div className="flex flex-col w-[65%]">
              <label className="text-lg">
                Name <span>*</span>
              </label>
              <input
                className="border border-gray-400 border-solid py-1.5 px-2 rounded-sm required:"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {!name && showErrors && (
                <p className="text-red-500">Please enter your name.</p>
              )}
            </div>
            <div className="flex flex-col w-[65%]">
              <label>
                Email <span>*</span>
              </label>
              <input
                className="border border-gray-400 border-solid py-1.5 px-2 rounded-sm required"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!email && showErrors && (
                <p className="text-red-500">Please enter your e-mail.</p>
              )}
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <input
                checked={saveNameAndEmailChecked}
                onChange={(e) => setSaveNameAndEmailChecked(e.target.checked)}
                type="checkbox"
              />
              <p>
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <div
              className={`${
                localstorageReview.filter((item) => item.id === idReviewNumber)
                  .length > 3
                  ? "hidden"
                  : "block"
              }`}
            >
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA}`}
                onChange={handleCaptchaChange}
              />
              {!captchaValue && showErrors && (
                <p className="text-red-500">
                  Please check the box &quot;I&lsquo;m not a robot&quot;
                </p>
              )}
            </div>
            <div>
              <button
                disabled={
                  localstorageReview.filter(
                    (item) => item.id === idReviewNumber
                  ).length > 3
                }
                className={`bg-red-600 py-4 px-9 text-white font-semibold  transition-colors duration-200 uppercase  ${
                  localstorageReview.filter(
                    (item) => item.id === idReviewNumber
                  ).length > 3
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-red-700 active:scale-95"
                }`}
              >
                submit
              </button>
              {localstorageReview.filter((item) => item.id === idReviewNumber)
                .length > 3 && (
                <p className="text-red-500">
                  Please wait for your reviews to be approved.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;

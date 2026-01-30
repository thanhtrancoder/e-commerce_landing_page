import { useState, useEffect } from "react";

import { Product } from "./components/Product.jsx";
import { PreviewProduct } from "./components/PreviewProduct.jsx";
import { ProductPopup } from "./components/ProductPopup.jsx";
import { Formula } from "./components/Formula.jsx";
import FrontrowEmbed from "./components/FrontrowEmbed.jsx";
import { Buy } from "./components/Buy.jsx";

import { products, formulas, buys } from "./data.js";

import logoImg from "./assets/images/logo.avif";

import {
  blood2Icon,
  bloodIcon,
  deliveryTruckIcon,
  downloadIcon,
  ecologyIcon,
  crowdIcon,
  leafIcon,
  starIcon,
  populationIcon,
  smileIcon,
  thighIcon,
} from "./icon.js";

function App() {
  const [productId, setProductId] = useState(0);
  const [showProductPopup, setShowProductPopup] = useState(false);

  const [animationSlideToLeft, setAnimationSlideToLeft] = useState(false);
  const [animationSlideToLeft2, setAnimationSlideToLeft2] = useState(false);
  const [animationSlideToLeft3, setAnimationSlideToLeft3] = useState(false);
  const [animationSlideToLeft1o4, setAnimationSlideToLeft1o4] = useState(false);
  const [animationSlideToLeft2o4, setAnimationSlideToLeft2o4] = useState(false);
  const [animationSlideToLeft3o4, setAnimationSlideToLeft3o4] = useState(false);
  const [animationSlideToRight, setAnimationSlideToRight] = useState(false);
  const [animationSlideToRight1o4, setAnimationSlideToRight1o4] =
    useState(false);

  useEffect(() => {}, []);

  const calculateProductId = (id, offset) => {
    const raw = id + offset;
    return ((raw % products.length) + products.length) % products.length;
  };

  const handleCloseNutritionalInfoPopup = () => {};
  const handleNutritionalInfoClick = () => {
    setShowProductPopup(true);
  };
  const handlePrevProductClick = () => {
    setAnimationSlideToRight(true);
    setAnimationSlideToRight1o4(true);
    setTimeout(() => {
      const newProductId = calculateProductId(productId, -1);
      setProductId(newProductId);
      setAnimationSlideToRight(false);
      setAnimationSlideToRight1o4(false);
    }, 500);
  };
  const handleNextProductClick = () => {
    setAnimationSlideToLeft(true);
    setAnimationSlideToLeft1o4(true);
    setTimeout(() => {
      const newProductId = calculateProductId(productId, 1);
      setProductId(newProductId);
      setAnimationSlideToLeft(false);
      setAnimationSlideToLeft1o4(false);
    }, 500);
  };
  const handleNext2ProductClick = () => {
    setAnimationSlideToLeft2(true);
    setAnimationSlideToLeft2o4(true);
    setTimeout(() => {
      const newProductId = calculateProductId(productId, 2);
      setProductId(newProductId);
      setAnimationSlideToLeft2(false);
      setAnimationSlideToLeft2o4(false);
    }, 500);
  };
  const handleNext3ProductClick = () => {
    setAnimationSlideToLeft3(true);
    setAnimationSlideToLeft3o4(true);
    setTimeout(() => {
      const newProductId = calculateProductId(productId, 3);
      setProductId(newProductId);
      setAnimationSlideToLeft3(false);
      setAnimationSlideToLeft3o4(false);
    }, 500);
  };

  return (
    <div className="font-[Nunito]">
      {/* popup */}
      <ProductPopup
        showProductPopup={showProductPopup}
        setShowProductPopup={setShowProductPopup}
      />

      <div
        id="product-info-popup"
        className="fixed inset-0 z-50 hidden bg-black/70"
        onClick={handleCloseNutritionalInfoPopup}
      >
        <div className="p-4">
          <div className="relative my-18 space-y-4 rounded-lg bg-white p-4">
            <button
              className="absolute top-1 right-1 cursor-pointer"
              onClick={handleCloseNutritionalInfoPopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="size-8 text-[#d53e6f]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>

            <h2 className="text-center font-[Lora] text-2xl">
              Nutritional Information
            </h2>
            <img src="/images/ingredients-min.png" alt="" />
            <button
              className="font-montserrat w-full cursor-pointer rounded-lg bg-black p-4.5 text-center text-white"
              onClick={handleCloseNutritionalInfoPopup}
            >
              Try Lymphatic Drainage Risk-Free
            </button>
            <div className="space-y-3">
              <div className="flex items-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4 text-[#d3436e]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p className="text-xs">Made & produced in the USA</p>
              </div>
              <div className="flex items-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4 text-[#d3436e]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p className="text-xs">100% Natural Ingredients</p>
              </div>
              <div className="flex">
                <div className="flex items-center gap-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-4 text-[#d3436e]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <p className="text-xs">60-Day Money-Back Guarantee</p>
                </div>
                <div className="ml-auto flex items-center gap-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-4 text-[#d3436e]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <p className="text-xs">Free Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end popup */}

      {/* header */}
      <div className="flex justify-center p-3">
        <img src={logoImg} alt="" className="h-11" />
      </div>
      {/* end header */}

      {/* main */}
      <div className="px-4 py-8">
        <div className="">
          <div className="relative inline-block overflow-hidden">
            <Product
              product={products[calculateProductId(productId, -1)]}
              handleNutritionalInfoClick={handleNutritionalInfoClick}
              className={
                "absolute top-0 left-0 -translate-x-full transform " +
                (animationSlideToRight ? "slide-to-right" : "")
              }
            />
            <Product
              id="product"
              product={products[productId]}
              handleNutritionalInfoClick={handleNutritionalInfoClick}
              className={
                " " +
                (animationSlideToLeft ? "slide-to-left" : "") +
                " " +
                (animationSlideToRight ? "slide-to-right" : "") +
                " " +
                (animationSlideToLeft2 ? "slide-to-left-2" : "") +
                " " +
                (animationSlideToLeft3 ? "slide-to-left-3" : "")
              }
            />
            <Product
              product={products[calculateProductId(productId, 1)]}
              handleNutritionalInfoClick={handleNutritionalInfoClick}
              className={
                "absolute top-0 right-0 translate-x-full transform " +
                (animationSlideToLeft ? "slide-to-left" : "") +
                " " +
                (animationSlideToLeft2 ? "slide-to-left-2" : "") +
                " " +
                (animationSlideToLeft3 ? "slide-to-left-3" : "")
              }
            />
            <Product
              product={products[calculateProductId(productId, 2)]}
              handleNutritionalInfoClick={handleNutritionalInfoClick}
              className={
                "absolute top-0 right-0 translate-x-[200%] transform " +
                (animationSlideToLeft2 ? "slide-to-left-2" : "") +
                " " +
                (animationSlideToLeft3 ? "slide-to-left-3" : "")
              }
            />
            <Product
              product={products[calculateProductId(productId, 3)]}
              handleNutritionalInfoClick={handleNutritionalInfoClick}
              className={
                "absolute top-0 right-0 translate-x-[300%] transform " +
                (animationSlideToLeft3 ? "slide-to-left-3" : "")
              }
            />

            <button
              id="prev-product-btn"
              className="item-centers absolute top-1/2 left-6 flex -translate-y-1/2 transform cursor-pointer justify-center rounded-full border border-2 bg-white/15 p-1 text-white"
              onClick={handlePrevProductClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              id="next-product-btn"
              className="item-centers absolute top-1/2 right-6 flex -translate-y-1/2 transform cursor-pointer justify-center rounded-full border border-2 bg-white/15 p-1 text-white"
              onClick={handleNextProductClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div
            id="preview-products-img"
            className={
              "relative mb-6 grid grid-cols-4 gap-2 " +
              (animationSlideToRight1o4 ? "slide-to-right-1o4" : "") +
              " " +
              (animationSlideToLeft1o4 ? "slide-to-left-1o4" : "") +
              " " +
              (animationSlideToLeft2o4 ? "slide-to-left-2o4" : "") +
              " " +
              (animationSlideToLeft3o4 ? "slide-to-left-3o4" : "")
            }
          >
            <PreviewProduct
              src={products[calculateProductId(productId, -1)]?.image}
              className="absolute top-0 -left-2 -translate-x-full transform"
            />
            <PreviewProduct src={products[productId]?.image} />
            <PreviewProduct
              src={products[calculateProductId(productId, 1)]?.image}
              onClick={handleNextProductClick}
            />

            <PreviewProduct
              src={products[calculateProductId(productId, 2)]?.image}
              onClick={handleNext2ProductClick}
            />
            <PreviewProduct
              src={products[calculateProductId(productId, 3)]?.image}
              onClick={handleNext3ProductClick}
            />
            <PreviewProduct
              src={products[calculateProductId(productId, 4)]?.image}
              onClick={handleNext3ProductClick}
              className="absolute top-0 -right-2 translate-x-full transform"
            />
            <PreviewProduct
              src={products[calculateProductId(productId, 5)]?.image}
              onClick={handleNext3ProductClick}
              className="absolute top-0 -right-4 translate-x-[200%] transform"
            />
            <PreviewProduct
              src={products[calculateProductId(productId, 6)]?.image}
              onClick={handleNext3ProductClick}
              className="absolute top-0 -right-6 translate-x-[300%] transform"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={starIcon} className="h-3 w-3" />
            ))}
          </div>

          <p className="text-xs">4.8/5 Excellent | Based on 2381 Reviews</p>
        </div>

        <div>
          <h1 className="my-4 font-[Lora] text-2xl break-words">
            New Maximum Potency Formula - Lymphatic Drainage Capsules by
            Sculptique™
          </h1>
          <div className="space-y-4">
            {formulas.map((formula, index) => (
              <Formula key={index} icon={formula.icon} text={formula.text} />
            ))}
          </div>

          <div className="mt-2.5">
            <FrontrowEmbed />
          </div>
        </div>

        <div className="rounded-lg bg-[#f3eee0] p-3">
          <div>
            <form className="space-y-3.5">
              {buys.map((buy, index) => (
                <Buy
                  key={index}
                  text={buy.text}
                  saveText={buy.saveText}
                  price={buy.price}
                  details={buy.details}
                />
              ))}
            </form>
          </div>
        </div>

        <div>END</div>
      </div>
      {/* end main */}
    </div>
  );
}

export default App;
